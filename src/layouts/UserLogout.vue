<template>
    <q-layout view="hHh Lpr fFf">
        <q-page-container>
        <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

export default {
  name: 'UserLogout',

  methods: {
    irRegistrar () {
      this.$router.push('/registro')
    },
    irLogin () {
      this.$router.push('/login')
    }
  },
  data () {
    return {
      drawerRight: false
    }
  }
}
</script>
