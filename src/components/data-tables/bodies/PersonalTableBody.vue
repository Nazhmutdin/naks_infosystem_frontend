<template>
    <base-table-body>
        <personal-row :row-data="personal" :key="personal.ident" v-for="(personal) in store.personalList"></personal-row>
    </base-table-body>
</template>

<script setup lang="ts">
    import BaseTableBody from './BaseTableBody.vue';
    import PersonalRow from '../rows/PersonalRow.vue';

    import { usePersonalStore } from '@/store';

    const store = usePersonalStore()
</script>

<style></style>
