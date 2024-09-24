<template>
    <base-registry-page>
        <template v-slot:search-input-area>
            <search-input class="search-area-item"
            :placeholder-string="'names, kleymos, certs'"
            ></search-input>
        </template>
        <template v-slot:filters-modal-window>
            <filters-modal-button class="search-area-item"
            @open="showModal = true">
                <personal-filters-modal
                :show="showModal"
                @close="showModal = false"
                ></personal-filters-modal>
            </filters-modal-button>
        </template>
        <template v-slot:search-button>
            <search-button @search="store.requestPersonals" class="search-area-item"></search-button>
        </template>
        <template v-slot:paginator>
            <personal-registry-paginator
            ></personal-registry-paginator>
        </template>
        <personal-table></personal-table>
    </base-registry-page>
</template>

<script lang="ts" setup>
    import { onBeforeMount } from "vue"
    import BaseRegistryPage from "./base/BaseRegistryPage.vue";
    import SearchInput from "@/components/SearchInput.vue";
    import FiltersModalButton from "@/components/FiltersModalButton.vue";
    import SearchButton from "@/components/SearchButton.vue";
    import PersonalTable from "@/components/data-tables/PersonalTable.vue";
    import PersonalRegistryPaginator from "@/components/paginators/PersonalRegistryPaginator.vue";
    import PersonalFiltersModal from "@/components/modals/PersonalFiltersModal.vue";
    import { usePersonalRegistrySetup } from "@/composables/personal_registry_setup";

    const { store, showModal } = usePersonalRegistrySetup()

    onBeforeMount(async () => {
        await store.requestPersonals()
    })
</script>

<style scoped>
    .inner-wrap{
        --content-width: 65vw
    }
</style>
