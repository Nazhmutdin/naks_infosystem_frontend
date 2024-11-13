<template>
    <base-nav-bar-page>
        <div class="user-data">
            <div class="personal-ident-area">
                <div class="personal-ident"><label>ident:</label> {{ currentUser.ident }}</div>
            </div>
            <div class="personal-name-area">
                <div class="personal-name"><label>name:</label> {{ currentUser.name }}</div>
            </div>
            <div class="personal-birthday-area">
                <div class="personal-birthday"><label>email:</label> {{ currentUser.email }}</div>
            </div>
            <div class="personal-nation-area">
                <div class="personal-nation"><label>last login:</label> {{ currentUser.loginDt }}</div>
            </div>
            <div class="personal-exp-age-area">
                <div class="personal-nation"><label>last update:</label> {{ currentUser.updateDt }}</div>
            </div>
            <div class="personal-exp-age-area">
                <div class="personal-nation"><label>signed in:</label> {{ currentUser.signDt }}</div>
            </div>
        </div>
    </base-nav-bar-page>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    import BaseNavBarPage from './BaseNavBarPage.vue';
    import { useMeSetup } from '@/application/composables/me_setup';

    const { currentUser, getCurrentUser } = useMeSetup()

    onBeforeMount(async () => {
        await getCurrentUser()
    })
</script>

<style scoped>
    .page-data{
        position: absolute;
        inset: 0px;
        width: fit-content;
        height: fit-content;
        margin: auto;
        font-size: 27px;
    }
</style>