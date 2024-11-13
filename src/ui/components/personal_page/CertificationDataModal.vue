<template>
    <base-modal>
        <div class="modal-header">
            <ul class="nav nav-pills" role="tablist">
                <li v-show="certData.certs?.main !== undefined" class="nav-item active" id="main-cert-tab" role="presentation">
                    <a class="nav-link active" id="main-cert-tab-link" data-bs-toggle="tab" href="#main-cert" role="tab" aria-controls="main-cert" aria-selected="true">
                        main
                    </a>
                </li>
                <li v-show="certData.certs?.renewalOne !== undefined" class="nav-item" role="presentation">
                    <a class="nav-link" id="renewal-one-tab-link" data-bs-toggle="tab" href="#renewal-one" role="tab" aria-controls="renewal-one" aria-selected="true">
                        renewal №1
                    </a>
                </li>
                <li v-show="certData.certs?.renewalTwo !== undefined" class="nav-item" role="presentation">
                    <a class="nav-link" id="renewal-two-tab-link" data-bs-toggle="tab" href="#renewal-two" role="tab" aria-controls="renewal-two" aria-selected="true">
                        renewal №2
                    </a>
                </li>
                <li v-show="certData.certs?.insertOne !== undefined" class="nav-item" role="presentation">
                    <a class="nav-link" id="insert-one-tab-link" data-bs-toggle="tab" href="#insert-one" role="tab" aria-controls="insert-one" aria-selected="true">
                        insert №1
                    </a>
                </li>
                <li v-show="certData.certs?.insertTwo !== undefined" class="nav-item" role="presentation">
                    <a class="nav-link" id="insert-two-tab-link" data-bs-toggle="tab" href="#insert-two" role="tab" aria-controls="insert-two" aria-selected="true">
                        insert №2
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="tab-content">
            <div class="tab-pane active" id="main-cert" role="tabpanel" aria-labelledby="main-cert-tab">
                <div v-html="certData.certs?.main?.html" class="modal-body"></div>
            </div>
            <div class="tab-pane" id="renewal-one" role="tabpanel" aria-labelledby="renewal-one-tab">
                <div v-html="certData.certs?.renewalOne?.html" class="modal-body"></div>
            </div>
            <div class="tab-pane" id="renewal-two" role="tabpanel" aria-labelledby="renewal-two-tab">
                <div v-html="certData.certs?.renewalTwo?.html" class="modal-body"></div>
            </div>
            <div class="tab-pane" id="insert-one" role="tabpanel" aria-labelledby="insert-one-tab">
                <div v-html="certData.certs?.insertOne?.html" class="modal-body"></div>
            </div>
            <div class="tab-pane" id="insert-two" role="tabpanel" aria-labelledby="insert-two-tab">
                <div v-html="certData.certs?.insertTwo?.html" class="modal-body"></div>
            </div>
        </div>
    </base-modal>
</template>

<script setup lang="ts">
    import type { GeneralNaksCertificationsData } from '@/application/types'
    import BaseModal from '../BaseModal.vue'

    defineProps<{
        certData: GeneralNaksCertificationsData
    }>()
</script>

<style scoped>
    .nav{
        --bs-nav-pills-link-active-bg: var(--bs-secondary-bg-subtle);
        --bs-nav-pills-link-active-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-color: var(--bs-secondary-text-emphasis);
        --bs-nav-link-hover-color: var(--bs-secondary-text-emphasis);
    }
</style>
