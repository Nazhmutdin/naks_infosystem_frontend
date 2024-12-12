import type { AxiosInstance, AxiosResponse } from 'axios'
import type {
    SelectPersonalNaksCertificationFilters,
    SelectNDTFilters,
    SelectPersonalFilters,
    SelectAcstFilters,
    BaseSelectFilters
} from '@/infrastructure/types'
import { createApiAxiosClient } from '@/lib/funcs'
import { ExceptionHandlerRegistry, ServiceExcptionHandlers } from '@/lib/exc_handler'


export class ApiCRUDMixin {
    protected baseUrl!: string
    protected apiClient!: AxiosInstance

    public async get(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/${ident}`)
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

export class ApiService<Filters extends BaseSelectFilters> extends ApiCRUDMixin {
    protected baseUrl: string
    protected apiClient: AxiosInstance

    constructor(baseUrl: string) {
        super()

        const handlerRegistry = new ExceptionHandlerRegistry()

        handlerRegistry.registerMany(ServiceExcptionHandlers)
        this.apiClient = createApiAxiosClient()
        this.baseUrl = baseUrl
    }

    public async get_many(filters: Filters): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/select`, { params: filters })
    }
}


class PersonalApiService extends ApiService<SelectPersonalFilters> {
    constructor() {
        super('/v1/personal')
    }
}

class PersonalNaksCertificationApiService extends ApiService<SelectPersonalNaksCertificationFilters> {
    constructor() {
        super('/v1/personal-naks-certification')
    }

    public async getByPersonalIdent(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/personal/${ident}`)
    }
}

class NDTApiService extends ApiService<SelectNDTFilters> {
    constructor() {
        super('/v1/ndt')
    }

    public async getByPersonalIdent(ident: string): Promise<AxiosResponse> {
        return await this.apiClient.get(`${this.baseUrl}/personal/${ident}`)
    }
}

class AcstApiService extends ApiService<SelectAcstFilters> {
    constructor() {
        super('/v1/acst')
    }
}

type ApiDataTypes = 'personal' | 'personal-naks-certification' | 'ndt' | "acst"

export function createApiService(
    mode: 'personal-naks-certification'
): PersonalNaksCertificationApiService

export function createApiService(mode: 'personal'): PersonalApiService

export function createApiService(mode: 'ndt'): NDTApiService

export function createApiService(mode: 'acst'): AcstApiService

export function createApiService(mode: ApiDataTypes) {
    switch (mode) {
        case 'personal': {
            return new PersonalApiService()
        }
        case 'personal-naks-certification': {
            return new PersonalNaksCertificationApiService()
        }
        case 'ndt': {
            return new NDTApiService()
        }
        case 'acst': {
            return new AcstApiService()
        }
    }
}
