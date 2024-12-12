<template>
    <base-nav-bar-page>
        <div class="content">
            <div class="search-bar-area">
                <search-bar
                    @searchBarInput="searchBarInputProcess"
                    :placeholder="'acst numbers'">
                    <base-button :class="'btn-outline-secondary'"  data-bs-toggle="modal" data-bs-target="#FiltersModal">filters</base-button>
                    <acst-filters-modal id="FiltersModal"></acst-filters-modal>
                    <base-button :class="'btn-outline-secondary'" @click="requestAcsts">search</base-button>
                </search-bar>
            </div>
            <div class="registry-paginator">
                <acst-registry-paginator></acst-registry-paginator>
            </div>
            <div class="content-table-area">
                <acst-registry-table></acst-registry-table>
            </div>
        </div>
    </base-nav-bar-page>
</template>

<script setup lang="ts">
    import BaseNavBarPage from './BaseNavBarPage.vue'
    import SearchBar from '@/ui/components/SearchBar.vue'
    import BaseButton from '@/ui/components/BaseButton.vue'
    import AcstRegistryTable from '@/ui/components/acst_registry_page/AcstRegistryTable.vue'
    import AcstFiltersModal from '@/ui/components/acst_registry_page/AcstFiltersModal.vue'
    import AcstRegistryPaginator from '@/ui/components/acst_registry_page/AcstRegistryPaginator.vue'
    import { useAcstRegistrySetup } from '@/application/composables/acst_registry_setup'
    import { onBeforeMount } from 'vue'

    const { acstStore, requestAcsts, searchBarInputProcess } = useAcstRegistrySetup()

    onBeforeMount(async () => {
        if (acstStore.acstList.length == 0){
            await requestAcsts()
        }
    })
</script>

<style scoped>
    .search-bar-area {
        margin: 25px 0;
    }
    .content-table-area {
        padding: 0 0 1rem 0;
    }
    .wrap{
        --default-content-width: 75%;
    }
</style>
