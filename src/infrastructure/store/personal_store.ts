import { defineStore } from 'pinia'
import type {
    PersonalData,
    UpdatePersonalData
} from '@/application/types'
import type {
    SelectPersonalFilters,
    SelectResponseData
} from "@/infrastructure/types"
import { createApiV1Service } from '@/infrastructure/api'
import router from '../router'

export const usePersonalStore = defineStore('personal', {
    state: () => ({
        currentPage: 1 as number,
        selectFilters: {
            limit: 100
        } as SelectPersonalFilters,
        personalList: [] as PersonalData[],
        personal: {} as PersonalData,
        count: 0 as number
    }),
    actions: {
        async deletePersonal(ident: string) {
            const service = createApiV1Service('personal')

            await service.delete(ident)

            router.push({ name: 'personalRegistry' })
        },

        async updatePersonal(ident: string, data: UpdatePersonalData) {
            const service = createApiV1Service('personal')

            await service.update(ident, data)

            this.personal = (await service.get(ident)).data
        },

        async requestPersonal(ident: string) {
            const service = createApiV1Service('personal')

            return (await service.get(ident)).data as PersonalData
        },

        async requestPersonals() {
            const service = createApiV1Service('personal')

            return (await service.get_many(this.selectFilters))
                .data as SelectResponseData<PersonalData>
        }
    }
})
