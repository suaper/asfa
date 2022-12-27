
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLogout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/pacientes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pacientes.vue') }
    ]
  },
  {
    path: '/crear-paciente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CrearPaciente.vue') }
    ]
  },
  {
    path: '/registros',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Registros.vue') }
    ]
  },
  {
    path: '/documentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Documentos.vue') }
    ]
  },
  {
    path: '/lista-documentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ListaDocumentos.vue') }
    ]
  },
  {
    path: '/reportes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Reportes.vue') }
    ]
  },
  {
    path: '/crear-registro-vih',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CrearRegistroVih.vue') }
    ]
  },
  {
    path: '/resumen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Resumen.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
