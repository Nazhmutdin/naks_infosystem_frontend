import { type AxiosInstance, type AxiosResponse } from 'axios'
import { createAuthAxiosClient } from '@/lib/funcs'

export class AuthApiService {
    private apiClient: AxiosInstance

    constructor() {
        this.apiClient = createAuthAxiosClient()
    }

    public async getCurrentUser() {
        return this.apiClient.post('auth/v1/me')
    }

    public async login(login: string, password: string) {
        return this.apiClient.post('auth/v1/login', { login, password })
    }

    public async authenticate(): Promise<AxiosResponse> {
        return this.apiClient.post('auth/v1/authenticate')
    }

    public async updateTokens(): Promise<AxiosResponse> {
        return this.apiClient.post('auth/v1/update-tokens')
    }

    public async logout(): Promise<AxiosResponse> {
        return this.apiClient.post('auth/v1/logout')
    }
}
