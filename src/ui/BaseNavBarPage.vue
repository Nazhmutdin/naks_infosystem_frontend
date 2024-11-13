<template>
    <div class="wrap">
        <div class="navbar-area">
            <nav-bar></nav-bar>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '@/ui/components/NavBar.vue';
</script>

<style scoped>
    .wrap :deep(.content){
        width: var(--default-content-width);
        height: var(--default-content-height);
        margin: var(--default-content-margins);
    }
</style>
