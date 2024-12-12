<template>
    <base-modal>
        <div class="modal-body">
            <div v-html="acst.html" class="acst-content"></div>
            <div class="link-area">
                <a :href="acstFileLink(getAcstNumber(acst))" target="_blank" class="acst-link">{{ getAcstNumber(acst) }}</a>
            </div>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
    import type { AcstData } from '@/application/types';
    import BaseModal from '../BaseModal.vue'
    
    defineProps<{
        acst: AcstData
    }>()

    const getAcstNumber = (AcstData: AcstData | undefined) => {
        if (AcstData === undefined){
            return ""
        }

        return AcstData.acstNumber
    }

    const acstFileLink = (acstNumber: string): string => {

        return `https://${process.env.FILES_DOMAIN}/acst/by-number/${acstNumber}/download`
    } 
</script>

<style scoped>
    .link-area{
        text-align: center;
    }
</style>