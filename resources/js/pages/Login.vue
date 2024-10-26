<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";

defineOptions({
    layout: Authenticated,
});

// Reactive user object for form data
const user = useForm({
    email: null,
    password: null,
});
</script>

<template>
    <Head title="Login" />

    <div class="flex items-center justify-center mt-20 px-[5%]">
        <form action="" class="flex flex-col w-[25%]">
            <h1 class="font-black text-4xl my-4 text-center">Login</h1>
            <label class="ml-2" for="email">E-mail</label>
            <InputText
                id="email"
                placeholder="example@email.com"
                v-model="user.email"
                type="email"
                class="w-full mt-1 mb-4"
            />
            <label class="ml-2" for="password">Password</label>
            <InputText
                id="password"
                placeholder="********"
                v-model="user.password"
                type="password"
                class="w-full mb-4"
            />

            <div class="flex items-center m-2">
                <Checkbox inputId="rememberMe" />
                <label for="rememberMe" class="ml-2">Remember Me</label>
            </div>
            <Button label="Login" class="my-2 mx-12" type="submit" />

            <Link
                :href="route('forgot-pass')"
                class="text-center text-primary mt-4"
                >Forgot password?</Link
            >
        </form>
    </div>
</template>
