import { createRouter, createWebHistory, RouteRecordName, RouteRecordRaw, RouterOptions, _RouteRecordBase } from "vue-router"


const routes: RouteRecordRaw[] = [
  {
    path: "/quiz",
    beforeEnter(to: any, from: any, next: any) {
      next("/quiz/home")
    }
  } as any,
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