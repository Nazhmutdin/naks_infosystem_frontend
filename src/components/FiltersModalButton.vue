<template>
    <div class="filters-modal-button-area">
        <base-button
        class="filters-button"
        @execute="$emit('open')"
        :button-placeholder="'filters'"
        ></base-button>

        <Teleport to="body">
            <slot></slot>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
    import BaseButton from './BaseButton.vue';
</script>

<style scoped>

    .filters-button{
        height: var(--search-area-item-height);
    }
</style>
