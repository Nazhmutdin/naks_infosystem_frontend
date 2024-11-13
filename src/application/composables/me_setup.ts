import { useAuthStore } from '@/infrastructure/store'
import { storeToRefs } from 'pinia'


export function useMeSetup() {
    const authStore = useAuthStore()

    const { currentUser } = storeToRefs(authStore)

    const getCurrentUser = async () => {
        return await authStore.getCurrentUser()
    }

    return { authStore, currentUser, getCurrentUser }
}
