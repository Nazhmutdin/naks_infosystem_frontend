<template>
    <div class="inner-wrap">
        <div class="nav-bar-area">
            <nav-bar></nav-bar>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue';
</script>

<style scoped>
    .inner-wrap{
        height: 100vh;

        --content-offsets: 15px 0 0 calc(15px + var(--nav-bar-offset));
        --content-width: 100vw;
        --nav-bar-width: 100px;
        --nav-bar-offset: 116px;
    }
    
    .nav-bar-area, .registry-area{
        margin: 0;
    }

    .nav-bar-area{
        height: 100vh;
        position: fixed;
        top: 0;
    }

    .content{
        margin: var(--content-offsets);
        width: var(--content-width);
        padding-bottom: 10px;
    }
</style>
