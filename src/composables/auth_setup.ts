import { ref, type Ref } from "vue";
import { useAuthStore } from "@/store";
import router from "@/router"


interface IAuthSetup {
    login: Ref<string>
    password: Ref<string>
    isPasswordVisible: Ref<boolean>
    logIn: () => Promise<void>
    logInOnEnter: (event: KeyboardEvent) => Promise<void>
}


export function useAuthSetup(): IAuthSetup {
    const login = ref("")
    const password = ref("")
    const isPasswordVisible = ref(false)
    const store = useAuthStore()

    const logIn = async () => {

        const res = await store.login(
            login.value,
            password.value
        )
        
        if (res.status == 200) {
            router.push({name: "main"})
        }
    }

    const logInOnEnter = async (event: KeyboardEvent) => {
        if (event.key == "Enter") {
            await logIn()
        }
    }

    return {
        login,
        password,
        isPasswordVisible,
        logIn,
        logInOnEnter
    }
}
