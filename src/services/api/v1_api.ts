import { type AxiosInstance, type AxiosResponse } from 'axios'
import {
  type SelectPersonalCertificationFilters,
  type SelectNDTFilters,
  type SelectPersonalFilters,
  type SelectResponseData,
  type PersonalData,
  type BaseSelectFilters,
  type PersonalCertificationData,
  type NDTData
} from '@/common/types'
import { createApiClient } from '@/common/funcs'

type ApiDataTypes = 'personal' | 'personal-certification' | 'ndt'

export class ApiV1Service<Filters extends BaseSelectFilters, Data> {
  private baseUrl: string
  private apiClient: AxiosInstance

  constructor(mode: ApiDataTypes) {
    this.apiClient = createApiClient()

    switch (mode) {
      case 'personal': {
        this.baseUrl = '/v1/personal'
        break
      }
      case 'personal-certification': {
        this.baseUrl = '/v1/personal-certification'
        break
      }
      case 'ndt': {
        this.baseUrl = '/v1/ndt'
        break
      }
    }
  }

  public async get(ident: string): Promise<Data> {
    return await this.apiClient.get(`${this.baseUrl}/${ident}`).then((res) => {
      return res.data
    })
  }

  public async get_many(filters: Filters): Promise<SelectResponseData<Data>> {
    return await this.apiClient.post(`${this.baseUrl}/select`, filters).then((res) => {
      return res.data
    })
  }

  public async create(data: object): Promise<AxiosResponse> {
    return await this.apiClient.post(this.baseUrl, data).then((res) => {
      return res
    })
  }

  public async update(ident: string, data: object): Promise<AxiosResponse> {
    return await this.apiClient.patch(`${this.baseUrl}/${ident}`, data).then((res) => {
      return res
    })
  }

  public async delete(ident: string): Promise<AxiosResponse> {
    return await this.apiClient.delete(`${this.baseUrl}/${ident}`).then((res) => {
      return res
    })
  }
}

export function createApiV1Service(
  mode: 'personal-certification'
): ApiV1Service<SelectPersonalCertificationFilters, PersonalCertificationData>

export function createApiV1Service(
  mode: 'personal'
): ApiV1Service<SelectPersonalFilters, PersonalData>

export function createApiV1Service(
  mode: 'ndt'
): ApiV1Service<SelectNDTFilters, NDTData>

export function createApiV1Service(mode: ApiDataTypes) {
  return new ApiV1Service(mode)
}
