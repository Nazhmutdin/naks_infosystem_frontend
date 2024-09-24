import { defineStore } from 'pinia'
import { AuthApiV1Service } from '@/services/api'
import { SessionStorageService } from '@/services/session_storage'


export const useAuthStore = defineStore('auth', () => {
  const sessionStorageService = new SessionStorageService()

  async function authenticate() {
    const apiService = new AuthApiV1Service()

    const res = await apiService.authenticate()

    if (res.status == 200) {
      sessionStorageService.isAuthenticated = true
    }

    return res
  }

  async function login(login: string, password: string) {
    const apiService = new AuthApiV1Service()

    const res = await apiService.login(login, password)

    if (res.status == 200) {
      sessionStorageService.isAuthenticated = true
    }

    return res
  }

  async function update_tokens() {
    const apiService = new AuthApiV1Service()

    const res = await apiService.update_tokens()

    if (res.status == 200) {
      sessionStorageService.isAuthenticated = true
    }

    return res
  }

  async function logout() {
    const apiService = new AuthApiV1Service()

    const res = await apiService.logout()

    if (res.status == 200) {
      sessionStorageService.isAuthenticated = false
    }

    return res
  }

  return { sessionStorageService, login, authenticate, update_tokens, logout }
})
