<template>
    <table class="data-table">
        <slot></slot>
    </table>
</template>

<script setup lang="ts"></script>

<style scoped>
    .data-table{

        --table-header-color: var(--color-type-2);
        --table-body-color: var(--color-type-2);
        --table-hovered-row-color: #D9EBF7;

        --table-header-font-size: 18px;
        --table-header-font-weight: var(--usual-text-font-weight);

        --table-body-font-size: var(--usual-text-font-size);
        --table-body-font-weight: var(--usual-text-font-weight);

        width: 100%;
        border-collapse: collapse;
    }
    .data-table :deep(tbody tr:last-child th:last-child) {
        border-bottom-right-radius: 10px;
    }
    .data-table :deep(tbody tr:last-child th:first-child) {
        border-bottom-left-radius: 10px;
    }
    .data-table :deep(thead tr:first-child th:last-child) {
        border-top-right-radius: 10px;
    }
    .data-table :deep(thead tr:first-child th:first-child) {
        border-top-left-radius: 10px;
    }
</style>