<script setup>
import { usePage } from "@inertiajs/vue3";
import { ref } from "vue";

const locations = usePage().props.locations;
const work_categories = usePage().props.work_categories;
const location = ref(null);
const work_category = ref(null);
</script>

<template>
    <div class="flex items-center justify-center w-[80%] gap-x-4 mb-6">
        <Select
            v-model="work_category"
            :options="work_categories"
            optionLabel="name"
            placeholder="Choose the work category"
            class="py-1.5 flex-1"
            size="large"
            showClear
            editable
        />
        <Select
            v-model="location"
            optionLabel="town"
            :options="locations"
            placeholder="Select your location"
            class="py-1.5 flex-1"
            size="large"
            showClear
        />
        <Button label="Get a free quote" size="large" class="flex-1" />
    </div>
</template>
