import type { UUID } from "crypto"


export interface BaseSelectFilters {
    limit: number,
    offset: number
}


export interface SelectPersonalCertificationFilters extends BaseSelectFilters {
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
}


export interface SelectPersonalFilters extends BaseSelectFilters, SelectPersonalCertificationFilters {
    kleymos?: string[],
    names?: string
}


export interface SelectNDTFilters extends BaseSelectFilters {
    idents?: string
    personalIdents?: string
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


export interface PersonalData {
    ident: UUID
    name: string
    kleymo: string | null
    birthday: string | null
    passportNumber: string | null
    expAge: number | null
    nation: string | null
}


export interface PersonalCertificationData {
    ident: UUID
    personal_ident: UUID
    jobTitle: string
    certificationNumber: string
    certificationDate: string
    expirationDate: string
    expirationDate_fact: string
    insert: string | null
    company: string
    gtd: string[]
    method: string | null
    detailsType: string[] | null
    jointType: string[] | null
    weldingMaterialsGroups: string[] | null
    detailsThiknessFrom: number | null
    detailsThiknessBefore: number | null
    outerDiameterFrom: number | null
    outerDiameterBefore: number | null
    weldingPosition: string | null
    connectionType: string | null
    rodDiameterFrom: number | null
    rodDiameterBefore: number | null
    rodAxisPosition: string | null
    detailsDiameterFrom: number | null
    detailsDiameterBefore: number | null
}


export interface NDTData {
    kleymo: string | null
    personal_ident: UUID
    company: string | null
    subcompany: string | null
    project: string | null
    weldingDate: string | null
    ndtType: string | null
    totalWelded: number | null
    totalNdt: number | null
    totalAccepted: number | null
    totalRejected: number | null
}
