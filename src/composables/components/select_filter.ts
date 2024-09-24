import { type Ref } from "vue"
import { closeWindow } from "@/common/funcs"

export interface SelectMultipleFilterProps{
    header: String,
    options: String[],
    modelValue: String[] | undefined
}


export function useSelectMultipleFilterSetup(modelValue: Ref<String[] | undefined>){
    
    function closeMultiSelectWindow(event: Event) {
        const window = document.querySelector(".dropdown-content") as HTMLElement
        closeWindow(event, window)
    }

    function openMultiSelectWindow() {
        const dropdown = document.querySelector(".dropdown-content") as HTMLElement

        dropdown.style.display = "block"
    }

    function addOrDeleteValue(event: Event){
        const target = event.target as HTMLInputElement

        if (modelValue.value === undefined){
            modelValue.value = []
        }

        if (target.checked) {
            modelValue.value.push(target.value)
        } else {
            const index = modelValue.value.indexOf(target.value, 0)

            if (index > -1) {
                modelValue.value.splice(index, 1);
            }
        }

        if (modelValue.value.length === 0){
            modelValue.value = undefined
        }
    }

    return { openMultiSelectWindow, closeMultiSelectWindow, addOrDeleteValue }
}
