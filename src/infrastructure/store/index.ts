import { useNDTStore } from "./ndt_store";
import { usePersonalStore } from "./personal_store";
import { usePersonalCertificationStore } from "./personal_certification_store";
import { useAuthStore } from "./auth_store";
import { useAcstStore } from "./acst_store";
import { defineStore } from 'pinia';

import * as bootstrap from 'bootstrap';


export enum ToastTypeEnum{
    INFO = 'info',
    WARNING = 'warning',
    SUCCESS = 'success'
}


export interface ToastConfig{
    toastHeader: string,
    toastContent: string,
    type: ToastTypeEnum | null
}


export const useAppStore = defineStore('app', {
    state: () => ({
        toastConfig: {} as ToastConfig
    }),
    getters: {
        naksWeldingMethods: (state) => [
            "РАД",
            "РД",
            "МПГ",
            "МП",
            "АФ",
            "П"
        ]
    },
    actions: {
        callToast(toastHeader: string, toastContent: string, type: ToastTypeEnum | null) {
            this.toastConfig.toastHeader = toastHeader;
            this.toastConfig.toastContent = toastContent;
            this.toastConfig.type = type

            const toast = bootstrap.Toast.getOrCreateInstance('.toast')
            toast.show()
        },
        callInfoToast(toastHeader: string, toastContent: string) {
            this.callToast(toastHeader, toastContent, ToastTypeEnum.INFO)
        }
    }
})

export { usePersonalStore, usePersonalCertificationStore, useNDTStore, useAuthStore, useAcstStore }
