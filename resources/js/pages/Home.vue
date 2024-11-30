<script setup>
import { Head } from "@inertiajs/vue3";
import MainLayout from "../layouts/MainLayout.vue";
import HeroSection from "@components/views/HeroSection.vue";
import Mission from "../components/views/Mission.vue";

defineOptions({
    layout: MainLayout,
});
</script>

<template>
    <Head title="Home" />
    <div class="flex flex-col items-center">
        <HeroSection />
        <Mission />
    </div>
</template>

<style>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}
</style>
