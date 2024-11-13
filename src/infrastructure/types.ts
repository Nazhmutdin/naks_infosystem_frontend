export interface BaseSelectFilters {
    limit: number,
    offset: number
}


export interface SelectAcstFilters extends BaseSelectFilters {}


export interface SelectPersonalNaksCertificationFilters extends BaseSelectFilters {
    idents?: string[]
    personalIdents?: string[]
    certificationNumbers?: string[]
    inserts?: string[]
    methods?: string[]
    certificationDateFrom?: string
    certificationDateBefore?: string
    expirationDateFrom?: string
    expirationDateBefore?: string
    expirationDateFactFrom?: string
    expirationDateFactBefore?: string
    thiknessFrom?: string
    thiknessBefore?: string
    detailDiameterFrom?: string
    detailDiameterBefore?: string
    outerDiameterFrom?: string
    outerDiameterBefore?: string
}


export interface SelectNDTFilters extends BaseSelectFilters {
    idents?: string[]
    personalIdents?: string[]
    weldingDateFrom?: string
    weldingDateBefore?: string
    totalWeldedFrom?: number
    totalWeldedBefore?: number
    totalNDTFrom?: number
    totalNDTBefore?: number
    totalAcceptedFrom?: number
    totalAcceptedBefore?: number
    totalRejectedFrom?: number
    totalRejectedBefore?: number
}


export interface SelectPersonalFilters extends BaseSelectFilters {
    idents?: string[]
    kleymos?: string[]
    names?: string[]

    certificationNumbers?: string[]
    inserts?: string[]
    methods?: string[]
    certificationDateFrom?: string
    certificationDateBefore?: string
    expirationDateFrom?: string
    expirationDateBefore?: string
    expirationDateFactFrom?: string
    expirationDateFactBefore?: string
    thiknessFrom?: string
    thiknessBefore?: string
    detailDiameterFrom?: string
    detailDiameterBefore?: string
    outerDiameterFrom?: string
    outerDiameterBefore?: string

    weldingDateFrom?: string
    weldingDateBefore?: string
    totalWeldedFrom?: number
    totalWeldedBefore?: number
    totalNDTFrom?: number
    totalNDTBefore?: number
    totalAcceptedFrom?: number
    totalAcceptedBefore?: number
    totalRejectedFrom?: number
    totalRejectedBefore?: number
}


export interface SelectResponseData<Data = BaseSelectFilters> {
    result: Data[],
    count: number
}