import { type AxiosInstance, type AxiosResponse } from 'axios'
import type {
    SelectPersonalNaksCertificationFilters,
    SelectNDTFilters,
    SelectPersonalFilters,
    SelectAcstFilters,
    BaseSelectFilters
} from '@/infrastructure/types'
import { createApiClient } from '@/lib/funcs'

export class ApiV1Service<Filters extends BaseSelectFilters> {
    protected baseUrl: string
    protected apiClient: AxiosInstance

    constructor(baseUrl: string) {
        this.apiClient = createApiClient()
        this.baseUrl = baseUrl
    }

    public async get(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/${ident}`)
    }

    public async get_many(filters: Filters): Promise<AxiosResponse> {
        return await this.apiClient.post(`${this.baseUrl}/select`, filters)
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

class PersonalApiV1Service extends ApiV1Service<SelectPersonalFilters> {
    constructor() {
        super('/v1/personal')
    }
}

class PersonalNaksCertificationApiV1Service extends ApiV1Service<SelectPersonalNaksCertificationFilters> {
    constructor() {
        super('/v1/personal-naks-certification')
    }

    public async getByPersonalIdent(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/personal/${ident}`)
    }
}

class NDTApiV1Service extends ApiV1Service<SelectNDTFilters> {
    constructor() {
        super('/v1/ndt')
    }

    public async getByPersonalIdent(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/personal/${ident}`)
    }
}

class AcstApiV1Service extends ApiV1Service<SelectAcstFilters> {
    constructor() {
        super('/v1/acst')
    }
}

type ApiDataTypes = 'personal' | 'personal-naks-certification' | 'ndt' | "acst"

export function createApiV1Service(
    mode: 'personal-naks-certification'
): PersonalNaksCertificationApiV1Service

export function createApiV1Service(mode: 'personal'): PersonalApiV1Service

export function createApiV1Service(mode: 'ndt'): NDTApiV1Service

export function createApiV1Service(mode: 'acst'): AcstApiV1Service

export function createApiV1Service(mode: ApiDataTypes) {
    switch (mode) {
        case 'personal': {
            return new PersonalApiV1Service()
        }
        case 'personal-naks-certification': {
            return new PersonalNaksCertificationApiV1Service()
        }
        case 'ndt': {
            return new NDTApiV1Service()
        }
        case 'acst': {
            return new AcstApiV1Service()
        }
    }
}
