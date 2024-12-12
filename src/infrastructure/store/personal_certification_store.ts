import { defineStore } from 'pinia'
import type {
    PersonalNaksCertificationData
} from '@/application/types'
import type {
    SelectResponseData,
    SelectPersonalNaksCertificationFilters
} from "@/infrastructure/types"
import { createApiService } from '@/infrastructure/api'

export const usePersonalCertificationStore = defineStore('personal-certification', {
    state: () => ({
        currentPage: 1 as number,
        selectFilters: {
            limit: 100
        } as SelectPersonalNaksCertificationFilters,
        personalCertification: {} as PersonalNaksCertificationData,
        personalCertificationList: [] as PersonalNaksCertificationData[]
    }),
    actions: {
        async requestPersonalCertification(ident: string): Promise<PersonalNaksCertificationData> {
            const service = createApiService('personal-naks-certification')

            return (await service.get(ident)).data as PersonalNaksCertificationData
        },

        async requestByPersonalIdent(ident: string) {
            const service = createApiService('personal-naks-certification')

            return (await service.getByPersonalIdent(ident)).data as PersonalNaksCertificationData[]
        },

        async requestPersonalCertificationList(filters: SelectPersonalNaksCertificationFilters) {
            const service = createApiService('personal-naks-certification')

            return (await service.get_many(filters))
                .data as SelectResponseData<PersonalNaksCertificationData>
        },
        setPersonalCertificationList(value: PersonalNaksCertificationData[]) {
            this.personalCertificationList = value
        }
    }
})
