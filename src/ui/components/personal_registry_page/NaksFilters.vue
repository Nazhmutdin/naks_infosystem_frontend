<template>
    <div class="modal-body">
        <div class="filter">
            <div class="filter-header">
                <h6>methods</h6>
            </div>
            <div class="filter-body">
                <select-naks-methods></select-naks-methods>
            </div>
        </div>
        <div class="filter">
            <div class="filter-header">
                <h6>certification date</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'date'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.certificationDateFrom"
                ></input-filter>
                <input-filter
                    :filter-type="'date'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.certificationDateBefore"
                ></input-filter>
            </div>
        </div>
        <div class="filter">
            <div class="filter-header">
                <h6>expiration date</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'date'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.expirationDateFactFrom">
                </input-filter>
                <input-filter
                    :filter-type="'date'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.expirationDateFactBefore">
                </input-filter>
            </div>
        </div>
        <div class="filter">
            <div class="filter-header">
                <h6>thikness</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'number'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.thiknessFrom">
                </input-filter>
                <input-filter
                    :filter-type="'number'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.thiknessBefore">
                </input-filter>
            </div>
        </div>
        <div class="filter">
            <div class="filter-header">
                <h6>detail diameter</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'number'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.detailDiameterFrom">
                </input-filter>
                <input-filter
                    :filter-type="'number'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.detailDiameterBefore">
                </input-filter>
            </div>
        </div>
        <div class="filter">
            <div class="filter-header">
                <h6>outer diameter</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'number'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.outerDiameterFrom">
                </input-filter>
                <input-filter
                    :filter-type="'number'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.outerDiameterBefore">
                </input-filter>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import SelectNaksMethods from './SelectNaksMethods.vue'
    import { usePersonalStore } from '@/infrastructure/store'
    import InputFilter from '../InputFilter.vue'

    const personalStore = usePersonalStore();
</script>

<style scoped>
    .filter{
        margin-bottom: 10px;
    }
    .filter-header{
        text-align: center;
    }
    .filter-header h6, .modal-header h4{
        font-weight: bold;
    }
    .from-filter{
        padding-bottom: 5px;
    }
</style>
