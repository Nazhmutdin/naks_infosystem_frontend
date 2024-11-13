<template>
    <base-paginator
        :current-page="currentPage"
        :max-page="maxPage"
        @next="nextPage"
        @previous="previousPage"
    ></base-paginator>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BasePaginator from '../BasePaginator.vue'
import { useAcstRegistryPaginatorSetup } from '@/application/composables/components/acst_registry_page/acst_registry_paginator_setup'

const { acstStore, maxPage, nextPage, previousPage } = useAcstRegistryPaginatorSetup()

let currentPage = computed(() => {
    if (maxPage.value === 0) {
        return 0
    }
    return acstStore.currentPage
})
</script>

<style scoped></style>
