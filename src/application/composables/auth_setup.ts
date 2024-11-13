import { ref } from 'vue'
import { useAuthStore } from '@/infrastructure/store'
import router from '@/infrastructure/router'


export function useAuthSetup() {
    const login = ref('')
    const password = ref('')
    const isPasswordVisible = ref(false)
    const authStore = useAuthStore()

    const logIn = async () => {
        const res = await authStore.login(login.value, password.value)

        if (res.status == 200) {
            router.push({ name: 'main' })
        }
    }

    const logInOnEnter = async (event: KeyboardEvent) => {
        if (event.key == 'Enter') {
            await logIn()
        }
    }

    return {
        authStore,
        login,
        password,
        isPasswordVisible,
        logIn,
        logInOnEnter
    }
}
