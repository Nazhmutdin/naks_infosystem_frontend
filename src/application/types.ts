export interface AcstData {
    ident: string
    acstNumber: string
    method: string
    materials: string[]
    certificationDate: string
    expirationDate: string
    company: string
    gtd: string[]
    detailTypes: string[] | null
    jointTypes: string[] | null
    thiknessFrom: number | null
    thiknessBefore: number | null
    diameterFrom: number | null
    diameterBefore: number | null
    preheating: boolean | null
    heatTreatment: boolean | null
    html: string
}


export interface UpdateAcstData {
    ident?: string
    acstNumber?: string
    method?: string
    materials?: string
    certificationDate?: string
    expirationDate?: string
    company?: string
    gtd?: string[]
    detailTypes?: string[] | null
    jointTypes?: string[] | null
    thiknessFrom?: number | null
    thiknessBefore?: number | null
    diameterFrom?: number | null
    diameterBefore?: number | null
    preheating?: boolean | null
    heatTreatment?: boolean | null
    html?: string | null
}


export interface PersonalData {
    ident: string
    name: string
    kleymo: string | null
    birthday: string | null
    expAge: number | null
    nation: string | null
}


export interface UpdatePersonalData {
    name?: string
    kleymo?: string | null
    birthday?: string | null
    expAge?: number | null
    nation?: string | null
}


export interface UserData{
    ident: string
    name: string
    email: string
    signDt: string
    updateDt: string
    loginDt: string
    isSuperuser: boolean
}


export interface PersonalNaksCertificationData {
    ident: string
    personal_ident: string
    certificationNumber: string
    certificationDate: string
    expirationDate: string
    expirationDateFact: string
    insert: string | null
    company: string
    gtd: string[]
    method: string | null
    detailTypes: string[] | null
    jointTypes: string[] | null
    materials: string[] | null
    detailThiknessFrom: number | null
    detailThiknessBefore: number | null
    outerDiameterFrom: number | null
    outerDiameterBefore: number | null
    weldingPosition: string | null
    rodDiameterFrom: number | null
    rodDiameterBefore: number | null
    detailDiameterFrom: number | null
    detailDiameterBefore: number | null
    html: string
}


export interface NDTData {
    ident: string
    personal_ident: string
    company: string | null
    subcompany: string | null
    project: string | null
    weldingDate: string
    ndtType: string
    totalWelded: number
    totalNdt: number
    totalAccepted: number
    totalRejected: number
}


export interface PersonalNaksCertificationsPack{
    main?: PersonalNaksCertificationData
    renewalOne?: PersonalNaksCertificationData
    renewalTwo?: PersonalNaksCertificationData
    insertOne?: PersonalNaksCertificationData
    insertTwo?: PersonalNaksCertificationData
}


export interface GeneralNaksCertificationsData{
    certificationDate: string
    expirationDate: string
    method: string
    certs: PersonalNaksCertificationsPack
}