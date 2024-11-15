<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

const editable = ref(true);
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-8 p-4">
        <!-- Personal Details Section -->
        <div class="flex-1 border-r pr-2">
            <div class="flex flex-col items-start mb-8 rounded-md">
                <div class="flex items-center justify-between w-full">
                    <h2 class="font-semibold text-2xl">Personal Details</h2>
                    <Button
                        icon="pi pi-pencil"
                        :label="editable ? 'Update Details' : 'Save Changes'"
                        @click="editable = !editable"
                        :outlined="editable"
                    />
                </div>
                <div class="flex w-full gap-4 mt-4">
                    <div class="w-full">
                        <div class="mb-4">
                            <label for="full-name" class="font-semibold ml-1"
                                >Full Name</label
                            >
                            <IconField>
                                <InputIcon class="pi pi-user" />
                                <InputText
                                    id="full-name"
                                    placeholder="Full Name"
                                    class="w-full"
                                    size="large"
                                    type="text"
                                    :disabled="editable"
                                />
                            </IconField>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="font-semibold ml-1"
                                >E-mail</label
                            >
                            <IconField>
                                <InputIcon class="pi pi-envelope" />
                                <InputText
                                    id="email"
                                    placeholder="E-mail"
                                    class="w-full"
                                    size="large"
                                    type="email"
                                    :disabled="editable"
                                />
                            </IconField>
                        </div>
                        <div class="mb-4">
                            <label for="phone" class="font-semibold ml-1"
                                >Phone Number</label
                            >
                            <IconField>
                                <InputIcon class="pi pi-phone" />
                                <InputText
                                    id="phone"
                                    placeholder="Phone Number"
                                    class="w-full"
                                    size="large"
                                    type="tel"
                                    :disabled="editable"
                                />
                            </IconField>
                        </div>
                    </div>
                    <div class="flex w-28 flex-col">
                        <img
                            class="size-24 rounded-full object-cover mt-4"
                            alt="User Avatar"
                            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Button
                            label="Remove"
                            text
                            size="small"
                            severity="danger"
                            class="mt-1"
                        />
                    </div>
                </div>
            </div>

            <!-- Change Password Section -->
            <div class="flex flex-col mr-28">
                <h3 class="text-2xl font-semibold mb-4">Privacy</h3>
                <div class="mb-4">
                    <label for="current-password" class="font-semibold ml-1"
                        >Current Password</label
                    >
                    <IconField>
                        <InputIcon class="pi pi-lock" />
                        <InputText
                            id="current-password"
                            placeholder="********"
                            class="w-full"
                            size="large"
                            type="password"
                        />
                    </IconField>
                </div>
                <div class="mb-4">
                    <label for="new-password" class="font-semibold ml-1"
                        >New Password</label
                    >
                    <IconField>
                        <InputIcon class="pi pi-lock" />
                        <InputText
                            id="new-password"
                            placeholder="********"
                            class="w-full"
                            size="large"
                            type="password"
                        />
                    </IconField>
                </div>
                <div class="flex items-center justify-between py-2">
                    <Button
                        label="Update Password"
                        icon="pi pi-pencil"
                        class="w-fit"
                    />
                    <!-- Delete Account Button -->
                    <Button
                        label="Delete Account"
                        severity="danger"
                        class="w-fit"
                        icon="pi pi-trash"
                    />
                </div>
            </div>
        </div>

        <!-- Notifications Section -->
        <div class="flex flex-col flex-1">
            <h2 class="text-2xl font-semibold mb-6">Notifications</h2>
            <div class="flex flex-col px-2">
                <div class="flex justify-between w-full items-center py-2">
                    <label for="push-email-notifications"
                        >Push Email Notifications</label
                    >
                    <ToggleSwitch id="push-email-notifications" />
                </div>
                <div class="flex justify-between w-full items-center py-2">
                    <label for="push-sms-notifications"
                        >Push SMS Notifications</label
                    >
                    <ToggleSwitch id="push-sms-notifications" />
                </div>

                <div class="grid grid-cols-2 gap-4 my-8">
                    <div class="flex items-center gap-2">
                        <Checkbox
                            inputId="messages"
                            name="messages"
                            value="messages"
                        />
                        <label for="messages">Messages</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox
                            inputId="special_offers"
                            name="special_offers"
                            value="special_offers"
                        />
                        <label for="special_offers">Special Offers</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox
                            inputId="newsletter"
                            name="newsletter"
                            value="newsletter"
                        />
                        <label for="newsletter">Newsletter</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox
                            inputId="recommendations"
                            name="recommendations"
                            value="recommendations"
                        />
                        <label for="recommendations">Recommendations</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
