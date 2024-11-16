<script setup>
import { ref, computed } from "vue";

import Profile from "@components/settings/Profile.vue";
import Notifications from "@components/settings/Notifications.vue";
import Privacy from "@components/settings/Privacy.vue";

const tabs = [
    { label: "Profile", icon: "mdi:cog-outline", component: Profile },
    {
        label: "Notifications",
        icon: "mdi:bell-outline",
        component: Notifications,
    },
    { label: "Privacy", icon: "mdi:shield-outline", component: Privacy },
];

const activeTab = ref(0);

const activeTabContent = computed(() => {
    return tabs[activeTab.value]?.component;
});

const setActiveTab = (index) => {
    activeTab.value = index;
};
</script>

<template>
    <div class="flex">
        <!-- Sidebar with tab buttons (33% width) -->
        <div class="flex flex-col bg-gray-100 py-8 w-1/5">
            <div
                v-for="(tab, index) in tabs"
                :key="index"
                :class="[
                    'flex items-center gap-x-2 px-6 py-4 cursor-pointer transition-all duration-300 my-0.5 font-semibold',
                    activeTab === index ? 'bg-gray-200' : 'hover:bg-gray-200',
                ]"
                @click="setActiveTab(index)"
            >
                <Icon :icon="tab.icon" />
                <span>{{ tab.label }}</span>
            </div>
        </div>

        <!-- Main content area displaying the active tab's component (remaining 66%) -->
        <div class="py-2 px-4 flex-1">
            <component :is="activeTabContent" />
        </div>
    </div>
</template>
