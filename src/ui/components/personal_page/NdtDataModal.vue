<template>
    <base-modal>
        <div class="modal-body">
            <base-table>
                <template v-slot:header>
                    <thead>
                        <tr>
                            <th>total welded</th>
                            <th>total ndt</th>
                            <th>accepted</th>
                            <th>rejected</th>
                            <th>ndt status</th>
                        </tr>
                    </thead>
                </template>
                <template v-slot:body>
                    <tbody>
                        <tr>
                            <th>{{ ndtData.totalWelded }}</th>
                            <th>{{ ndtData.totalNdt }}</th>
                            <th>{{ ndtData.totalAccepted }}</th>
                            <th>{{ ndtData.totalRejected }}</th>
                            <th>{{ ndtStatus }}%</th>
                        </tr>
                    </tbody>
                </template>
            </base-table>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NDTData } from '@/application/types'
import BaseModal from '../BaseModal.vue'
import BaseTable from '../BaseTable.vue'

const props = defineProps<{
    ndtData: NDTData
}>()

const ndtStatus = computed(() => {
    if (props.ndtData.totalNdt === 0) {
        return 0
    } else {
        return ((props.ndtData.totalRejected / props.ndtData.totalNdt) * 100).toFixed(2)
    }
})
</script>

<style scoped></style>
