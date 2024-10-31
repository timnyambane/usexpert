<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";

const props = defineProps({
    errors: Object,
});

defineOptions({
    layout: Authenticated,
});

const user = useForm({
    email: null,
    password: null,
});

const login = async () => {
    await user.post(route("post-login"));
};
</script>

<template>
    <Head title="Login" />

    <div class="flex items-center justify-center mt-20 px-[5%]">
        <form @submit.prevent="login" class="flex flex-col w-[25%]">
            <h1 class="font-black text-4xl my-4 text-center">Login</h1>
            <div class="mb-4">
                <label class="ml-2 font-semibold" for="email">E-mail</label>
                <IconField>
                    <InputIcon class="pi pi-envelope" />
                    <InputText
                        placeholder="E-mail"
                        class="w-full"
                        size="large"
                        type="email"
                        v-model="user.email"
                    />
                </IconField>
                <p v-if="user.errors.email" class="text-red-500 text-sm">
                    {{ user.errors.email }}
                </p>
            </div>
            <div class="mb-4">
                <label class="ml-2 font-semibold" for="password"
                    >Password</label
                >
                <IconField>
                    <InputIcon class="pi pi-lock" />
                    <InputText
                        placeholder="Password"
                        class="w-full"
                        size="large"
                        type="password"
                        v-model="user.password"
                    />
                </IconField>
                <p v-if="user.errors.password" class="text-red-500 text-sm">
                    {{ user.errors.password }}
                </p>
            </div>

            <div class="flex items-center m-2">
                <Checkbox inputId="rememberMe" />
                <label for="rememberMe" class="ml-2">Remember Me</label>
            </div>
            <Button
                label="Login"
                class="my-2 mx-12"
                type="submit"
                :loading="user.processing"
                iconPos="right"
            />

            <Link
                :href="route('forgot-pass')"
                class="text-center text-primary mt-4"
                >Forgot password?</Link
            >
        </form>
    </div>
</template>
