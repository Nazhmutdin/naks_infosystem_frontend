<template>
    <base-table-head>
        <tr class="data-row">
            <th class="personal-page column-header"></th>
            <th class="column-header" :class="key.headerClass" v-for="(key, index) in PERSONAL_REGISTRY_TABLE_CONFIG.columns"
            :key="index"
            >{{ key.text }}</th>
        </tr>
    </base-table-head>
</template>

<script setup lang="ts">
    import BaseTableHead from './BaseTableHead.vue';
    import { PERSONAL_REGISTRY_TABLE_CONFIG } from '@/common';
</script>

<style scoped>
    .data-row{
        width: 100%;
    }

    .name-header{
        width: 40%;
    }

    .column-header{
        color: var(--text-color);
        font-size: var(--table-header-font-size);
        font-weight: var(--table-header-font-weight);
    }
</style>
