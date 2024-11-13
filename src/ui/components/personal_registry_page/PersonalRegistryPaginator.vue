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
import { usePersonalRegistryPaginatorSetup } from '@/application/composables/components/personal_registry_page/personal_registry_paginator_setup'

const { personalStore, maxPage, nextPage, previousPage } = usePersonalRegistryPaginatorSetup()

let currentPage = computed(() => {
    if (maxPage.value === 0) {
        return 0
    }
    return personalStore.currentPage
})
</script>

<style scoped></style>
