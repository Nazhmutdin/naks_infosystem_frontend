import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { NDTData } from '@/application/types'
import type {
    SelectNDTFilters, 
    SelectResponseData
} from "@/infrastructure/types"
import { createApiV1Service } from '@/infrastructure/api'

export const useNDTStore = defineStore('ndt', {
    state: () => ({
        currentPage: 1 as number,
        selectFilters: {
            limit: 100
        } as SelectNDTFilters,
        ndt: {} as NDTData,
        ndtList: [] as NDTData[]
    }),
    getters: {
        getNDT() {
            return computed((): NDTData => this.ndt)
        },
        getNDTList() {
            return computed((): NDTData[] => this.ndtList)
        }
    },
    actions: {
        async requestNDT(ident: string): Promise<NDTData> {
            const service = createApiV1Service('ndt')

            return (await service.get(ident)).data as NDTData
        },

        async requestByPersonalIdent(ident: string) {
            const service = createApiV1Service('ndt')

            return (await service.getByPersonalIdent(ident)).data as NDTData[]
        },

        async requestNDTList(filters: SelectNDTFilters) {
            const service = createApiV1Service('ndt')
            return (await service.get_many(filters)).data as SelectResponseData<NDTData>
        },
        setNDTList(value: NDTData[]) {
            this.ndtList = value
        }
    }
})
