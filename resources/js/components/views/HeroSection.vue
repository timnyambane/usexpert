<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import QuotationForm from "../QuotationForm.vue";
</script>

<template>
    <div
        class="flex flex-col px-[10%] items-center justify-between py-2 lg:py-6"
    >
        <h4
            class="font-black text-3xl lg:text-6xl text-center mx-[10%] my-5 lg:my-10"
        >
            Connecting Local Cleaning Professionals With Local Clients
        </h4>
        <QuotationForm />
        <img src="@/assets/images/landing.avif" alt="" />
    </div>
</template>

<style></style>
