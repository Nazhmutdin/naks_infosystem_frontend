<template>
    <base-modal>
        <div class="modal-body">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">name</span>
                <input type="text" class="form-control" :placeholder="updateData.name" aria-describedby="addon-wrapping" v-model="updateData.name">
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">kleymo</span>
                <input type="text" class="form-control" :placeholder="updateData.kleymo" aria-describedby="addon-wrapping" v-model="updateData.kleymo">
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">birthday</span>
                <input type="date" class="form-control" :placeholder="updateData.birthday" aria-describedby="addon-wrapping" v-model="updateData.birthday">
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">nation</span>
                <input type="text" class="form-control" :placeholder="updateData.nation" aria-describedby="addon-wrapping" v-model="updateData.nation">
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">experience age</span>
                <input type="number" class="form-control" :placeholder="(updateData.expAge as string | undefined)" aria-describedby="addon-wrapping" v-model="updateData.expAge">
            </div>
        </div>
        <template v-slot:modal-buttons>
            <base-button :class="'btn-primary'" data-bs-dismiss="modal" @click="personalStore.updatePersonal(ident, updateData)">save changes</base-button>
        </template>
    </base-modal>
</template>

<script setup lang="ts">
    import BaseModal from '../BaseModal.vue';
    import BaseButton from '../BaseButton.vue';
    import { useUpdatePersonalSetup } from '@/application/composables/components/personal_page/update_personal_setup'

    const { ident, updateData, personalStore } = useUpdatePersonalSetup()
</script>

<style scoped></style>
