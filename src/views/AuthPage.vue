<template>
    <div class="auth-wrap">
        <div class="auth-window">
            <div class="welcome-area">
                Welcome to RHI Infosystem
            </div>
            <div class="auth-form">
                <div class="input-areas">
                    <div class="input-login-area input-field">
                        <input @keypress="logInOnEnter" v-model="login" placeholder="login" type="text" class="login-input" required>
                    </div>
                    <div class="input-password-area input-field">
                        <input @keypress="logInOnEnter" v-if="isPasswordVisible" v-model="password" placeholder="password" class="password-input" type="text" required>
                        <input @keypress="logInOnEnter" v-else v-model="password" placeholder="password" class="password-input" type="password" required>
                    </div>
                </div>
                <div class="show-password-block not-input-block">
                    <input v-model="isPasswordVisible" class="show-password-checkbox" type="checkbox">
                    <span>Show password</span>
                </div>
                <div class="login-btn-block not-input-block">
                    <button @click="logIn" class="login-btn">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuthSetup } from "@/composables/auth_setup"

    const { login, password, isPasswordVisible, logIn, logInOnEnter } = useAuthSetup()
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

    *{
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
    }
    
    .auth-wrap{
        width: 100vw;
        height: 100vh;
        background-image: url("@/assets/constraction_site.png");
        background-size: cover;
    }
    
    .auth-window{
        position: absolute;
        border-radius: 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25rem;
        height: auto;
        background: rgba(255, 255, 255, 0.700);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }

    .welcome-area{
        width: 100%;
        color: #393838;
        font-size: 24px;
        font-weight: 500;
        height: 25%; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--usual-text-font-family);
    }
    
    .auth-form{
        left: 50%;
        height: 75%; 
    }

    .input-areas{
        width: 100%;
        max-width: 350px;
        min-width: 250px;
    }

    .input-field {
        width: 100%;
        max-width: 450px;
        position: relative;
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .input-field input{
        width: 15rem;
        font-size: 1rem;
        font-family: var(--usual-text-font-family);
        line-height: 1.5;
        height: calc(2.25rem + 2px);
        border: none;
        background: none;
        border-bottom: 2px solid blue;
    }

    .input-field input:focus {
        outline: none;
    }

    .not-input-block{
        margin-top: .9rem;
    }

    .not-input-block span{
        font-family: var(--usual-text-font-family);
    }

    .show-password-checkbox{
        margin-right: 1rem;
    }

    .login-btn-block{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-btn{
        border: 1px solid blue;
        border-radius: 10px;
        width: 15rem;
        height: 100%;
    }
</style>
