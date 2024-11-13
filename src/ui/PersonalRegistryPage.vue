<template>
    <base-nav-bar-page>
        <div class="content">
            <div class="search-bar-area">
                <search-bar
                    @searchBarInput="searchBarInputProcess"
                    @on-press="requestPersonalsOnEnter"
                    :placeholder="'kleymos, names, cert numbers'">
                    <base-button :class="'btn-outline-secondary'"  data-bs-toggle="modal" data-bs-target="#FiltersModal">filters</base-button>
                    <personal-filters-modal id="FiltersModal"></personal-filters-modal>
                    <base-button :class="'btn-outline-secondary'" @click="requestPersonals">search</base-button>
                </search-bar>
            </div>
            <div class="registry-paginator">
                <personal-registry-paginator></personal-registry-paginator>
            </div>
            <div class="content-table-area">
                <personal-registry-table></personal-registry-table>
            </div>
        </div>
    </base-nav-bar-page>
</template>

<script setup lang="ts">
    import BaseNavBarPage from './BaseNavBarPage.vue'
    import SearchBar from '@/ui/components/SearchBar.vue'
    import BaseButton from '@/ui/components/BaseButton.vue'
    import PersonalRegistryTable from '@/ui/components/personal_registry_page/PersonalRegistryTable.vue'
    import PersonalFiltersModal from '@/ui/components/personal_registry_page/PersonalFiltersModal.vue'
    import PersonalRegistryPaginator from '@/ui/components/personal_registry_page/PersonalRegistryPaginator.vue'
    import { usePersonalRegistrySetup } from '@/application/composables/personal_registry_setup'
    import { onBeforeMount } from 'vue'

    const { personalStore, requestPersonals, searchBarInputProcess } = usePersonalRegistrySetup()

    onBeforeMount(async () => {
        if (personalStore.personalList.length == 0){
           await requestPersonals()
        }
    })
    

    const requestPersonalsOnEnter = async (event: KeyboardEvent) => {
        if (event.key == 'Enter') {
            await requestPersonals()
        }
    }
</script>

<style scoped>
    .search-bar-area {
        margin: 25px 0;
    }
    .content-table-area {
        padding: 0 0 1rem 0;
    }
</style>
