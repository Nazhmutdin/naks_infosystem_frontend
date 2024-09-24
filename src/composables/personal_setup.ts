import { onBeforeMount, computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { baseDataPresentation } from '@/common/funcs';
import { usePersonalStore } from '@/store'


export function usePersonalSetup() {

  const route = useRoute()
  const store = usePersonalStore()

  onBeforeMount(async () => {
    await store.requestPersonal(route.params.id as string)
  })

  const { personal } = storeToRefs(store)

  const ident = computed(() => baseDataPresentation(personal.value?.ident))

  const name = computed(
    {
        get:() => baseDataPresentation(personal.value?.name),
        set: (name: string) => {
            personal.value = { ...personal.value, name }
        }
    }
  )

  const birthday = computed(
    {
        get:() => baseDataPresentation(personal.value?.birthday),
        set: (birthday) => {
            personal.value = { ...personal.value, birthday }
        }
    }
  )

  const kleymo = computed(
    {
        get:() => baseDataPresentation(personal.value?.kleymo),
        set: (kleymo) => {
            personal.value = { ...personal.value, kleymo }
        }
    }
  )

  const nation = computed(
    {
        get:() => baseDataPresentation(personal.value?.nation),
        set: (nation) => {
            personal.value = { ...personal.value, nation }
        }
    }
  )

  const expAge = computed(
    {
        get:() => baseDataPresentation(personal.value?.expAge),
        set: (expAge) => {
            personal.value = { ...personal.value, expAge }
        }
    }
  )

  return { store, name, birthday, kleymo, ident, nation, expAge }
}
