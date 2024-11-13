import { type UpdatePersonalData } from '@/application/types'
import { usePersonalStore } from '@/infrastructure/store'

export function useUpdatePersonalSetup() {
    const personalStore = usePersonalStore()

    const ident = document.URL.split('/').pop() as string

    const updateData = {} as UpdatePersonalData

    updateData.name = personalStore.personal.name
    updateData.kleymo = personalStore.personal.kleymo
    updateData.birthday = personalStore.personal.birthday
    updateData.expAge = personalStore.personal.expAge
    updateData.nation = personalStore.personal.nation

    return { ident, updateData, personalStore }
}
