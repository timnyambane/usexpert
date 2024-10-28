<script setup>
import { Head } from "@inertiajs/vue3";
import Authenticated from "../layouts/Authenticated.vue";

defineOptions({
    layout: Authenticated,
});

const props = defineProps({
    user: Object,
});
</script>

<template>
    <Head title="Dashboard" />
    <div>Dashboard {{ user }}</div>
</template>
