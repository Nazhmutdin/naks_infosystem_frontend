<template>
    <div class="input-group input-group-sm">
        <span class="input-group-text">{{ inputGroupText }}</span>
        <input 
            @input="$emit('update:value', ($event.target as HTMLInputElement).value)" 
            :value="value" 
            :type="filterType" 
            class="form-control">
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        value: string | number | undefined,
        filterType: string
        inputGroupText: string
    }>()
</script>

<style scoped></style>
