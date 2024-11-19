<template>
    <base-modal>
        <div class="modal-header">
            {{ acstData.acstNumber }}
        </div>
        <div v-html="acstData.html" class="modal-body"></div>
    </base-modal>
</template>

<script setup lang="ts">
    import type { AcstData } from '@/application/types';
    import BaseModal from '../BaseModal.vue'
    
    defineProps<{
        acstData: AcstData
    }>()
</script>

<style scoped>
</style>