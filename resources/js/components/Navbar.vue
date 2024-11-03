<script setup>
import { Link, usePage } from "@inertiajs/vue3";

const props = defineProps({
    user: Object,
});

const { url } = usePage();
</script>

<template>
    <nav class="flex items-center justify-between py-2 px-[5%] bg-blue-50">
        <div class="flex-1 justify-start">
            <Link :href="route('home')">
                <img
                    src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                    alt="Logo"
                    class="h-8"
                />
            </Link>
        </div>

        <div class="flex items-center justify-center flex-1 gap-6 mx-4">
            <Link
                v-if="!props.user"
                :href="route('show-register-customer')"
                :class="{
                    'text-primary-400': url === route('show-register-customer'),
                }"
            >
                Create Account
            </Link>
            <Link
                v-if="!props.user"
                :href="route('show-register-business')"
                :class="{
                    'text-primary-400': url === route('show-register-business'),
                }"
            >
                Register Business
            </Link>
        </div>

        <div class="flex items-center gap-x-6 flex-1 justify-end">
            <Button
                as="a"
                href="tel:254706783789"
                label="Contact Us"
                outlined
                icon="pi pi-phone"
            />
            <Button
                v-if="!props.user"
                :as="Link"
                :href="route('login')"
                label="Login"
            />
            <Button
                v-if="props.user"
                :as="Link"
                :href="route('show-dashboard')"
                label="Dashboard"
            />
        </div>
    </nav>
</template>
