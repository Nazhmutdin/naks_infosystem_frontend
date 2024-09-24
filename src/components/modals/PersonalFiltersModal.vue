<template>
    <base-modal :show="show">
        <div class="filters-list">
            <div class="methods-filter filter">
                <div class="filter-area">
                    <select-multiple-filter :header="'methods'" :options="WELDING_NAKS_METHODS" v-model="store.selectFilters.methods"></select-multiple-filter>
                </div>
            </div>
            <div class="certification-date-filter filter">
                <h4>certification date</h4>
                <div class="filter-area">
                    from: <date-filter :date-filter-text="'from'" v-model="store.selectFilters.certificationDateFrom"></date-filter>
                </div>
                <div class="filter-area">
                    before: <date-filter :date-filter-text="'before'" v-model="store.selectFilters.certificationDateBefore"></date-filter>
                </div>
            </div>
            <div class="expiration-date-filter filter">
                <h4>expiration date</h4>
                <div class="filter-area">
                    from: <date-filter :date-filter-text="'from'" v-model="store.selectFilters.expirationDateFrom"></date-filter>
                </div>
                <div class="filter-area">
                    before: <date-filter :date-filter-text="'before'" v-model="store.selectFilters.expirationDateBefore"></date-filter>
                </div>
            </div>
            <div class="expiration-date-fact-filter filter">
                <h4>expiration date fact</h4>
                <div class="filter-area">
                    from: <date-filter :date-filter-text="'from'" v-model="store.selectFilters.expirationDateFactFrom"></date-filter>
                </div>
                <div class="filter-area">
                    before: <date-filter :date-filter-text="'before'" v-model="store.selectFilters.expirationDateFactBefore"></date-filter>
                </div>
            </div>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
    import BaseModal from './BaseModal.vue';
    import DateFilter from '../filters/DateFilter.vue';
    import SelectMultipleFilter from '../filters/SelectMultipleFilter.vue';
    import { WELDING_NAKS_METHODS } from '@/common';
    import { usePersonalStore } from '@/store';

    const store = usePersonalStore()

    defineProps({
        show: Boolean
    })
</script>

<style>
</style>
