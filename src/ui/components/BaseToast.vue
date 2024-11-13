<template>
    <div class="toast-container position-fixed fixed-top">
        <div class="toast">
            <div class="toast-header">
                <strong>{{ toastConfig.toastHeader }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {{ toastConfig.toastContent }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useBaseToastSetup } from '@/application/composables/components/base_toast_setup';

    const { toastConfig } = useBaseToastSetup()
</script>

<style scoped></style>
