<template>
    <div class="modal-body">
        <div class="filter">
            <div class="filter-header">
                <h6>welding date</h6>
            </div>
            <div class="filter-body">
                <input-filter
                    :class="'from-filter'"
                    :filter-type="'date'"
                    :input-group-text="'from'"
                    v-model:value="personalStore.selectFilters.weldingDateFrom"
                ></input-filter>
                <input-filter
                    :filter-type="'date'"
                    :input-group-text="'before'"
                    v-model:value="personalStore.selectFilters.weldingDateBefore"
                ></input-filter>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePersonalStore } from '@/infrastructure/store'
    import InputFilter from '../InputFilter.vue'

    const personalStore = usePersonalStore()
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
