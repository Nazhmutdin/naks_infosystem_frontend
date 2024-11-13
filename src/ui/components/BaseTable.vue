<template>
    <table class="table table-striped table-hover">
        <slot name="caption"></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>
    </table>
</template>

<script setup lang="ts"></script>

<style scoped>
    :slotted(.cell), :slotted(.column-header){
        text-align: center;
        vertical-align: middle;
        padding: 0;
    }
    :slotted(.cell) *, :slotted(.column-header) *{
        text-decoration: none;
    }
    .table{
        margin: 0;
    }
    .table :slotted(thead) *{
        font-size: 16px;
    }
    .table :slotted(caption) {
        padding: 8px 0 4px 0;
    }
</style>
