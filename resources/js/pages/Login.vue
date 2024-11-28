<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import MainLayout from "@/layouts/MainLayout.vue";

const props = defineProps({
    errors: Object,
});

defineOptions({
    layout: MainLayout,
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

    <div class="flex items-center justify-center mt-10 px-4 sm:px-8 md:px-12">
        <form
            @submit.prevent="login"
            class="flex flex-col w-full max-w-4xl sm:max-w-xl md:max-w-lg mx-auto"
        >
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

            <div class="flex items-center my-2">
                <Checkbox inputId="rememberMe" />
                <label for="rememberMe" class="ml-2">Remember Me</label>
            </div>

            <Button
                label="Login"
                class="my-2 mx-auto"
                type="submit"
                :loading="user.processing"
            />

            <Link
                :href="route('forgot-pass')"
                class="text-center text-primary mt-4 block"
            >
                Forgot password?
            </Link>
        </form>
    </div>
</template>
