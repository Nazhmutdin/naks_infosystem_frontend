<template>
    <tr class="registry-row">
        <slot></slot>
    </tr>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .registry-row{
        background-color: var(--registry-row-color);
    }

    .registry-row:hover{
        background-color: var(--table-hovered-row-color);
    }
</style>
