<template>
    <base-table class="caption-top">
        <template v-slot:caption>
            <caption>
                Naks certifications ({{ sortedCerts.length }})
            </caption>
        </template>
        <template v-slot:header>
            <thead>
                <tr>
                    <th class="column-header"></th>
                    <th class="column-header"
                        v-for="(key, index) in PERSONAL_CERTIFICATION_TABLE_CONFIG.columns"
                        :class="key.headerClass"
                        :key="index">
                        {{ key.text }}
                    </th>
                </tr>
            </thead>
        </template>
        <template v-slot:body>
            <tbody class="table-group-divider">
                <tr :key="certNumber" v-for="[certNumber, certData] in sortedCerts">
                    <th class="row-cell cell">
                        <base-button
                            @click="() => openCertificationModal(certData)"
                            class="row-modal-link"
                            data-bs-toggle="modal"
                            data-bs-target="#CertificationModal"
                        >⇗</base-button>
                        <certification-data-modal
                            :cert-data="selectedCertData"
                            id="CertificationModal">
                        </certification-data-modal>
                    </th>
                    <th class="row-cell cell">{{ certNumber }}</th>
                    <th class="row-cell cell">{{ certData.certificationDate }}</th>
                    <th class="row-cell cell">{{ certData.expirationDate }}</th>
                    <th class="row-cell cell">{{ certData.method }}</th>
                </tr>
            </tbody>
        </template>
    </base-table>
</template>

<script setup lang="ts">
    import { ref, watch, type Ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import BaseTable from '@/ui/components/BaseTable.vue'
    import BaseButton from '@/ui/components/BaseButton.vue'
    import CertificationDataModal from './CertificationDataModal.vue'
    import type { GeneralNaksCertificationsData } from '@/application/types'
    import { usePersonalCertificationStore } from '@/infrastructure/store'
    import { PERSONAL_CERTIFICATION_TABLE_CONFIG } from '@/application/common'
    import { usePersonalCertificationTableSetup } from '@/application/composables/components/personal_page/personal_certification_table_setup'

    const personalNaksCertificationStore = usePersonalCertificationStore()
    const { sortCerts } = usePersonalCertificationTableSetup()

    function openCertificationModal(certData: GeneralNaksCertificationsData){
        selectedCertData.value = certData
        
        document.querySelectorAll(".nav-item").forEach((element: Element) => element.classList.remove("active"))
        document.querySelectorAll(".nav-link").forEach((element: Element) => element.classList.remove("active"))
        document.querySelectorAll(".tab-pane").forEach((element: Element) => element.classList.remove("active"))
        
        document.querySelector("#main-cert-tab")?.classList.add("active")
        document.querySelector("#main-cert-tab-link")?.classList.add("active")
        document.querySelector("#main-cert")?.classList.add("active")
    }

    const { personalCertificationList } = storeToRefs(personalNaksCertificationStore)
    let selectedCertData = ref({} as GeneralNaksCertificationsData)
    let sortedCerts: Ref<[string, GeneralNaksCertificationsData][]> = ref(Array.from(sortCerts(personalCertificationList.value)))

    watch(personalCertificationList, (certs) => {
        sortedCerts.value = Array.from(sortCerts(certs))
    })
</script>

<style scoped></style>
