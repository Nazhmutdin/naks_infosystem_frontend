<template>
    <base-table class="caption-top">
        <template v-slot:caption>
            <caption>
                NDTs ({{
                    ndts.length
                }})
            </caption>
        </template>
        <template v-slot:header>
            <thead>
                <tr>
                    <th class="column-header"></th>
                    <th
                        class="column-header"
                        :class="key.headerClass"
                        v-for="(key, index) in NDT_TABLE_CONFIG.columns"
                        :key="index"
                    >
                        {{ key.text }}
                    </th>
                </tr>
            </thead>
        </template>
        <template v-slot:body>
            <tbody class="table-group-divider">
                <tr :key="ndt.ident" v-for="ndt in ndts">
                    <th class="row-cell cell">
                        <base-button
                            class="row-modal-link"
                            data-bs-toggle="modal"
                            data-bs-target="#NDTDataModal"
                            >⇗</base-button
                        >
                        <ndt-data-modal :ndt-data="ndt" id="NDTDataModal"></ndt-data-modal>
                    </th>
                    <th
                        class="row-cell cell"
                        :class="key.rowCellClass"
                        v-for="(key, index) in NDT_TABLE_CONFIG.columns"
                        :key="index"
                    >
                        {{ ndt[index] }}
                    </th>
                </tr>
            </tbody>
        </template>
    </base-table>
</template>

<script setup lang="ts">
import BaseTable from '@/ui/components/BaseTable.vue'
import BaseButton from '@/ui/components/BaseButton.vue'
import type { NDTData } from '@/application/types'
import { NDT_TABLE_CONFIG } from '@/application/common'
import NdtDataModal from './NdtDataModal.vue'

defineProps<{
    ndts: NDTData[]
}>()
</script>

<style scoped></style>
