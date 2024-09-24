<template>
    <button
    @click="$emit('execute')"
    >{{ buttonPlaceholder }}</button>
</template>

<script setup lang="ts">
    defineProps({
        buttonPlaceholder: String
    })
</script>

<style>
    button{
        border: 0;
        border-radius: 5px;
        background-color: var(--button-color);
        height: 100;
        color: var(--text-color);
    }
</style>
