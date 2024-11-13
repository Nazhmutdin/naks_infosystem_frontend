<template>
    <router-view></router-view>
    <base-toast></base-toast>
</template>

<!--
<=====================================================================>
-->

<script setup lang="ts">
import BaseToast from './ui/components/BaseToast.vue'
</script>

<!--
<=====================================================================>
-->

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

body {
    --standart-color-type-1: #edf6fc;
    --standart-color-type-2: #99ccee;
    --standart-color-type-3: #ffffff;
    --standart-color-type-4: #002740;

    --default-text-color: var(--standart-color-type-4);
    --default-text-font-family: 'Open Sans', sans-serif;
    --default-text-font-weight: 600;
    --default-text-font-size: 14px;

    --default-content-margins: 0 1.5rem;
    --default-content-width: 70%;
    --default-content-height: 0;

    --bs-emphasis-color: var(--standart-color-type-4);
}

* {
    font-family: var(--default-text-font-family);
    font-size: var(--default-text-font-size);
    font-weight: var(--default-text-font-weight);
    color: var(--default-text-color);
    margin: auto;
}
</style>
