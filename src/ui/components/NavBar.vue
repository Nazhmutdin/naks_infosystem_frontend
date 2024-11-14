<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'main' }">
                <img class="logo-area" src="https://localhost/static/logo.png" alt="rencons"/>
            </router-link>
            <div class="navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav nav-underline content-links">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'personalRegistry' }">personal</router-link>
                    </li>
                    <li v-show="false" class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'acstRegistry' }">acst</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav nav-underline other-links">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'me' }">me</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" @click="authStore.logout" :to="{ name: 'auth' }">logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import { useAuthStore } from '@/infrastructure/store'
    import { useNavBarSetup } from '@/application/composables/components/navbar_setup'
    import { onMounted } from 'vue'

    const authStore = useAuthStore()

    const { setActiveLink } = useNavBarSetup()

    onMounted(async () => {
        setActiveLink()
    })
</script>

<style scoped>
    .navbar,
    .navbar-brand {
        padding: 1px;
    }
    .logo-area {
        width: 170px;
    }
    .container-fluid {
        padding: 0 10px;
        margin-left: var(--contents-left-margin);
    }
    .other-links {
        margin: 0 25px;
    }
</style>
