import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/components/doscg/Index.vue';
// import Home from '@/views/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/DOSCG',
    name: 'Doscg',
    component: () =>
      import(/* webpackChunkName: "doscg" */ '../views/Doscg.vue'),
      // import(/* webpackChunkName: "doscg" */ '@/components/doscg/Index.vue'),
    children: [
      {
        path: 'sequences',
        component: () => import('@/components/doscg/Sequences.vue'),
      },
      {
        path: 'equation',
        component: () => import('@/components/doscg/Equation.vue'),
      },
      { path: 'routes', component: () => import('@/components/doscg/Routes.vue') },
      { path: 'cv', component: () => import('@/components/doscg/Cv.vue') },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
