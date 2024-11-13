<template>
    <base-modal>
        <div class="modal-body">
            Are you sure?
        </div>
        <template v-slot:modal-buttons>
            <base-button :class="'btn-primary'" data-bs-dismiss="modal" @click="personalStore.deletePersonal(ident)">delete</base-button>
        </template>
    </base-modal>
</template>

<script setup lang="ts">
    import BaseModal from '../BaseModal.vue'
    import BaseButton from '../BaseButton.vue';
    import { usePersonalSetup } from '@/application/composables/personal_setup'

    const { ident, personalStore } = usePersonalSetup()
</script>

<style scoped></style>
