import { computed } from "vue";
import { storeToRefs } from "pinia";

import { usePersonalStore } from "@/store";
import { nextPageAction, previousPageAction } from "@/common/funcs";


export function usePersonalRegistryPaginatorSetup() {
    const store = usePersonalStore()

    const { currentPage, count } = storeToRefs(store)

    const maxPage = computed(() => Math.ceil(count.value / store.selectFilters.limit))

    const callback = async () => {
        store.selectFilters.offset = (currentPage.value - 1) * store.selectFilters.limit
        await store.requestPersonals()
    }

    async function nextPage() {
        nextPageAction(currentPage, maxPage, callback)
    }

    async function previousPage() {
        previousPageAction(currentPage, callback)
    }

    return { store, maxPage, nextPage, previousPage }
}
