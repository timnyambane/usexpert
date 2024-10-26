<script setup>
import { Head, useForm } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";
import { ref } from "vue";

const titles = ref(["Mr.", "Mrs.", "Miss.", "Ms.", "Mx."]);
const loading = ref(false);

defineOptions({
    layout: Authenticated,
});

const customer = useForm({
    title: null,
    full_name: null,
    email: null,
    password: null,
    confirmPassword: null,
    phone: null,
});

const formatPhoneNumber = (phone) => {
    if (!phone) return;
    return phone.replace(/[+()\s-]/g, "");
};

const submitForm = async () => {
    loading.value = true;
    customer.phone = formatPhoneNumber(customer.phone);
    await customer.post("/register/customer", {
        onSuccess: () => {
            console.log("Success");
            loading.value = false;
        },
        onError: (response) => {
            console.log("Error response:", response);
            loading.value = false;
        },
        headers: {
            Accept: "application/json",
        },
    });
};
</script>

<template>
    <Head title="Register as Customer" />
    <div
        class="flex flex-col items-center justify-center mt-10 px-[5%] w-[50%] mx-auto"
    >
        <h1 class="font-black text-4xl my-4 text-center">
            Register as Customer
        </h1>
        <form
            @submit.prevent="submitForm"
            class="w-full flex flex-col"
            action=""
        >
            <div class="grid grid-cols-2 gap-2 mx-10 mt-4">
                <div class="m-1 flex flex-col gap-y-4">
                    <div>
                        <IconField>
                            <InputIcon class="pi pi-user" />
                            <Select
                                :options="titles"
                                placeholder="Select a Title"
                                class="w-full py-1"
                                v-model="customer.title"
                            />
                        </IconField>
                        <p
                            v-if="customer.errors.title"
                            class="text-red-500 text-sm"
                        >
                            {{ customer.errors.title }}
                        </p>
                    </div>

                    <div>
                        <IconField>
                            <InputIcon class="pi pi-user" />
                            <InputText
                                placeholder="Full Names"
                                class="w-full"
                                size="large"
                                v-model="customer.full_name"
                                type="text"
                                name="name"
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
                    <div>
                        <IconField>
                            <InputIcon class="pi pi-phone" />
                            <InputMask
                                v-model="customer.phone"
                                mask="(+254) 799-999-999"
                                placeholder="(+254) 712-345-678"
                                class="w-full"
                                type="tel"
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
                    :loading="loading"
                    iconPos="right"
                />
            </div>
        </form>
    </div>
</template>
