import { type Ref } from "vue";

import axios from 'axios'

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

export function createApiClient() {
    return axios.create({
      baseURL: `https://${process.env.API_DOMAIN}`,
      withCredentials: true
    })
}

export function isKleymo(value: string) {
    const pattern = new RegExp('^[0-9A-Z]{4}$')

    return pattern.test(value)
}

export function isPersonalNaksCertification(value: string) {
    const pattern = new RegExp('^[А-Я]+-[0-9А-Я]+-[IV]+-[0-9]{5}$')

    return pattern.test(value)
}
