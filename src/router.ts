import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: "/",
    beforeEnter(to: any, from: any, next: any) {
      next("/")
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router