import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { useAuthStore } from '@/infrastructure/store'

import MainPage from '@/ui/MainPage.vue'
import MePage from '@/ui/MePage.vue'
import NotFoundPage from '@/ui/NotFoundPage.vue'
import PersonalRegistryPage from '@/ui/PersonalRegistryPage.vue'
import AcstRegistryPage from '@/ui/AcstRegistryPage.vue'
import PersonalPage from '@/ui/PersonalPage.vue'
import AuthPage from '@/ui/AuthPage.vue'
import EdoPage from '@/ui/EdoPage.vue'

const routes: RouteRecordRaw[] = [
    {
        name: 'main',
        path: '/',
        component: MainPage
    },
    {
        name: 'me',
        path: '/me',
        component: MePage
    },
    {
        name: 'auth',
        path: '/auth',
        component: AuthPage
    },
    {
        name: 'personalRegistry',
        path: '/personal-registry',
        component: PersonalRegistryPage
    },
    {
        name: 'acstRegistry',
        path: '/acst-registry',
        component: AcstRegistryPage
    },
    {
        name: 'edo',
        path: '/edo',
        component: EdoPage
    },
    {
        name: 'personal',
        path: '/personal/:id',
        component: PersonalPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to) => {
    const authStore = useAuthStore()

    if (!authStore.sessionStorageService.isAuthenticated && to.name !== 'auth') {
        return { name: 'auth' }
    }
})

export default router
