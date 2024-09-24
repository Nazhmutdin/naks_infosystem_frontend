<template>
    <th>
        <router-link class="registry-row-link" :to="{ path: dstPath }">⇗</router-link>
    </th>
</template>

<script setup lang="ts">
    defineProps({
        dstPath: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    .registry-row-link{
        text-decoration: none;
        color: var(--text-color);
    }
</style>