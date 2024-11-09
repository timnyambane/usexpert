<script setup>
import { Head } from "@inertiajs/vue3";
import Authenticated from "@/layouts/Authenticated.vue";
import { ref, computed, markRaw } from "vue";
import Leads from "./customer/Leads.vue";
import Quoted from "./customer/Quoted.vue";
import Active from "./customer/Active.vue";
import Settings from "./customer/Settings.vue";
import Finished from "./customer/Finished.vue";

defineOptions({
    layout: Authenticated,
});

const props = defineProps({
    user: Object,
});

// Tabs data
const tabs = ref([
    { title: "Leads", content: markRaw(Leads), value: "0" },
    { title: "Quoted Jobs", content: markRaw(Quoted), value: "1" },
    { title: "Active Jobs", content: markRaw(Active), value: "2" },
    { title: "Finished Jobs", content: markRaw(Finished), value: "3" },
    { title: "Settings", content: markRaw(Settings), value: "4" },
]);

// Current active tab
const activeTab = ref(tabs.value[0].value);

// Computed property to get the active tab content
const activeTabContent = computed(() => {
    return tabs.value.find((tab) => tab.value === activeTab.value)?.content;
});

// Function to set the active tab
const setActiveTab = (value) => {
    activeTab.value = value;
};
</script>

<template>
    <Head title="Dashboard" />
    <div
        class="flex items-center p-4 bg-gray-50 shadow-md w-1/3 my-10 mx-auto rounded-lg"
    >
        <h1 class="font-bold text-lg">
            Good Evening, {{ props.user.last_name }}!
        </h1>
    </div>

    <div class="w-[60%] mx-auto rounded-lg shadow-lg">
        <!-- Tabs Navigation -->
        <div class="flex border-b bg-gray-100 rounded-t-lg">
            <template v-for="tab in tabs" :key="tab.value">
                <button
                    :class="[
                        'flex-1 px-4 py-2 font-semibold text-center transition-all duration-300 m-1',
                        activeTab === tab.value
                            ? 'bg-white text-primary rounded-lg'
                            : 'text-gray-600 hover:text-primary',
                    ]"
                    @click="setActiveTab(tab.value)"
                >
                    {{ tab.title }}
                </button>
            </template>
        </div>

        <!-- Tab Content -->
        <div class="p-1 rounded-b-lg"><component :is="activeTabContent" /></div>
    </div>
</template>

<style scoped>
button {
    transition: color 0.3s ease, border-color 0.3s ease, background-color;
}
</style>
