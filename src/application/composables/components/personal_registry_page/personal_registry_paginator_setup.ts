import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { usePersonalStore } from '@/infrastructure/store'
import { nextPageAction, previousPageAction } from '@/lib/funcs'

export function usePersonalRegistryPaginatorSetup() {
    const personalStore = usePersonalStore()

    const { currentPage, count } = storeToRefs(personalStore)

    const maxPage = computed(() => Math.ceil(count.value / personalStore.selectFilters.limit))

    const callback = async () => {
        personalStore.selectFilters.offset = (currentPage.value - 1) * personalStore.selectFilters.limit

        const res = await personalStore.requestPersonals()

        personalStore.personalList = res.result
        personalStore.count = res.count
    }

    async function nextPage() {
        nextPageAction(currentPage, maxPage, callback)
    }

    async function previousPage() {
        previousPageAction(currentPage, callback)
    }

    return { personalStore, maxPage, nextPage, previousPage }
}
