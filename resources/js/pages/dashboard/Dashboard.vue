<script setup>
import { Head } from "@inertiajs/vue3";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref, computed } from "vue";
import { customerTabs, businessTabs, adminTabs } from "@/Data.js";
import DashGreeting from "../../components/DashGreeting.vue";

const props = defineProps({
    user: Object,
});

defineOptions({
    layout: MainLayout,
});

// Determine which tabs to use based on user role
let tabsData;
if (props.user.user_type === "customer") {
    tabsData = customerTabs;
} else if (props.user.user_type === "business") {
    tabsData = businessTabs;
} else if (props.user.user_type === "admin") {
    tabsData = adminTabs;
} else {
    tabsData = []; // Fallback if the role is unrecognized
}

const tabs = ref(tabsData);
const activeTab = ref(tabs.value[0]?.value || 0);

const activeTabContent = computed(() => {
    return tabs.value.find((tab) => tab.value === activeTab.value)?.content;
});

const setActiveTab = (value) => {
    activeTab.value = value;
};
</script>

<template>
    <Head title="Dashboard" />
    <div class="w-full p-4">
        <!-- User Greeting Section -->
        <DashGreeting :user="user" />

        <!-- Tabs Section -->
        <div class="w-3/5 mx-auto rounded-lg shadow-lg">
            <!-- Tabs Navigation -->
            <div class="flex bg-gray-100 rounded-t-lg">
                <template v-for="tab in tabs" :key="tab.value">
                    <button
                        :class="[
                            'flex m-1 items-center rounded-lg justify-center gap-x-2 flex-1 px-4 py-2 font-semibold transition-all duration-300',
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
