import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: "/",
    beforeEnter(to: any, from: any, next: any) {
      next("/home")
    }
  },
  {
    path: '/home',
    name: 'home-page',
    component: () => import("./views/Home.vue")
  },
  {
    path: '/main',
    name: 'quiz-screen',
    component: () => import("./views/QuizScreen.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page-not-found',
    component: () => import("./views/404.vue")
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router