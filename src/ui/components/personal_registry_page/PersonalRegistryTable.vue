<template>
    <base-table class="caption-top">
        <template v-slot:caption>
            <caption>
                Всего:
                {{
                    personalStore.count
                }}
            </caption>
        </template>
        <template v-slot:header>
            <thead>
                <tr class="data-row cell">
                    <th class="column-header"></th>
                    <th class="column-header"
                        :class="key.headerClass"
                        v-for="(key, index) in PERSONAL_TABLE_CONFIG.columns"
                        :key="index">
                        {{ key.text }}
                    </th>
                </tr>
            </thead>
        </template>
        <template v-slot:body>
            <tbody class="table-group-divider">
                <tr :key="personal.ident" v-for="personal in personalStore.personalList">
                    <th class="personal-link-row-cell row-cell cell">
                        <router-link
                            class="personal-link"
                            :to="{ name: 'personal', params: { id: personal.ident } }">
                            <base-button>⇗</base-button>
                        </router-link>
                    </th>
                    <th
                        class="row-cell cell"
                        :class="key.rowCellClass"
                        v-for="(key, index) in PERSONAL_TABLE_CONFIG.columns"
                        :key="index">
                        <span v-if="personal[index] != undefined">{{ personal[index] }}</span>
                        <span v-else>-</span>
                    </th>
                </tr>
            </tbody>
        </template>
    </base-table>
</template>

<script setup lang="ts">
    import BaseTable from '@/ui/components/BaseTable.vue'
    import BaseButton from '@/ui/components/BaseButton.vue'
    import { PERSONAL_TABLE_CONFIG } from '@/application/common'
    import { usePersonalStore } from '@/infrastructure/store';

    const personalStore = usePersonalStore()
</script>

<style scoped>
    .name-row-cell {
        text-align: left;
        padding: 0 20px;
    }
    .personal-link {
        text-decoration: none;
    }
    .personal-link button {
        padding: 0;
    }
</style>
