
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLogout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
<<<<<<< HEAD
  {
    path: '/pacientes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pacientes.vue') }
    ]
  },
  // Always leave this as last one,
=======
  // Always leave this as last one, test
>>>>>>> 30d741e054c2940237b1edfb4855e91fb43e9025
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
