<template>
    <router-link class="link" :to="{ name: dstName }">
        <li class="link-inner">
            <slot></slot>
        </li>
    </router-link>
</template>

<script setup lang="ts">
    defineProps({
        dstName: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    .link-area{
        text-decoration-line: none;
    }
    .link {
        list-style: none;
        text-decoration: none;
        height: 50px;
        display: flex;
        font-size: var(--navbar-link-font-size);
        color: var(--text-color);
        transition: all .05s ease;
        font-family: var(--usual-text-font-family);
        font-weight: var(--usual-text-font-weight);
    }
    .link:hover{
        color: var(--text-color);
        transform: scale(1.025);
        text-decoration: underline;
    }
</style>
