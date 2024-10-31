<script setup>
import { Link } from "@inertiajs/vue3";

const date = new Date().getFullYear();
</script>

<template>
    <footer class="flex flex-col items-center px-[5%] py-4 bg-gray-50">
        <div class="logo">Logo</div>
        <div class="flex">
            <ul class="flex gap-x-4">
                <Link href="">Home</Link>
                <Link href="">Link</Link>
                <Link href="">Link</Link>
                <Link href="">Link</Link>
                <Link href="">Link</Link>
            </ul>
        </div>
        <Divider />
        {{ date }} &copy;timny. All rights reserved
    </footer>
</template>
