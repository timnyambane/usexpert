<script setup>
import { Head } from "@inertiajs/vue3";
import Authenticated from "../layouts/Authenticated.vue";
import HeroSection from "@components/views/HeroSection.vue";

defineOptions({
    layout: Authenticated,
});
</script>

<template>
    <Head title="Home" />
    <div>
        <HeroSection />
    </div>
</template>
