<template>
    <div class="paginator">
        <div class="previous-page paginator-element" @click="$emit('previousPage')">
            <base-button :button-placeholder="'&#60;'"></base-button>
        </div>
        <div class="current-page paginator-element">{{ currentPage }} / {{ maxPage }}</div>
        <div class="next-page paginator-element" @click="$emit('nextPage')">
            <base-button :button-placeholder="'&#62;'"></base-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import BaseButton from '../BaseButton.vue';

    defineProps({
        resCount: {
            type: Number,
            required: true
        },
        pageStep: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        maxPage: {
            type: Number,
            required: true
        }
    })
</script>

<style scoped>
    .paginator{
        display: flex;
    }
    .paginator-element{
        margin: 0;
    }
    .previous-page{
        margin-right: 7px;
    }
    .next-page{
        margin-left: 7px;
    }
    .page-action-button{
        background-color: blue;
        color: white;
        border-radius: 25%;
    }
</style>
