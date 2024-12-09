<script setup>
import { Link, router, usePage } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({
    user: Object,
});

const { url } = usePage();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

function logout() {
    router.post(route("post-logout"));
}
</script>

<template>
    <nav
        class="flex items-center justify-between py-2 px-2 lg:px-40 bg-blue-50 shadow"
    >
        <div class="flex-1 justify-start">
            <Link :href="route('home')">
                <img
                    src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                    alt="Logo"
                    class="h-8"
                />
            </Link>
        </div>

        <div
            class="hidden lg:flex items-center justify-center flex-1 gap-6 mx-4"
        >
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

        <div class="lg:flex items-center gap-x-6 flex-1 justify-end hidden">
            <Button
                as="a"
                href="tel:254706783789"
                label="Call Us"
                outlined
                icon="pi pi-phone"
            />
            <Button
                v-if="!props.user"
                :as="Link"
                :href="route('login')"
                label="Login"
                icon="pi pi-sign-in"
            />
            <Button
                v-if="props.user"
                :as="Link"
                :href="route('show-dashboard')"
                label="Dashboard"
            />
        </div>

        <!-- Mobile Menu Trigger -->
        <div class="flex lg:hidden">
            <Icon
                icon="heroicons:bars-3-16-solid"
                class="text-3xl cursor-pointer text-primary-800"
                @click="toggleMobileMenu"
            />
        </div>
    </nav>

    <!-- Sliding Mobile Menu -->
    <div
        class="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity lg:hidden"
        v-show="isMobileMenuOpen"
        @click="toggleMobileMenu"
    ></div>

    <div
        class="fixed top-0 left-0 w-[65%] h-full bg-white shadow-lg z-50 transform transition-transform duration-500"
        :class="{
            '-translate-x-full': !isMobileMenuOpen,
            'translate-x-0': isMobileMenuOpen,
        }"
    >
        <div class="p-4 flex items-center justify-between">
            <img
                src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                alt="Logo"
                class="h-8"
            />
        </div>

        <div class="p-2 flex flex-col space-y-4">
            <Link
                v-if="!props.user"
                :href="route('show-register-customer')"
                class="block text-gray-700 my-2 p-1 rounded"
                @click="toggleMobileMenu"
            >
                Create Account
            </Link>
            <Link
                v-if="!props.user"
                :href="route('show-register-business')"
                class="block text-gray-700 my-2 p-1 rounded"
                @click="toggleMobileMenu"
            >
                Register Business
            </Link>
            <Button
                as="a"
                :href="route('login')"
                class="block text-gray-700 my-2 p-1 rounded w-fit px-8"
                v-if="!props.user"
                @click="toggleMobileMenu"
                label="Login"
                icon="pi pi-sign-in"
            />
            <Button
                as="a"
                :href="route('show-dashboard')"
                @click="toggleMobileMenu"
                class="w-fit"
                v-if="props.user"
                label="Dashboard"
            />
            <Button
                label="Logout"
                v-if="props.user"
                @click="logout"
                class="w-fit"
                icon="pi pi-sign-out"
                severity="danger"
                outlined
            />

            <Button
                as="a"
                href="tel:254706783789"
                class="w-fit"
                label="Call Us"
                link
                icon="pi pi-phone"
            />
        </div>
    </div>
</template>

<style scoped></style>
