<template>
    <base-table class="caption-top">
        <template v-slot:caption>
            <caption>
                Всего: {{ acstStore.count }}
            </caption>
        </template>
        <template v-slot:header>
            <thead>
                <tr class="data-row cell">
                    <th class="column-header"></th>
                    <th class="column-header">number</th>
                    <th class="column-header">method</th>
                    <th class="column-header">materials</th>
                    <th class="column-header">detail types</th>
                    <th class="column-header">GTDs</th>
                    <th class="column-header">certification date</th>
                    <th class="column-header">expiration date</th>
                </tr>
            </thead>
        </template>
        <template v-slot:body>
            <tbody class="table-group-divider">
                <tr :key="acst.ident" v-for="acst in acstStore.acstList">
                    <th class="acst-data-toggler-row-cell row-cell">
                        <base-button
                            data-bs-toggle="modal"
                            data-bs-target="#AcstDataModal"
                            @click="() => selectAcst(acst)"
                        >⇗</base-button>
                    </th>
                    <th class="row-cell acst-number-cell">{{ acst.acstNumber }}</th>
                    <th class="row-cell">{{ acst.method }}</th>
                    <th class="row-cell">{{ presentList(acst.materials) }}</th>
                    <th class="row-cell">{{ presentList(acst.detailTypes) }}</th>
                    <th class="row-cell">{{ presentList(acst.gtd) }}</th>
                    <th class="row-cell">{{ acst.certificationDate }}</th>
                    <th class="row-cell">{{ acst.expirationDate }}</th>
                </tr>
            </tbody>
        </template>
    </base-table>
    <acst-data-modal id="AcstDataModal" :acst-data="selectedAcst"></acst-data-modal>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import BaseTable from '@/ui/components/BaseTable.vue';
    import BaseButton from '@/ui/components/BaseButton.vue'
    import { useAcstStore } from '@/infrastructure/store';
    import AcstDataModal from './AcstDataModal.vue';
    import type { AcstData } from '@/application/types';

    const acstStore = useAcstStore()

    let selectedAcst = ref({} as AcstData)

    const selectAcst = (acst: AcstData) => {
        selectedAcst.value = acst
        console.log(selectedAcst)
    }

    const presentList = (value: string[] | null) => {
        if (value === null){
            return "-"
        }
        const res = value.join(", ")

        if (res == ""){
            return "-"
        }

        return res
    }
</script>

<style scoped>
    .acst-number-cell{
        width: fit-content;
    }
    .row-cell {
        text-align: center;
        vertical-align: middle;
        padding: 0 4px;
    }
    .acst-number-cell{
        width: 12%;
    }
</style>
