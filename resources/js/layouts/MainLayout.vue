<script setup>
import { onMounted } from "vue";

import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import { usePage } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast";

const { props } = usePage();
const toast = useToast();

// Show flash messages
onMounted(() => {
    if (props.flash?.success) {
        toast.add({
            severity: "success",
            summary: "Success",
            detail: props.flash.success,
            life: 4000,
        });
    }

    if (props.flash?.error) {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: props.flash.error,
            life: 4000,
        });
    }
});
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Toast position="top-center" />
        <Navbar :user="props.auth.user" />
        <div class="flex-grow">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>
