import { usePersonalStore } from '@/infrastructure/store'
import { isKleymo, isPersonalNaksCertification } from '@/lib/funcs'

export function usePersonalRegistrySetup() {
    const personalStore = usePersonalStore()
    
    async function requestPersonals() {
        personalStore.currentPage = 1
        personalStore.selectFilters.offset = 0

        const res = await personalStore.requestPersonals()

        personalStore.personalList = res.result
        personalStore.count = res.count
    }

    function searchBarInputProcess(event: InputEvent) {
        personalStore.selectFilters.names = undefined
        personalStore.selectFilters.kleymos = undefined
        personalStore.selectFilters.certificationNumbers = undefined

        const names: string[] = []
        const kleymos: string[] = []
        const certs: string[] = []

        const target = event.target as HTMLInputElement

        const searchItems = target.value.split(',')

        for (const i in searchItems) {
            const item = searchItems[i].trim()

            if (isKleymo(item)) {
                kleymos.push(item)
            } else if (isPersonalNaksCertification(item)) {
                certs.push(item)
            } else {
                names.push(item)
            }
        }

        if (names.length > 0) {
            personalStore.selectFilters.names = names
        }

        if (kleymos.length > 0) {
            personalStore.selectFilters.kleymos = kleymos
        }

        if (certs.length > 0) {
            personalStore.selectFilters.certificationNumbers = certs
        }
    }

    return { personalStore, requestPersonals, searchBarInputProcess }
}
