<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, computed } from "vue";
import { customerTabs, businessTabs, adminTabs } from "@/Data.js";
import DashGreeting from "@/components/DashGreeting.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const props = defineProps({
    user: Object,
});

let tabsData;
if (props.user.user_type === "customer") {
    tabsData = customerTabs;
} else if (props.user.user_type === "business") {
    tabsData = businessTabs;
} else if (props.user.user_type === "admin") {
    tabsData = adminTabs;
} else {
    tabsData = [];
}

const tabs = ref(tabsData);
const activeTab = ref(0);

const activeTabContent = computed(() => {
    return tabs.value[activeTab.value]?.content;
});

const setActiveTab = (index) => {
    activeTab.value = index;
};
</script>

<template>
    <Head title="Dashboard" />

    <!-- Desktop display -->
    <div class="flex flex-col h-screen">
        <Navbar :user="user" />
        <div class="px-4 py-6 flex-1">
            <DashGreeting :user="user" @jobPosted="refreshJobs" />

            <!-- Tabs Section -->
            <div class="w-full max-w-screen-xl mx-auto rounded-lg shadow-lg">
                <div class="flex flex-wrap bg-gray-100 rounded-t-lg p-1">
                    <template v-for="(tab, index) in tabs" :key="index">
                        <button
                            :class="[
                                ' rounded-lg flex items-center justify-center gap-x-2 px-4 py-2.5 font-semibold transition-all duration-300 w-full sm:w-auto sm:flex-1',
                                activeTab === index
                                    ? 'bg-white text-primary'
                                    : 'hover:text-primary',
                            ]"
                            @click="setActiveTab(index)"
                        >
                            <Icon :icon="tab.icon" height="20" />
                            <span class="hidden sm:inline">{{
                                tab.title
                            }}</span>
                        </button>
                    </template>
                </div>

                <!-- Tab Content -->
                <div class="rounded-b-lg">
                    <component :is="activeTabContent" />
                </div>
            </div>
        </div>
        <Footer :user="user" />
    </div>
</template>
