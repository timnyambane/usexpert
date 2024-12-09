<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    user: Object,
});

const date = new Date().getFullYear();
</script>

<template>
    <footer class="flex flex-col items-center px-[5%] py-4 bg-gray-50">
        <div class="my-2">
            <img
                src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                alt="Logo"
                class="h-8"
            />
        </div>
        <div class="flex w-full justify-center">
            <ul class="flex lg:flex-row flex-col gap-x-40 gap-y-4 items-center">
                <Link :href="route('home')">Home</Link>
                <Link v-if="!props.user" :href="route('show-register-customer')"
                    >Create Account</Link
                >
                <Link v-if="!props.user" :href="route('show-register-business')"
                    >Register Business</Link
                >
                <Link :href="route('home')">Contact Us</Link>
                <Link :href="route('home')">Blog</Link>
                <Link :href="route('home')">Directory</Link>
            </ul>
        </div>
        <Divider />
        <div
            class="flex gap-y-4 flex-col-reverse lg:flex-row items-center justify-between w-full"
        >
            <div class="flex flex-col lg:flex-row items-center gap-4 underline">
                <Link href="">Terms of Service</Link>
                <Link href="">Privacy Policy</Link>
            </div>
            <h1>{{ date }} &copy;timny. All rights reserved</h1>
            <div class="flex gap-x-4">
                <Link href="">
                    <Icon
                        icon="mdi:facebook"
                        class="text-lg hover:text-primary"
                    />
                </Link>
                <Link href="">
                    <Icon
                        icon="mdi:whatsapp"
                        class="text-lg hover:text-primary"
                    />
                </Link>
                <Link href="">
                    <Icon
                        icon="mdi:instagram"
                        class="text-lg hover:text-primary"
                    />
                </Link>
                <Link href="">
                    <Icon
                        icon="mdi:linkedin"
                        class="text-lg hover:text-primary"
                    />
                </Link>
                <Link href="">
                    <Icon
                        icon="mdi:twitter"
                        class="text-lg hover:text-primary"
                    />
                </Link>
            </div>
        </div>
    </footer>
</template>
