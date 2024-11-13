<template>
    <div class="wrap">
        <div class="personal-data-area">
            <div class="personal-image-area">
                <img src="" alt="" />
            </div>
            <div class="personal-data">
                <div class="personal-ident-area">
                    <div class="personal-ident"><label>ident:</label> {{ ident }}</div>
                </div>
                <div class="personal-name-area">
                    <div class="personal-name"><label>name:</label> {{ name }} ({{ kleymo }})</div>
                </div>
                <div class="personal-birthday-area">
                    <div class="personal-birthday"><label>birthday:</label> {{ birthday }}</div>
                </div>
                <div class="personal-nation-area">
                    <div class="personal-nation"><label>nation:</label> {{ nation }}</div>
                </div>
                <div class="personal-exp-age-area">
                    <div class="personal-nation"><label>experience age:</label> {{ expAge }}</div>
                </div>
            </div>
            <div class="persona-data-actions">
                <div class="update-personal-data-action">
                    <base-button :class="'btn-secondary action-btn'" data-bs-toggle="modal" data-bs-target="#UpdatePersonalData">update</base-button>
                </div>
                <div class="delete-personal-data-action">
                    <base-button :class="'btn-secondary action-btn'" data-bs-toggle="modal" data-bs-target="#DeletePersonalData">delete</base-button>
                </div>
            </div>
        </div>
        <div class="other-personal-data-area">
            <certifications-table
                v-if="personalCertificationStore.personalCertificationList.length > 0"></certifications-table>
            <div v-else>No certs</div>
            <ndt-table v-if="ndtStore.ndtList.length > 0" :ndts="ndtStore.ndtList"></ndt-table>
            <div v-else>No ndts</div>
        </div>
    </div>
    <update-action-modal id="UpdatePersonalData"></update-action-modal>
    <delete-action-modal id="DeletePersonalData"></delete-action-modal>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue'
    import { usePersonalSetup } from '@/application/composables/personal_setup'
    import NdtTable from '@/ui/components/personal_page/NdtTable.vue'
    import CertificationsTable from '@/ui/components/personal_page/CertificationsTable.vue'
    import BaseButton from './components/BaseButton.vue'
    import UpdateActionModal from './components/personal_page/UpdateActionModal.vue'
    import DeleteActionModal from './components/personal_page/DeleteActionModal.vue'

    const {
        personalCertificationStore,
        ndtStore,
        name,
        birthday,
        kleymo,
        ident,
        nation,
        expAge,
        onBeforeMountCallback
    } = usePersonalSetup()

    onBeforeMount(onBeforeMountCallback)
</script>

<style scoped>
    :deep(.row-modal-link) {
        padding: 0;
    }
    .wrap {
        margin: 1rem 1.5rem;
    }
    .personal-data-area,
    .other-personal-data-area {
        display: flex;
        width: 70%;
        margin: 0;
    }
    .personal-data-area * {
        font-size: 16px;
        margin: auto 0;
    }
    .other-personal-data-area {
        flex-direction: column;
        margin-top: 1rem;
        gap: 20px;
    }
    .personal-data,
    .personal-image-area {
        margin: 0;
    }
    .personal-image-area {
        width: 120px;
        height: 180px;
    }
    .personal-data {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
    }
    .persona-data-actions{
        display: none;
        /* display: flex; */
        margin: 0 1rem;
        flex-direction: row;
        gap: 5px;
    }
    .persona-data-actions *{
        margin: 0;
    }
    .action-btn{
        padding: 3px 6px;
    }
</style>
