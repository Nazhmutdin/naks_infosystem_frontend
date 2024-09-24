<template>
    <nav class="navbar">
        <header>
            <div class="img-area">
                <router-link :to="{ name: 'main' }">
                    <img src="" alt="hhh">
                </router-link>
            </div>
        </header>
        <div class="navbar-menu">
            <div class="menu">
                <nav-bar-link class="personal-registry-link-area"
                    :dst-name="'personalRegistry'">
                    <span>personal</span>
                </nav-bar-link>
            </div>
            <div class="bottom-menu">
                <nav-bar-link class="logout-link"
                    @click="store.logout"
                    :dst-name="'auth'">
                    <span>logout</span>
                </nav-bar-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import { useAuthStore } from '@/store';
    import NavBarLink from './NavBarLink.vue';

    const store = useAuthStore()
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

    .navbar {
        --navbar-link-font-size: 16px;
        --sidebar-color: var(--color-type-3);

        height: 100%;
        width: var(--nav-bar-width);
        padding: 10px 8px;
        background-color: var(--sidebar-color);
        transition: var(--tran-05);
        border-right: var(--border-type);
    }

    .navbar header {
        display: flex;
        height: 50px;
    }

    .navbar-menu{
        height: 100%;
    }

    .img-area {
        width: 100%;
        transition: var(--tran-05);
        overflow: hidden;
    }

    .img-area img {
        width: 100%;
        height: 50px;
        object-fit: contain;
    }

    .bottom-menu{
        display: flex;
        height: 100%;
        bottom: 0;
    }

    .logout-link{
        display: inline-block;
        align-self: flex-end;
        margin-bottom: 19vh;
    }
</style>
