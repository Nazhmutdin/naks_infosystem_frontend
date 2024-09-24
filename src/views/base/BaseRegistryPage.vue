<template>
    <base-nav-bar-page>
        <div class="registry-area">
            <div class="search-area">
                <slot name="search-input-area"></slot>
                <slot name="filters-modal-window"></slot>
                <slot name="search-button"></slot>
            </div>
            <div class="paginator-area">
                <slot name="paginator"></slot>
            </div>
            <div class="data-area">
                <slot></slot>
            </div>
        </div>
    </base-nav-bar-page>
</template>

<script setup lang="ts">
    import BaseNavBarPage from './BaseNavBarPage.vue';
</script>

<style scoped>
    .search-area{
        --search-area-item-height: 1.3rem;

        display: flex;
        width: var(--content-width);
        margin: 0;
        color: var(--text-color)
    }
    .search-area *{
        float: left;
        margin-right: 2%;
    }
    .search-area *:last-child{
        margin-right: 0;
    }
    .paginator-area{
        margin: 1rem 0;
    }
    .data-area{
        --registry-border-color: var(--colot-type-1);

        border: var(--color-type-4) solid 1px;
        border-radius: var(--border-radius);
    }
</style>
