<script setup>
import { Head } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";
import { ref } from "vue";

defineOptions({
    layout: Authenticated,
});

const titles = ref(["Mr.", "Mrs.", "Miss.", "Ms.", "Mx."]);

const activeStep = ref(1);
</script>

<template>
    <Head title="Register Business" />
    <div class="flex flex-col items-center justify-center mt-10 px-[5%]">
        <h1 class="font-black text-4xl my-4 text-center">Register Business</h1>

        <Stepper v-model:value="activeStep" class="mt-4 w-[50%]">
            <StepList class="">
                <Step
                    v-slot="{ activateCallback, value, a11yAttrs }"
                    asChild
                    :value="1"
                >
                    <div class="flex flex-auto gap-2" v-bind="a11yAttrs.root">
                        <div
                            class="bg-transparent border-0 inline-flex items-center gap-2"
                            @click="activateCallback"
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
                            @click="activateCallback"
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
                    <div class="text-center my-4 text-xl font-semibold">
                        Fill in your personal details
                    </div>
                    <div class="grid grid-cols-2 gap-2 mx-10 mt-4">
                        <div class="m-1 flex flex-col gap-y-4">
                            <IconField>
                                <InputIcon class="pi pi-user" />
                                <Select
                                    :options="titles"
                                    placeholder="Select a Title"
                                    class="w-full py-1"
                                />
                                <span class="text-sm ml-1 text-red-400"
                                    >Error warning</span
                                >
                            </IconField>
                            <div>
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText
                                        placeholder="Full Names"
                                        class="w-full"
                                        size="large"
                                    />
                                </IconField>
                                <span class="text-sm ml-1 text-red-400"
                                    >Error warning</span
                                >
                            </div>
                            <div>
                                <IconField>
                                    <InputIcon class="pi pi-envelope" />
                                    <InputText
                                        placeholder="E-mail"
                                        class="w-full"
                                        size="large"
                                    />
                                </IconField>
                                <span class="text-sm ml-2 text-red-400"
                                    >Error warning</span
                                >
                            </div>
                        </div>
                        <div class="m-1 flex flex-col gap-y-4">
                            <div>
                                <IconField>
                                    <InputIcon class="pi pi-phone" />
                                    <InputText
                                        placeholder="Phone Number"
                                        class="w-full"
                                        size="large"
                                        type="number"
                                    />
                                </IconField>
                                <span class="text-sm ml-2 text-red-400"
                                    >Error warning</span
                                >
                            </div>
                            <div>
                                <IconField>
                                    <InputIcon class="pi pi-lock" />
                                    <InputText
                                        placeholder="Password"
                                        class="w-full"
                                        size="large"
                                        type="password"
                                    />
                                </IconField>
                                <span class="text-sm ml-2 text-red-400"
                                    >Error warning</span
                                >
                            </div>
                            <div>
                                <IconField>
                                    <InputIcon class="pi pi-lock" />
                                    <InputText
                                        placeholder="Confirm password"
                                        class="w-full"
                                        size="large"
                                        type="password"
                                    />
                                </IconField>
                                <span class="text-sm ml-2 text-red-400"
                                    >Error warning</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-6 justify-center">
                        <Button
                            label="Next Step"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            @click="activateCallback(2)"
                        />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" :value="2">
                    <div
                        class="flex flex-col gap-2 mx-auto"
                        style="min-height: 16rem; max-width: 24rem"
                    >
                        Businss
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button
                            label="Back"
                            severity="secondary"
                            icon="pi pi-arrow-left"
                            @click="activateCallback(1)"
                        />
                        <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            @click="activateCallback(3)"
                        />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" :value="3">
                    <div
                        class="flex flex-col gap-2 mx-auto"
                        style="min-height: 16rem; max-width: 24rem"
                    >
                        <div
                            class="text-center mt-4 mb-4 text-xl font-semibold"
                        >
                            Account created successfully
                        </div>
                        <div class="text-center">
                            <img
                                alt="logo"
                                src="https://primefaces.org/cdn/primevue/images/stepper/content.svg"
                            />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button
                            label="Back"
                            severity="secondary"
                            icon="pi pi-arrow-left"
                            @click="activateCallback(2)"
                        />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>
