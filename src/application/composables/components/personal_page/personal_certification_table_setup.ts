import type {
    PersonalNaksCertificationData,
    GeneralNaksCertificationsData,
    PersonalNaksCertificationsPack
} from '@/application/types'

export function usePersonalCertificationTableSetup() {
    const sortCerts = (certs: PersonalNaksCertificationData[]): Map<string, GeneralNaksCertificationsData> => {
        const result = new Map<string, GeneralNaksCertificationsData>()

        for (const cert of certs.reverse()) {
            const certNumber = cert.certificationNumber

            if (!result.has(certNumber)) {
                result.set(certNumber, {
                    certs: {} as PersonalNaksCertificationsPack
                } as GeneralNaksCertificationsData)
            }

            const certData = result.get(certNumber) as GeneralNaksCertificationsData

            if (cert.insert == 'В1') {
                certData.certs.insertOne = cert
                if (certData.certificationDate === undefined){
                    certData.certificationDate = cert.certificationDate
                }
                if (certData.expirationDate === undefined){
                    certData.expirationDate = cert.expirationDateFact
                }
                if (certData.method === undefined && cert.method !== null){
                    certData.method = cert.method
                }
                continue
            }
            if (cert.insert == 'В2') {
                certData.certs.insertTwo = cert
                if (certData.certificationDate === undefined){
                    certData.certificationDate = cert.certificationDate
                }
                if (certData.expirationDate === undefined){
                    certData.expirationDate = cert.expirationDateFact
                }
                if (certData.method === undefined && cert.method !== null){
                    certData.method = cert.method
                }
                continue
            }
            if (certData.certs.main === undefined) {
                certData.certs.main = cert
                certData.certificationDate = cert.certificationDate
                certData.expirationDate = cert.expirationDateFact

                if (cert.method != null) {
                    certData.method = cert.method
                } else {
                    certData.method = '-'
                }
            } else if (certData.certs.renewalOne === undefined) {
                certData.certs.renewalOne = cert
                if (certData.certificationDate === undefined){
                    certData.certificationDate = cert.certificationDate
                }
                certData.expirationDate = cert.expirationDateFact
            } else {
                certData.certs.renewalTwo = cert
                if (certData.certificationDate === undefined){
                    certData.certificationDate = cert.certificationDate
                }
                certData.expirationDate = cert.expirationDateFact
            }
        }

        return result
    }

    return { sortCerts }
}
