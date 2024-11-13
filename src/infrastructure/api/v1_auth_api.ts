import { type AxiosInstance, type AxiosResponse } from 'axios'
import { createApiClient } from '@/lib/funcs'

export class AuthApiV1Service {
    private apiClient: AxiosInstance

    constructor() {
        this.apiClient = createApiClient()
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
