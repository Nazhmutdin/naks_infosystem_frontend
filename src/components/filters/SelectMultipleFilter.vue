<template>
    <div class="multiselect-filter">
        <button @click="openMultiSelectWindow">{{ header }}</button>
        <div class="dropdown-content">
            <label v-for="(option, index) in options" :key="index">
                <input @click="addOrDeleteValue" type="checkbox" :value="option">{{ option }}
            </label>
        </div>
    </div>
    <!-- <details>
        <summary class="select-filter-summary"><strong>{{ header }}</strong></summary>
        <fieldset>
            <ul>
                <li v-for="(option, index) in options" :key="index">
                    <label>
                        <input type="checkbox">
                        {{ option }}
                    </label>
                </li>
            </ul>
        </fieldset>
    </details> -->
</template>

<script setup lang="ts">
    import { useSelectMultipleFilterSetup, type SelectMultipleFilterProps } from '@/composables/components/select_filter';
    import { toRef } from 'vue';

    const props = defineProps<SelectMultipleFilterProps>()
        const { openMultiSelectWindow, closeMultiSelectWindow, addOrDeleteValue } = useSelectMultipleFilterSetup(toRef(props, "modelValue"))

    document.addEventListener("click", closeMultiSelectWindow)

</script>

<style scoped>
    .multiselect-filter {
        display: inline-block;
    }

    .dropdown-content {
        display: block;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content label {
        display: block;
        margin-top: 10px;
    }

    .multiselect-filter:hover .dropdown-content {
        display: block;
    }
</style>