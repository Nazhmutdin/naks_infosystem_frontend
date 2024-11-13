<template>
    <base-modal>
        <div class="modal-header">
            <ul class="nav nav-pills" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="naks-filters-tab" data-bs-toggle="tab" href="#naks-filters" role="tab" aria-controls="naks-filters" aria-selected="true">naks</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="ndt-filters-tab" data-bs-toggle="tab" href="#ndt-filters" role="tab" aria-controls="ndt-filters" aria-selected="true">ndt</a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="tab-content">
            <div class="tab-pane active" id="naks-filters" role="tabpanel" aria-labelledby="naks-filters-tab">
                <naks-filters></naks-filters>
            </div>
            <div class="tab-pane" id="ndt-filters" role="tabpanel" aria-labelledby="ndt-filters-tab">
                <div class="modal-body">
                    <ndt-filters></ndt-filters>
                </div>
            </div>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
    import BaseModal from '../BaseModal.vue'
    import NaksFilters from './NaksFilters.vue'
    import NdtFilters from './NdtFilters.vue';
</script>

<style scoped>
    .nav{
        --bs-nav-pills-link-active-bg: var(--bs-secondary-bg-subtle);
        --bs-nav-pills-link-active-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-hover-color: var(--bs-secondary-text-emphasis);
    }
</style>
