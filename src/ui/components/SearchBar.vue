<template>
    <div class="input-group">
        <input @input="$emit('searchBarInput', $event)" @keypress="$emit('onPress', $event)" type="text" class="form-control" :placeholder="placeholder">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        placeholder: string | undefined
    }>()
</script>

<style scoped></style>
