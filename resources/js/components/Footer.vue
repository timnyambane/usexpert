<script setup>
import { Link } from "@inertiajs/vue3";

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
        <div class="flex lg:flex-row flex-col w-full justify-center">
            <ul class="flex lg:flex-row flex-col gap-x-40 gap-y-4 items-center">
                <Link :href="route('home')">Home</Link>
                <Link :href="route('show-register-customer')"
                    >Create Account</Link
                >
                <Link :href="route('show-register-business')"
                    >Register Business</Link
                >
                <Link href="">Contact Us</Link>
            </ul>
        </div>
        <Divider />
        <div class="hidden lg:flex items-center justify-between w-full">
            <div class="flex gap-x-4 underline">
                <Link href="">Terms of Service</Link>
                <Link href="">Privacy Policy</Link>
            </div>
            <h1>{{ date }} &copy;timny. All rights reserved</h1>
            <div class="flex gap-x-4">
                <Link href="">
                    <i
                        class="text-lg fa-brands fa-facebook hover:text-primary"
                    ></i>
                </Link>
                <Link href="">
                    <i
                        class="text-lg fa-brands fa-whatsapp hover:text-primary"
                    ></i>
                </Link>
                <Link href="">
                    <i
                        class="text-lg fa-brands fa-instagram hover:text-primary"
                    ></i>
                </Link>
                <!-- <Link href=""><i class="text-lg fa-brands fa-github hover:text-primary"></i></Link> -->
                <Link href="">
                    <i
                        class="text-lg fa-brands fa-linkedin hover:text-primary"
                    ></i>
                </Link>
                <Link href="">
                    <i
                        class="text-lg fa-brands fa-x-twitter hover:text-primary"
                    ></i>
                </Link>
            </div>
        </div>
    </footer>
</template>
