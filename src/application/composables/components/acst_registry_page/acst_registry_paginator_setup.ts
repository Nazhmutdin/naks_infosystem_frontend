import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useAcstStore } from '@/infrastructure/store'
import { nextPageAction, previousPageAction } from '@/lib/funcs'

export function useAcstRegistryPaginatorSetup() {
    const acstStore = useAcstStore()

    const { currentPage, count } = storeToRefs(acstStore)

    const maxPage = computed(() => Math.ceil(count.value / acstStore.selectFilters.limit))

    const callback = async () => {
        acstStore.selectFilters.offset = (currentPage.value - 1) * acstStore.selectFilters.limit

        const res = await acstStore.selectAcsts()

        acstStore.acstList = res.result
        acstStore.count = res.count
    }

    async function nextPage() {
        nextPageAction(currentPage, maxPage, callback)
    }

    async function previousPage() {
        previousPageAction(currentPage, callback)
    }

    return { acstStore, maxPage, nextPage, previousPage }
}
