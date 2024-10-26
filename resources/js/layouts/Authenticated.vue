<script setup>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
</script>
<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex-grow slot">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>
