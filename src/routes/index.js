/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  {
    path: '/about',
    name: 'about.index',
    component: () => import('@/pages/About/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  {
    path: '/visited',
    name: 'placesvisited.index',
    component: () => import('@/pages/Visited/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
