<script setup>
import { Head, router } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";
import { ref, computed, markRaw } from "vue";
import NewJobs from "./customer/NewJobs.vue";
import Quoted from "./customer/Quoted.vue";
import InProgress from "./customer/InProgress.vue";
import Settings from "./customer/Settings.vue";
import Completed from "./customer/Completed.vue";
import Inbox from "./customer/Inbox.vue";

const props = defineProps({
    user: Object,
});

defineOptions({
    layout: Authenticated,
});

// Tabs data
const tabs = ref([
    {
        title: "New Jobs",
        icon: "mdi:briefcase-outline",
        content: markRaw(NewJobs),
        value: "0",
    },
    {
        title: "Quoted",
        icon: "mdi:file-document-outline",
        content: markRaw(Quoted),
        value: "1",
    },
    {
        title: "In Progress",
        icon: "mdi:progress-check",
        content: markRaw(InProgress),
        value: "2",
    },
    {
        title: "Completed",
        icon: "mdi:check-circle-outline",
        content: markRaw(Completed),
        value: "3",
    },
    {
        title: "Inbox",
        icon: "mdi:email-outline",
        content: markRaw(Inbox),
        value: "4",
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(Settings),
        value: "5",
    },
]);

const activeTab = ref(tabs.value[0].value);

const activeTabContent = computed(() => {
    return tabs.value.find((tab) => tab.value === activeTab.value)?.content;
});

const setActiveTab = (value) => {
    activeTab.value = value;
};

function logout() {
    router.post(route("post-logout"));
}
</script>

<template>
    <Head title="Dashboard" />
    <div class="w-full p-4">
        <!-- User Greeting Section -->
        <div
            class="flex flex-col p-4 bg-gray-50 shadow-md w-full md:w-2/3 lg:w-1/3 my-6 mx-auto rounded-lg"
        >
            <h1 class="font-black text-xl sm:text-2xl">
                Good Evening, {{ props.user.last_name }}!
            </h1>
            <Button
                label="Log Out"
                icon="pi pi-sign-out"
                link
                @click="logout"
                size="small"
                class="mt-4 w-full sm:w-fit"
            />
            <Button
                label="Post a Job"
                icon="pi pi-plus-circle"
                class="mt-6 w-full sm:w-fit"
            />
        </div>

        <!-- Tabs Section -->
        <div class="w-3/5 mx-auto rounded-lg shadow-lg">
            <!-- Tabs Navigation -->
            <div class="flex bg-gray-100 rounded-t-lg">
                <template v-for="tab in tabs" :key="tab.value">
                    <button
                        :class="[
                            'flex m-1 items-center  rounded-lg justify-center gap-x-2 flex-1 px-4 py-2 font-semibold transition-all duration-300',
                            activeTab === tab.value
                                ? 'bg-white text-primary'
                                : 'hover:text-primary',
                        ]"
                        @click="setActiveTab(tab.value)"
                    >
                        <Icon :icon="tab.icon" height="20" />
                        <span class="hidden sm:inline">{{ tab.title }}</span>
                    </button>
                </template>
            </div>

            <!-- Tab Content -->
            <div class="p-2 rounded-b-lg">
                <component :is="activeTabContent" />
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    transition: color 0.3s ease, border-color 0.3s ease, background-color;
}
</style>
