<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav class="flex items-center justify-between py-2 px-[5%]">
        <div class="logo">
            <Link :href="route('home')">
                <img
                    src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                    alt="Logo"
                    class="h-8"
            /></Link>
        </div>
        <div class="flex items-center gap-x-6">
            <Button
                as="a"
                href="tel:254706783789"
                label="Contact Us"
                outlined
                icon="pi pi-phone"
            />
            <Button :as="Link" :href="route('login')" label="Login" />
        </div>
    </nav>
</template>
