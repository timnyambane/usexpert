<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div class="flex px-[10%] items-center justify-between hero py-6">
        <div class="flex flex-col flex-1 gap-y-8">
            <h1 class="font-black text-6xl">
                Connecting Local Cleaning Professionals With Local Clients
            </h1>
            <h3 class="text-2xl">
                At TheLocalPro, we take pride in connecting our customers with
                trustworthy cleaning companies known for exceptional customer
                service and value. Our primary goal is to foster strong
                community networks.
            </h3>
            <div class="flex gap-x-4 items-center">
                <Button
                    label="Create Account"
                    size="large"
                    outlined=""
                    :as="Link"
                    :href="route('show-register-customer')"
                />
                <Button
                    label="Register your Business"
                    class="w-fit"
                    size="large"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    :as="Link"
                    :href="route('show-register-business')"
                />
            </div>
        </div>
        <div class="flex-1">
            <img src="@/assets/images/drill-man.webp" alt="" />
        </div>
    </div>
</template>

<style></style>
