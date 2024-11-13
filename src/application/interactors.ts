import { useAppStore } from "@/infrastructure/store";


export function callInfoToastInteractor(toastHeader: string, toastContent: string){
    const appStore = useAppStore();
    appStore.callInfoToast(toastHeader, toastContent)
}
