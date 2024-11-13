import { useAcstStore } from '@/infrastructure/store'

export function useAcstRegistrySetup() {
    const acstStore = useAcstStore()
    
    async function requestAcsts() {
        acstStore.currentPage = 1
        acstStore.selectFilters.offset = 0

        const res = await acstStore.selectAcsts()

        console.log(res)

        acstStore.acstList = res.result
        acstStore.count = res.count
    }

    function searchBarInputProcess(event: InputEvent) {

        const target = event.target as HTMLInputElement

        const searchItems = target.value.split(',')
    }

    return { acstStore, requestAcsts, searchBarInputProcess }
}
