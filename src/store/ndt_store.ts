import { defineStore } from 'pinia'
import type {
  NDTData,
  SelectNDTFilters
} from '@/common/types'
import { createApiV1Service } from '@/services/api'


export const useNDTStore = defineStore('ndt', {
    state: () => ({
      currentPage: 1 as number,
      selectFilters: {
        limit: 100
      } as SelectNDTFilters,
      ndt: {} as NDTData,
      ndtList: [] as NDTData[],
      count: 0 as number
    }),
    getters: {
      getNDT: (state) => state.ndt,
      getNDTList: (state) => state.ndtList
    },
    actions: {
      async requestNDT(ident: string): Promise<NDTData> {
        const service = createApiV1Service('ndt')
  
        return (await service.get(ident))
      },
  
      async requestNDTList(filters: SelectNDTFilters) {
        const service = createApiV1Service('ndt')
        const data = await service.get_many(filters)
  
        this.count = data.count
        this.ndtList = data.result
      }
    }
})
