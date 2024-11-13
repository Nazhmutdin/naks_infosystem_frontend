<template>
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <slot></slot>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
                    <slot name="modal-buttons"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .fade {
        transition: all 0.10s;
    }
    .modal-dialog {
        width: fit-content;
        max-width: 65%; 
    }
</style>
