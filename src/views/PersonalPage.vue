<template>
    <div class="personal-page-wrap">
        <div class="personal-data">
            <div class="personal-picture personal-data-item">
                <img src="" alt="">
            </div>
            <div class="personal-data-item general-data">
                <div class="ident-area">{{ ident }}</div>
                <div class="name-area">{{ name }}</div>
                <div class="kleymo-area">{{ kleymo }}</div>
                <div class="birthday">{{ birthday }}</div>
                <div class="nation">{{ nation }}</div>
                <div class="experience-age">{{ expAge }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePersonalSetup } from '@/composables/personal_setup';

    const { name, birthday, kleymo, ident, nation, expAge } = usePersonalSetup()
</script>

<style scoped>
    .personal-page-wrap{
        margin: 10px;
    }

    .personal-data{
        --picture-img-area-width: 300px;
        --personal-data-height: calc(var(--picture-img-area-width) * (4/3));

        display: flex;
        width: 100%;
        height: var(--personal-data-height);
    }

    .personal-picture{
        width: var(--picture-img-area-width);
        height: var(--personal-data-height);
    }

    .personal-data-item{
        margin: 0;
    }
</style>