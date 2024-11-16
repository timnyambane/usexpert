<script setup>
import { usePage } from "@inertiajs/vue3";
import { reactive, ref } from "vue";

const { auth } = usePage().props;
const user = auth?.user;

const userDetails = reactive({
    fullName: user.first_name + " " + user.last_name,
    email: user.email,
    phone: user.phone,
});

const editable = ref(false);

function toggleEditable() {
    editable.value = !editable.value;
    if (!editable.value) {
        console.log(userDetails);
    }
}
</script>

<template>
    <div class="flex flex-col p-2 rounded-md">
        <h2 class="font-bold text-2xl">Personal Details</h2>
        <div class="flex flex-col">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-1">
                    <img
                        @click="mango"
                        class="size-28 rounded-full object-cover mt-4 cursor-pointer"
                        alt="User Avatar"
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
                <Button
                    icon="pi pi-pencil"
                    :label="!editable ? 'Update Details' : 'Save Changes'"
                    @click="toggleEditable"
                />
            </div>

            <div class="my-4 w-1/2">
                <label for="full-name" class="font-semibold ml-1"
                    >Full Names</label
                >
                <IconField>
                    <InputIcon class="pi pi-user" />
                    <InputText
                        id="full-name"
                        placeholder="Full Name"
                        class="w-full"
                        type="text"
                        v-model="userDetails.fullName"
                        :disabled="!editable"
                    />
                </IconField>
            </div>

            <div class="mb-4 w-1/2">
                <label for="email" class="font-semibold ml-1">E-mail</label>
                <IconField>
                    <InputIcon class="pi pi-envelope" />
                    <InputText
                        id="email"
                        placeholder="E-mail"
                        class="w-full"
                        type="email"
                        v-model="userDetails.email"
                        :disabled="!editable"
                    />
                </IconField>
            </div>

            <div class="mb-4 w-1/2">
                <label for="phone" class="font-semibold ml-1"
                    >Phone Number</label
                >
                <IconField>
                    <InputIcon class="pi pi-phone" />
                    <InputText
                        id="phone"
                        placeholder="Phone Number"
                        class="w-full"
                        type="tel"
                        v-model="userDetails.phone"
                        :disabled="!editable"
                    />
                </IconField>
            </div>
        </div>
    </div>
</template>
