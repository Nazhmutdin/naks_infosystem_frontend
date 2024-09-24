import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { useAuthStore } from './store'

import MainPage from "@/views/MainPage.vue"
import NotFoundPage from "@/views/NotFoundPage.vue"
import PersonalRegistryPage from "@/views/PersonalRegistryPage.vue"
import PersonalPage from "@/views/PersonalPage.vue"
import AuthPage from "@/views/AuthPage.vue"


const routes: RouteRecordRaw[] = [
  {
    name: "main",
    path: "/",
    component: MainPage
  },
  {
    name: "auth",
    path: "/auth",
    component: AuthPage
  },
  {
    name: "personalRegistry",
    path: "/personal-registry",
    component: PersonalRegistryPage
  },
  {
    name: "personal",
    path: "/personal/:id",
    component: PersonalPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: "notFound",
    component: NotFoundPage
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


router.beforeEach((to) => {
  const store = useAuthStore()

  if (!store.sessionStorageService.isAuthenticated && to.name !== "auth") {
    return {name: "auth"}
  }
})

export default router
