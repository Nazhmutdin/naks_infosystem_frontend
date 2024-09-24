<template>
    <thead class="data-table-header">
        <slot></slot>
    </thead>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .data-table-header{
        width: 100%;
        background-color: var(--table-header-color);
    }
    :slotted(.column-header){
        padding: 0 7px;
    }
</style>
