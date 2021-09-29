import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: "/quiz",
    beforeEnter(to: any, from: any, next: any) {
      next("/quiz/home")
    }
  },
  {
    path: '/quiz/home',
    name: 'home-page',
    component: () => import("./views/Home.vue")
  },
  {
    path: '/quiz/main',
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