import { storeToRefs } from 'pinia'
import { usePersonalStore } from '@/infrastructure/store'

export function useFiltersModalSetup() {
    const { selectFilters } = storeToRefs(usePersonalStore())

    function selectMethod(event: PointerEvent) {
        if (selectFilters.value.methods === undefined) {
            selectFilters.value.methods = []
        }

        const checkbox = event.target as HTMLInputElement

        if (checkbox.checked) {
            if (selectFilters.value.methods.indexOf(checkbox.value) == -1) {
                selectFilters.value.methods.push(checkbox.value)
            }
        } else {
            const index = selectFilters.value.methods.indexOf(checkbox.value)

            if (index > -1) {
                selectFilters.value.methods.splice(index, 1)
            }
        }

        if (selectFilters.value.methods.length === 0) {
            selectFilters.value.methods = undefined
        }
    }

    return { selectFilters, selectMethod }
}
