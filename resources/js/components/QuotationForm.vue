<script setup>
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";

const { locations, work_categories } = usePage().props;
const location = ref(null);
const work_category = ref(null);
</script>

<template>
    <div
        class="flex lg:flex-row flex-col items-center justify-center w-full lg:w-[80%] gap-x-4 mb-6 gap-y-2"
    >
        <Select
            v-model="work_category"
            :options="work_categories"
            optionLabel="name"
            placeholder="Choose the work category"
            class="py-1.5 flex-1 w-full"
            size="large"
            showClear
        />
        <Select
            v-model="location"
            optionLabel="town"
            :options="locations"
            placeholder="Select your location"
            class="py-1.5 flex-1 w-full"
            size="large"
            showClear
        />
        <Button label="Get a free quote" size="large" class="flex-1 w-full" />
    </div>
</template>
