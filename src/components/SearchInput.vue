<template>
    <div class="search-input-area">
        <input @keypress="$emit('searchOnEnter')" :placeholder="placeholderString">
    </div>
</template>

<script setup lang="ts">
    defineProps({
        placeholderString: {
            type: String,
            default: "Search data"
        }
    })
</script>

<style scoped>
    .search-input-area{
        width: 100%;
    }
    input{
        border: var(--color-type-4) solid 1px;
        border-radius: 5px;
        height: var(--search-area-item-height);
        width: 100%;
    }
    input:focus{
        outline: none;
    }
</style>
