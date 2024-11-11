<script setup>
import { Head, useForm, usePage, router } from "@inertiajs/vue3";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref, watch, computed } from "vue";

defineOptions({
    layout: MainLayout,
});

const { locations, work_categories, services } = usePage().props;

const personal = useForm({
    full_name: null,
    email: null,
    password: null,
    confirmPassword: null,
    phone: null,
});

const business = useForm({
    business_name: null,
    location: null,
    work_category: null,
    services: null,
});

const filteredServices = computed(() => {
    if (!business.work_category) return [];
    return services.filter(
        (service) => service.work_category_id === business.work_category.id
    );
});

watch(
    () => business.work_category,
    (newValue) => {
        if (!newValue) {
            business.services = [];
        }
    }
);

const activeStep = ref(1);

async function checkPersonalDetais(activateCallback) {
    await personal.post(route("validate-personal"), {
        onSuccess: () => {
            activateCallback(2);
        },
        onError: () => {},
    });
}
async function checkBusinessDetais(activateCallback) {
    await business.post(route("validate-business"), {
        onSuccess: () => {
            activateCallback(3);
        },
        onError: () => {},
    });
}

function registerBusiness() {
    const payload = {
        personal: personal.data(),
        business: business.data(),
    };
    router.post(route("post-register", payload));
    console.log(payload);
}
</script>

<template>
    <Head title="Register Business" />
    <div class="flex flex-col items-center justify-center mt-10 px-[5%]">
        <h1 class="font-black text-4xl my-4 text-center">Register Business</h1>

        <Stepper v-model:value="activeStep" class="mt-4 w-[50%]">
            <div class="flex items-center justify-between gap-4 px-[10%]">
                <div class="personal flex items-center justify-center gap-2">
                    <Icon
                        :icon="
                            activeStep === 1
                                ? 'heroicons-user'
                                : activeStep > 1
                                ? 'heroicons-check-circle-solid'
                                : ''
                        "
                        :class="
                            activeStep === 1
                                ? 'text-black'
                                : activeStep > 1
                                ? 'text-primary-400'
                                : ''
                        "
                        height="24"
                    />

                    Personal
                </div>
                <Divider />
                <div class="business flex items-center justify-center gap-2">
                    <Icon icon="heroicons-briefcase" height="24" />
                    Business
                </div>
                <Divider />
                <div class="payment flex items-center justify-center gap-2">
                    <Icon icon="heroicons-currency-dollar" height="24" />
                    Payment
                </div>
            </div>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" :value="1">
                    <div class="flex flex-col gap-y-2 mx-[15%]">
                        <span class="font-bold text-center"
                            >Enter your Personal Details</span
                        >
                        <div class="m-1 flex flex-col gap-y-4">
                            <div>
                                <label for="" class="font-semibold ml-1"
                                    >Full Names</label
                                >
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText
                                        placeholder="Full Names"
                                        class="w-full"
                                        size="large"
                                        v-model="personal.full_name"
                                        type="text"
                                        name="first_last_name"
                                    />
                                </IconField>
                                <p
                                    v-if="personal.errors.full_name"
                                    class="text-red-500 text-sm"
                                >
                                    {{ personal.errors.full_name }}
                                </p>
                            </div>

                            <div>
                                <label for="" class="font-semibold ml-1"
                                    >E-mail</label
                                >
                                <IconField>
                                    <InputIcon class="pi pi-envelope" />
                                    <InputText
                                        placeholder="E-mail"
                                        class="w-full"
                                        v-model="personal.email"
                                        size="large"
                                        type="email"
                                    />
                                </IconField>
                                <p
                                    v-if="personal.errors.email"
                                    class="text-red-500 text-sm"
                                >
                                    {{ personal.errors.email }}
                                </p>
                            </div>

                            <div class="phone-container">
                                <label for="" class="font-semibold ml-1"
                                    >Phone Number</label
                                >
                                <IconField>
                                    <InputIcon class="pi pi-phone" />
                                    <InputText
                                        v-model="personal.phone"
                                        placeholder="254712345678"
                                        class="w-full phone-input"
                                        type="tel"
                                        size="large"
                                    />
                                </IconField>
                                <p
                                    v-if="personal.errors.phone"
                                    class="text-red-500 text-sm"
                                >
                                    {{ personal.errors.phone }}
                                </p>
                            </div>

                            <div>
                                <label for="" class="font-semibold ml-1"
                                    >Password</label
                                >
                                <IconField>
                                    <InputIcon class="pi pi-lock" />
                                    <InputText
                                        placeholder="Password"
                                        class="w-full"
                                        size="large"
                                        type="password"
                                        v-model="personal.password"
                                    />
                                </IconField>
                                <p
                                    v-if="personal.errors.password"
                                    class="text-red-500 text-sm"
                                >
                                    {{ personal.errors.password }}
                                </p>
                            </div>

                            <div>
                                <label for="" class="font-semibold ml-1"
                                    >Confirm Password</label
                                >
                                <IconField>
                                    <InputIcon class="pi pi-lock" />
                                    <InputText
                                        placeholder="Confirm password"
                                        class="w-full"
                                        size="large"
                                        type="password"
                                        v-model="personal.confirmPassword"
                                    />
                                </IconField>
                                <p
                                    v-if="personal.errors.confirmPassword"
                                    class="text-red-500 text-sm"
                                >
                                    {{ personal.errors.confirmPassword }}
                                </p>
                            </div>
                        </div>

                        <div class="flex pt-6 justify-center">
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                @click="checkPersonalDetais(activateCallback)"
                                :loading="personal.processing"
                            />
                        </div>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" :value="2">
                    <div class="flex flex-col gap-2 mx-auto">
                        <div class="flex flex-col gap-y-2 mx-[15%]">
                            <span class="font-bold text-center"
                                >Enter your Business Details</span
                            >
                            <div class="m-1 flex flex-col gap-y-4">
                                <div>
                                    <label for="" class="font-semibold ml-1"
                                        >Business Name</label
                                    >
                                    <IconField>
                                        <InputIcon class="pi pi-briefcase" />
                                        <InputText
                                            placeholder="Business Name"
                                            class="w-full"
                                            size="large"
                                            v-model="business.business_name"
                                            type="text"
                                            name="username"
                                        />
                                    </IconField>
                                    <p
                                        v-if="business.errors.business_name"
                                        class="text-red-500 text-sm"
                                    >
                                        {{ business.errors.business_name }}
                                    </p>
                                </div>

                                <div>
                                    <label for="" class="font-semibold ml-1"
                                        >Location</label
                                    >
                                    <IconField>
                                        <InputIcon
                                            class="fa-solid fa-location-dot"
                                        />
                                        <Select
                                            v-model="business.location"
                                            optionLabel="town"
                                            :options="locations"
                                            placeholder="Select your location"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                        />
                                    </IconField>
                                    <p
                                        v-if="business.errors.location"
                                        class="text-red-500 text-sm"
                                    >
                                        {{ business.errors.location }}
                                    </p>
                                </div>
                            </div>

                            <div class="m-1 flex flex-col gap-y-4">
                                <div class="">
                                    <label for="" class="font-semibold ml-1"
                                        >Work Category</label
                                    >
                                    <IconField>
                                        <InputIcon
                                            class="fa-solid fa-barcode"
                                        />
                                        <Select
                                            v-model="business.work_category"
                                            optionLabel="name"
                                            :options="work_categories"
                                            placeholder="Select a Work Category"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                        />
                                    </IconField>
                                    <p
                                        v-if="business.errors.work_category"
                                        class="text-red-500 text-sm"
                                    >
                                        {{ business.errors.work_category }}
                                    </p>
                                </div>

                                <div>
                                    <label for="" class="font-semibold ml-1"
                                        >Services</label
                                    >
                                    <IconField>
                                        <InputIcon class="fa-solid fa-list" />
                                        <MultiSelect
                                            v-model="business.services"
                                            optionLabel="name"
                                            :options="filteredServices"
                                            placeholder="Select all services"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                        />
                                    </IconField>
                                    <p
                                        v-if="business.errors.services"
                                        class="text-red-500 text-sm"
                                    >
                                        {{ business.errors.services }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex pt-6 justify-between">
                            <Button
                                label="Back"
                                icon="pi pi-arrow-left"
                                iconPos="left"
                                @click="activateCallback(1)"
                            />
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                @click="checkBusinessDetais(activateCallback)"
                                :loading="business.processing"
                            />
                        </div>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" :value="3">
                    <div class="flex flex-col gap-2 mx-auto">
                        <span class="font-bold text-center">Payment</span>
                        <div class="flex pt-6 justify-between">
                            <Button
                                label="Back"
                                icon="pi pi-arrow-left"
                                iconPos="left"
                                @click="activateCallback(2)"
                            />
                            <Button
                                label="Register"
                                icon="pi pi-check"
                                :loading="business.processing"
                                iconPos="right"
                                @click="registerBusiness"
                            />
                        </div>
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
