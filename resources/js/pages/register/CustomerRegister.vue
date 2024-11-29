<script setup>
import { Head, useForm } from "@inertiajs/vue3";
import MainLayout from "@/layouts/MainLayout.vue";

const props = defineProps({
    errors: Object,
});

defineOptions({
    layout: MainLayout,
});

const customer = useForm({
    title: null,
    full_name: null,
    email: null,
    password: null,
    confirmPassword: null,
    phone: null,
});

async function registerCustomer() {
    await customer.post(route("post-register-customer"), {
        onSuccess: () => {},
        onError: () => {},
    });
}
</script>

<template>
    <Head title="Register as Customer" />
    <div
        class="flex flex-col items-center justify-center mt-10 px-4 sm:px-8 md:px-12 w-full max-w-2xl mx-auto"
    >
        <h1 class="font-black text-4xl my-4 text-center">
            Register as Customer
        </h1>
        <form
            @submit.prevent="registerCustomer"
            class="w-full flex flex-col"
            action=""
        >
            <div class="flex flex-col gap-4 mx-4 lg:mx-10 mt-4">
                <div class="m-1 flex flex-col gap-y-4">
                    <div>
                        <label for="name" class="font-semibold ml-1"
                            >Full Names</label
                        >
                        <IconField>
                            <InputIcon class="pi pi-user" />
                            <InputText
                                placeholder="Full Name"
                                class="w-full"
                                size="large"
                                v-model="customer.full_name"
                                type="text"
                                name="name"
                                id="name"
                                autocomplete="name"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.full_name"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.full_name }}
                        </p>
                    </div>

                    <div>
                        <label for="email" class="font-semibold ml-1"
                            >E-mail</label
                        >
                        <IconField>
                            <InputIcon class="pi pi-envelope" />
                            <InputText
                                placeholder="E-mail"
                                class="w-full"
                                v-model="customer.email"
                                size="large"
                                type="email"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.email"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.email }}
                        </p>
                    </div>
                </div>

                <div class="m-1 flex flex-col gap-y-4">
                    <div class="phone">
                        <label for="phone" class="font-semibold ml-1"
                            >Phone Number</label
                        >
                        <IconField class="phone">
                            <InputIcon class="pi pi-phone" />
                            <InputText
                                v-model="customer.phone"
                                placeholder="254712345678"
                                class="w-full"
                                type="tel"
                                size="large"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.phone"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.phone }}
                        </p>
                    </div>

                    <div>
                        <label for="password" class="font-semibold ml-1"
                            >Password</label
                        >
                        <IconField>
                            <InputIcon class="pi pi-lock" />
                            <InputText
                                placeholder="Password"
                                class="w-full"
                                size="large"
                                type="password"
                                v-model="customer.password"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.password"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.password }}
                        </p>
                    </div>

                    <div>
                        <label for="confirmPassword" class="font-semibold ml-1"
                            >Confirm Password</label
                        >
                        <IconField>
                            <InputIcon class="pi pi-lock" />
                            <InputText
                                placeholder="Confirm password"
                                class="w-full"
                                size="large"
                                type="password"
                                v-model="customer.confirmPassword"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.confirmPassword"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.confirmPassword }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-8">
                <Button
                    type="submit"
                    label="Create Account"
                    class="px-6 py-2"
                    :loading="customer.processing"
                />
            </div>
        </form>
    </div>
</template>
