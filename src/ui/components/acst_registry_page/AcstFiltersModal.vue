<template>
    <base-modal>
        <div class="modal-header">
            some filters
        </div>
    </base-modal>
</template>

<script setup lang="ts">
    import BaseModal from '../BaseModal.vue'
</script>

<style scoped>
    .nav{
        --bs-nav-pills-link-active-bg: var(--bs-secondary-bg-subtle);
        --bs-nav-pills-link-active-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-hover-color: var(--bs-secondary-text-emphasis);
    }
</style>
