<template>
    <input type="date" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
</template>

<script setup lang="ts">

    defineProps({
        dateFilterText: {
            validator(value: string) { return ["from", "before"].includes(value) }
        },
        modelValue: {
            type: String
        }
    })
  
    defineEmits(['update:modelValue']);
</script>

<style></style>
