<template>
  <q-page class="flex flex-center">
    <div class="buscador_home">
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'PageIndex',
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      video: false,
      currentVideo: '',
      banners: [],
      urlSite: 'https://obt3.cl',
      introHome: {
        field_video_youtube: []
      },
      multimediaHome: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getBanners()
    this.getIntroHome()
    this.getMultimediaHome()
  },
  methods: {
    getBanners () {
      var _this = this
      configServices.loadData(this, 'slider-home/json', {
        callBack: (data) => {
          _this.banners = data
          _this.slide = data[0].title
        }
      })
    },
    getIntroHome () {
      var _this = this
      configServices.loadData(this, 'intro-home/json', {
        callBack: (data) => {
          data[0].field_video_youtube = data[0].field_video_youtube.split('=')
          _this.introHome = data[0]
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/home/json', {
        callBack: (data) => {
          const videos = []
          const images = []
          for (const item in data) {
            if (data[item].field_tipo_de_multimedia === 'Video') {
              videos.push(data[item])
            } else {
              images.push(data[item])
            }
          }

          _this.multimediaHome.push(images[1])
          _this.multimediaHome.push(images[0])
          _this.multimediaHome.push(videos[1])
          _this.multimediaHome.push(videos[2])
          _this.multimediaHome.push(videos[0])
          _this.$q.loading.hide()
        }
      })
    },
    openItem (e, multimedia) {
      e.preventDefault()
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    },
    irDetalleMultimedia () {
      this.$router.push('/detalle-multimedia')
    }
  }
}
</script>
