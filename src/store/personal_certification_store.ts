import { defineStore } from 'pinia'
import type {
  PersonalCertificationData,
  SelectPersonalCertificationFilters,
} from '@/common/types'
import { createApiV1Service } from '@/services/api'


export const usePersonalCertificationStore = defineStore('personal-certification', {
    state: () => ({
      currentPage: 1 as number,
      selectFilters: {
        limit: 100
      } as SelectPersonalCertificationFilters,
      personalCertification: {} as PersonalCertificationData,
      personalCertificationList: [] as PersonalCertificationData[],
      count: 0 as number
    }),
    getters: {
      getPersonalCertification: (state) => state.personalCertification,
      getPersonalCertificationList: (state) => state.personalCertificationList
    },
    actions: {
      async requestPersonalCertification(ident: string): Promise<PersonalCertificationData> {
        const service = createApiV1Service('personal-certification')
  
        return (await service.get(ident))
      },
  
      async requestPersonalCertificationList(
        filters: SelectPersonalCertificationFilters
      ) {
        const service = createApiV1Service('personal-certification')
  
        const data = await service.get_many(filters)
  
        this.count = data.count
        this.personalCertificationList = data.result
      }
    }
})
