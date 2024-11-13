<template>
    <div class="methods-grid">
        <div class="method-item" v-for="(option, id) in appStore.naksWeldingMethods" :key="id">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" :value="option" @click="collectSelectedMethod">
                {{ option }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePersonalStore, useAppStore } from '@/infrastructure/store';
    import { onMounted } from 'vue';

    const personalStore = usePersonalStore();
    const appStore = useAppStore();

    function collectSelectedMethod(){
        let methods = []
        const checkboxes = document.getElementsByClassName("form-check-input") as HTMLCollectionOf<HTMLInputElement>

        for (var checkbox of checkboxes){
            if (checkbox.checked){
                methods.push(checkbox.value)
            }
        }

        if (methods.length > 0){
            personalStore.selectFilters.methods = methods
            return
        }

        personalStore.selectFilters.methods = undefined
    }

    onMounted(() => {
        let checkboxes = document.getElementsByClassName("form-check-input") as HTMLCollectionOf<HTMLInputElement>

        for (var checkbox of checkboxes){
            if (personalStore.selectFilters.methods?.includes(checkbox.value)){
                checkbox.checked = true;
            }
        } 
    })

</script>

<style scoped>
    .methods-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: min-content;
        justify-content: space-around;
        justify-items: start;
        align-items: start;
    }
    .method-item{
        width: 100%;
    }
</style>
