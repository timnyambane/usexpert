<script setup>
import { Head, useForm } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";
import { ref } from "vue";

defineOptions({
    layout: Authenticated,
});

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

const activeStep = ref(1);

async function checkPersonalDetais(activateCallback) {
    await personal.post(route("validate-personal"), {
        onSuccess: () => {
            activateCallback(2);
        },
        onError: () => {},
    });
}
</script>

<template>
    <Head title="Register Business" />
    <div class="flex flex-col items-center justify-center mt-10 px-[5%]">
        <h1 class="font-black text-4xl my-4 text-center">Register Business</h1>

        <Stepper v-model:value="activeStep" class="mt-4 w-[50%]">
            <StepList class="px-[15%]">
                <Step
                    v-slot="{ activateCallback, value, a11yAttrs }"
                    asChild
                    :value="1"
                >
                    <div class="flex flex-auto gap-2" v-bind="a11yAttrs.root">
                        <div
                            class="bg-transparent border-0 inline-flex items-center gap-2"
                            v-bind="a11yAttrs.header"
                        >
                            <span
                                :class="[
                                    'rounded-full border-2 size-10 inline-flex items-center justify-center',
                                    {
                                        'bg-primary text-primary-contrast border-primary':
                                            value <= activeStep,
                                        'border-surface-200 dark:border-surface-700':
                                            value > activeStep,
                                    },
                                ]"
                            >
                                <i class="pi pi-user" />
                            </span>
                            <h1>Personal</h1>
                        </div>
                        <Divider />
                    </div>
                </Step>
                <Step
                    v-slot="{ activateCallback, value, a11yAttrs }"
                    asChild
                    :value="2"
                >
                    <div
                        class="flex flex-row flex-auto gap-2 pl-2"
                        v-bind="a11yAttrs.root"
                    >
                        <div
                            class="bg-transparent border-0 inline-flex items-center gap-2"
                            v-bind="a11yAttrs.header"
                        >
                            <span
                                :class="[
                                    'rounded-full border-2 size-10 inline-flex items-center justify-center',
                                    {
                                        'bg-primary text-primary-contrast border-primary':
                                            value <= activeStep,
                                        'border-surface-200 dark:border-surface-700':
                                            value > activeStep,
                                    },
                                ]"
                            >
                                <i class="pi pi-id-card" />
                            </span>
                            <h1>Business</h1>
                        </div>
                        <Divider />
                    </div>
                </Step>
                <Step
                    v-slot="{ activateCallback, value, a11yAttrs }"
                    asChild
                    :value="3"
                >
                    <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
                        <div
                            class="bg-transparent border-0 inline-flex items-center gap-2"
                            v-bind="a11yAttrs.header"
                        >
                            <span
                                :class="[
                                    'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                                    {
                                        'bg-primary text-primary-contrast border-primary':
                                            value <= activeStep,
                                        'border-surface-200 dark:border-surface-700':
                                            value > activeStep,
                                    },
                                ]"
                            >
                                <i class="pi pi-id-card" />
                            </span>
                            <h1>Payment</h1>
                        </div>
                    </div>
                </Step>
            </StepList>
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
                                        name="name"
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
                                    v-if="personal.phone"
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
                                        <InputIcon
                                            class="fa-solid fa-briefcase"
                                        />
                                        <InputText
                                            placeholder="Business Name"
                                            class="w-full"
                                            size="large"
                                            v-model="business.business_name"
                                            type="text"
                                            name="business name"
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
                                            v-model="business.errors.location"
                                            optionLabel="location"
                                            placeholder="Select your location"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                            editable
                                        />
                                    </IconField>
                                    <p
                                        v-if="business.errors.location"
                                        class="text-red-500 text-sm"
                                    >
                                        {{ business.location }}
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
                                            optionLabel="categories"
                                            placeholder="Select a Work Category"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                            editable
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
                                            optionLabel="services"
                                            placeholder="Select all services"
                                            class="w-full py-1"
                                            size="large"
                                            showClear
                                            editable
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
                                @click="activateCallback(3)"
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
                                iconPos="right"
                            />
                        </div>
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
