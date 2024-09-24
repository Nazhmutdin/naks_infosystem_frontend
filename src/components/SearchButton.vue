<template>
    <div class="search-button-area">
        <base-button
        class="search-button"
        @execute="$emit('search')"
        :button-placeholder="'search'"
        :header="'search-button'"
        ></base-button>
    </div>
</template>

<script setup lang="ts">
    import BaseButton from './BaseButton.vue';

    defineProps({
        placeholderString: {
            type: String,
            default: "Search data"
        }
    })
</script>

<style scoped>
    .search-button{
        height: var(--search-area-item-height);
    }
</style>
