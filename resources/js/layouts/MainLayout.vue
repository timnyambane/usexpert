<script setup>
import { onMounted } from "vue";

import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import { usePage } from "@inertiajs/vue3";

const { props } = usePage();
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Navbar :user="props.auth.user" />
        <div class="flex-grow">
            <slot />
        </div>
        <Footer :user="props.auth.user" />
    </div>
</template>

<style scoped></style>
