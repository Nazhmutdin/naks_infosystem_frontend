<template>
    <base-paginator
    :res-count="store.count"
    :page-step="store.selectFilters.limit"
    :max-page="maxPage"
    :current-page="store.currentPage"
    @next-page="nextPage"
    @previous-page="previousPage"
    ></base-paginator>
</template>

<script setup lang="ts">
    import BasePaginator from './BasePaginator.vue';
    import { usePersonalRegistryPaginatorSetup } from "@/composables/components/personal_registry_paginator";
    
    const { store, maxPage, nextPage, previousPage } = usePersonalRegistryPaginatorSetup()
</script>

<style></style>
