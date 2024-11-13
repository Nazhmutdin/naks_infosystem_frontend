import { defineStore } from 'pinia'
import type {
    AcstData,
    UpdateAcstData
} from '@/application/types'
import type {
    SelectAcstFilters,
    SelectResponseData
} from "@/infrastructure/types"
import { createApiV1Service } from '@/infrastructure/api'
import router from '../router'

export const useAcstStore = defineStore('acst', {
    state: () => ({
        currentPage: 1 as number,
        selectFilters: {
            limit: 100
        } as SelectAcstFilters,
        acstList: [] as AcstData[],
        acst: {} as AcstData,
        count: 0 as number
    }),
    actions: {
        async deleteAcst(ident: string) {
            const service = createApiV1Service('acst')

            await service.delete(ident)

            router.push({ name: 'acstRegistry' })
        },

        async updateAcst(ident: string, data: UpdateAcstData) {
            const service = createApiV1Service('acst')

            await service.update(ident, data)

            this.acst = (await service.get(ident)).data
        },

        async getAcst(ident: string) {
            const service = createApiV1Service('acst')

            return (await service.get(ident)).data as AcstData
        },

        async selectAcsts() {
            const service = createApiV1Service('acst')

            return (await service.get_many(this.selectFilters)).data as SelectResponseData<AcstData>
        }
    }
})
