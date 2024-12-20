import { type Ref } from "vue";

import axios from 'axios'
import { type AxiosError } from "axios"
import { useAuthStore } from "@/infrastructure/store"
import router from "@/infrastructure/router";


export async function nextPageAction(currentPage: Ref<number>, maxPage: Ref<number>, callback: CallableFunction) {
    if (currentPage.value < maxPage.value) {
        currentPage.value = currentPage.value + 1
        await callback()
    }
}

export async function previousPageAction(currentPage: Ref<number>, callback: CallableFunction) {
    if (currentPage.value > 1) {
        currentPage.value = currentPage.value - 1
        await callback()
    }
}

export function createAxiosClient(domain: string) {
    return axios.create({
      baseURL: `https://${domain}`,
      withCredentials: true
    })
}

export function createApiAxiosClient() {
    return createAxiosClient(process.env.API_DOMAIN as string)
}

export function createFilesAxiosClient() {
    return createAxiosClient(process.env.FILES_DOMAIN as string)
}

export function createAuthAxiosClient() {
    return createAxiosClient(process.env.API_DOMAIN as string)
}

export function isKleymo(value: string) {
    const pattern = new RegExp('^[0-9A-Z]{4}$')

    return pattern.test(value)
}

export function isPersonalNaksCertification(value: string) {
    const pattern = new RegExp('^[А-Я]+-[0-9А-Я]+-[IV]+-[0-9]{5}$')

    return pattern.test(value)
}

export const authenticateErrorHandler = async (error: AxiosError) => {
    await useAuthStore().authenticate()

    const config = error.config

    if (config){
        createAuthAxiosClient()(config)
    }
}

export const updateTokensErrorHandler = async (error: AxiosError) => {
    await useAuthStore().updateTokens()

    const config = error.config

    if (config){
        createAuthAxiosClient()(config)
    }
}

export const authPageErrorHandler = async (error: AxiosError) => {
    router.push({ name: "auth" })
}
