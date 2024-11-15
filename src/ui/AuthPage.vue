<template>
    <div class="wrap">
        <div class="auth-window">
            <div class="welcome-area">Welcome to RHI Infosystem</div>
            <div class="auth-form">
                <div class="form-floating mb-3">
                    <input
                        @keypress="logInOnEnter"
                        v-model="login"
                        type="text"
                        class="form-control"
                        id="loginInput"
                        placeholder="login"
                    />
                    <label for="loginInput">login</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        @keypress="logInOnEnter"
                        v-if="isPasswordVisible"
                        v-model="password"
                        type="text"
                        class="form-control"
                        id="passwordInput"
                        placeholder="password"
                    />
                    <input
                        @keypress="logInOnEnter"
                        v-else
                        v-model="password"
                        type="password"
                        class="form-control"
                        id="passwordInput"
                        placeholder="password"
                    />
                    <label for="passwordInput">password</label>
                </div>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    v-model="isPasswordVisible"
                    type="checkbox"
                    value=""
                    id="showPasswordCheckbox"
                />
                <label class="form-check-label" for="showPasswordCheckbox"> show password </label>
            </div>
            <div class="login-button">
                <button class="btn btn-outline" @click="logIn">login</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthSetup } from '@/application/composables/auth_setup'

    const { login, password, isPasswordVisible, logIn, logInOnEnter } = useAuthSetup()
    const backgroundImgUrl = `url(https://${process.env.DOMAIN}/static/constraction_site.png)`
</script>

<style scoped>
    .wrap {
        width: 100vw;
        height: 100vh;
        background-image: v-bind(backgroundImgUrl);
        background-size: cover;
    }
    .auth-window {
        position: absolute;
        border-radius: 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25rem;
        height: auto;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    }
</style>
