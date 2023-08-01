// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: 'contact',
        name: 'Contact Us',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
      },
      {
        path: 'main',
        name: 'Podcasts',
        component: () => import(/* webpackChunkName: "main" */ '@/views/PodcastMain.vue'),
        children: [
          {
            path: ':id',
            name: 'Podcast Detail',
            props: true,
            component: () => import(/* webpackChunkName: "details" */ '@/views/SinglePodcast.vue'),
            children: [
              {
              path: 'episodes/:epid',
              name: 'episode details dummy',
              props: true,
              component: () => import(/* webpackChunkName: "details" */ '@/views/SingleEpisode.vue'),
              }
            ]
          },
        ]
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/404.vue'),
      },

    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
