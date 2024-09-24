import { defineStore } from 'pinia'
import type {
  PersonalData,
  SelectPersonalFilters
} from '@/common/types'
import { createApiV1Service } from '@/services/api'

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
      async requestPersonal(ident: string) {
        const service = createApiV1Service('personal')
  
        this.personal = (await service.get(ident))
      },
  
      async requestPersonals() {
        const service = createApiV1Service('personal')
  
        const data = await service.get_many(this.selectFilters)
  
        this.count = data.count
        this.personalList = data.result
        console.log(data, this.selectFilters)
      }
    }
})
