import { storeToRefs } from "pinia";

import { useAppStore } from "@/infrastructure/store";


export function useBaseToastSetup(){
    const appStore = useAppStore();

    const { toastConfig } = storeToRefs(appStore)


    return { toastConfig }
}