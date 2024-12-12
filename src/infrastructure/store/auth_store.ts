import { defineStore } from 'pinia'
import { AuthApiService } from '@/infrastructure/api'
import { SessionStorageService } from '@/infrastructure/services/session_storage'
import { type UserData } from '@/application/types'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        sessionStorageService: new SessionStorageService(),
        currentUser: {} as UserData
    }),
    actions: {
        async getCurrentUser() {
            const apiService = new AuthApiService()

            const res = await apiService.getCurrentUser()

            this.currentUser = res.data
        },

        async authenticate() {
            const apiService = new AuthApiService()

            const res = await apiService.authenticate()

            if (res.status == 200) {
                this.sessionStorageService.isAuthenticated = true
            }

            return res
        },

        async login(login: string, password: string) {
            const apiService = new AuthApiService()

            const res = await apiService.login(login, password)

            if (res.status == 200) {
                this.sessionStorageService.isAuthenticated = true
            }

            return res
        },

        async updateTokens() {
            const apiService = new AuthApiService()

            const res = await apiService.updateTokens()

            if (res.status == 200) {
                this.sessionStorageService.isAuthenticated = true
            }

            return res
        },

        async logout() {
            const apiService = new AuthApiService()

            const res = await apiService.logout()

            if (res.status == 200) {
                this.sessionStorageService.isAuthenticated = false
            }

            return res
        }
    }
})
