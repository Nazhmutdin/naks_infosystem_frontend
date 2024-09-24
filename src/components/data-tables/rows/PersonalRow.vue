<template>
    <base-row>
        <registry-row-link class="row-cell" :dst-path="`/personal/${rowData.ident}`"></registry-row-link>
        <th :key="index" class="row-cell" :class="header.rowCellClass" v-for="(header, index) in PERSONAL_REGISTRY_TABLE_CONFIG.columns">{{ rowData[index] }}</th>
    </base-row>
</template>

<script setup lang="ts">
    import RegistryRowLink from '@/components/RegistryRowLink.vue';
    import BaseRow from './BaseRow.vue';
    import { PERSONAL_REGISTRY_TABLE_CONFIG } from '@/common';
    import { type PersonalData } from '@/common/types';
    import type { PropType } from 'vue';
    
    defineProps({
        rowData: {
            type: Object as PropType<PersonalData>,
            required: true
        }
    })

</script>

<style scoped>
    .row-cell{
        color: var(--text-color);
        font-family: var(--usual-text-font-family);
        font-size: var(--table-body-font-size);
        font-weight: var(--table-body-font-weight);
        padding: 0;
    }
    .name-row-cell{
        text-align: left;
    }
</style>