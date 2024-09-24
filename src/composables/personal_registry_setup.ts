import { usePersonalStore } from '@/store'
import { ref } from 'vue'


export function usePersonalRegistrySetup() {
  const store = usePersonalStore()

  const showModal = ref(false)

  return { store, showModal }
}
