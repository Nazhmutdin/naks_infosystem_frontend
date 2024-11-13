<template>
    <ul class="pagination">
        <li class="page-item" @click="$emit('previous')">
            <div class="page-link">
                <span aria-hidden="true">&laquo;</span>
            </div>
        </li>
        <li class="page-item paginator-data">
            <div class="page-link">
                {{ currentPage }} / {{ maxPage }}
            </div>
        </li>
        <li class="page-item" @click="$emit('next')">
            <div class="page-link">
                <span aria-hidden="true">&raquo;</span>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
    defineProps<{
        currentPage: number,
        maxPage: number
    }>()
</script>

<style scoped>
    .pagination{
        --bs-pagination-color: var(--default-text-color);
        --bs-pagination-font-size: var(--default-text-font-size);
        --bs-pagination-hover-color: var(--default-text-color);
        --bs-pagination-hover-bg: var(--bs-pagination-bg)
    }
    .page-item{
        margin: 0;
    }
    .page-item:first-child, .page-item:last-child{
        cursor: pointer;
    }
</style>
