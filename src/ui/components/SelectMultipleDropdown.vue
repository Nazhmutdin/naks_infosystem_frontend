<template>
    <div class="dropdown">
        <a class="btn btn-secondary-outline dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            {{ header }}
        </a> 
        <ul class="dropdown-menu">
            <slot name="dropdown-body">
                <li v-for="(option, id) in options" :key="id">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" :value="option" @click="$emit('select', $event)">
                        {{ option }}
                    </label>
                </li>
            </slot>
        </ul>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        header: string
        options: string[]
    }>()
</script>

<style scoped></style>
