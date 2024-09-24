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

export function baseDataPresentation(value: any): any{
    if (!value){
        return "-"
    }

    return value
}


export function closeWindow(event: Event, window: HTMLElement) {
    if (!window.contains(event.target as HTMLElement)) {
        window.style.display = 'none';
    }
}

export function createApiClient() {
    return axios.create({
      baseURL: 'https://api.localhost',
      withCredentials: true
    })
}