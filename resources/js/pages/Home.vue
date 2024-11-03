<script setup>
import { Head } from "@inertiajs/vue3";
import Authenticated from "../layouts/Authenticated.vue";
import HeroSection from "@components/views/HeroSection.vue";
import Mission from "../components/views/Mission.vue";

defineOptions({
    layout: Authenticated,
});
</script>

<template>
    <Head title="Home" />
    <div class="flex flex-col items-center">
        <HeroSection />
        <Mission />
    </div>
</template>
