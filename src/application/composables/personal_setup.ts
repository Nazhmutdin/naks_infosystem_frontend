import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonalStore, usePersonalCertificationStore, useNDTStore } from '@/infrastructure/store'


export function usePersonalSetup() {
    const personalStore = usePersonalStore()
    const personalCertificationStore = usePersonalCertificationStore()
    const ndtStore = useNDTStore()

    const { personal } = storeToRefs(personalStore)

    const ident = computed(() => personal.value?.ident)

    const name = computed({
        get: () => {
            if (personal.value?.name) {
                return personal.value?.name
            } else {
                return '-'
            }
        },
        set: (name: string) => {
            personal.value = { ...personal.value, name }
        }
    })

    const birthday = computed({
        get: () => {
            if (personal.value?.birthday) {
                return personal.value?.birthday
            } else {
                return '-'
            }
        },
        set: (birthday) => {
            personal.value = { ...personal.value, birthday }
        }
    })

    const kleymo = computed({
        get: () => {
            if (personal.value?.kleymo) {
                return personal.value?.kleymo
            } else {
                return '-'
            }
        },
        set: (kleymo) => {
            personal.value = { ...personal.value, kleymo }
        }
    })

    const nation = computed({
        get: () => {
            if (personal.value?.nation) {
                return personal.value?.nation
            } else {
                return '-'
            }
        },
        set: (nation) => {
            personal.value = { ...personal.value, nation }
        }
    })

    const expAge = computed({
        get: () => {
            if (personal.value?.expAge) {
                return personal.value?.expAge
            } else {
                return '-'
            }
        },
        set: (expAge: any) => {
            personal.value = { ...personal.value, expAge }
        }
    })

    async function onBeforeMountCallback() {
        const personalIdent = document.URL.split('/').pop() as string

        personalStore.personal = await personalStore.requestPersonal(personalIdent)

        const certs = await personalCertificationStore.requestByPersonalIdent(personalIdent)
        const ndts = await ndtStore.requestByPersonalIdent(personalIdent)

        personalCertificationStore.setPersonalCertificationList(certs)
        ndtStore.setNDTList(ndts)
    }

    return {
        personal,
        personalStore,
        personalCertificationStore,
        ndtStore,
        name,
        birthday,
        kleymo,
        ident,
        nation,
        expAge,
        onBeforeMountCallback
    }
}
