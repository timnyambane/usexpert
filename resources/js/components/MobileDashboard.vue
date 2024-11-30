<script setup>
import { ref, computed, watch } from "vue";
import { customerTabs, businessTabs, adminTabs } from "@/Data.js";

const props = defineProps({
    user: Object,
});

const tabs = ref([]);
const activeTab = ref(0);

watch(
    () => props.user,
    (newUser) => {
        if (newUser?.user_type) {
            // Dynamically set tabs based on user type
            if (newUser.user_type === "customer") {
                tabs.value = customerTabs;
            } else if (newUser.user_type === "business") {
                tabs.value = businessTabs;
            } else if (newUser.user_type === "admin") {
                tabs.value = adminTabs;
            } else {
                tabs.value = [];
            }
        }
    },
    { immediate: true } // Run the watcher immediately on component setup
);

const activeTabContent = computed(() => {
    return tabs.value[activeTab.value]?.content;
});

const setActiveTab = (index) => {
    activeTab.value = index;
};
</script>

<template>
    <div class="flex flex-col w-full h-screen">
        <!-- Top Navbar -->
        <div
            class="flex py-2 px-4 items-center bg-white sticky top-0 shadow-md z-10"
        >
            <Icon
                icon="heroicons:bars-3-16-solid"
                class="text-3xl cursor-pointer text-primary-800"
            />
            <div class="flex-1 ml-2.5 justify-center flex">
                <img
                    src="https://thelocalpro.com.au/_nuxt/img/lp-logo.2219ddf.png"
                    alt="Logo"
                    class="h-8"
                />
            </div>
            <div class="flex items-center gap-4">
                <Icon
                    icon="heroicons:envelope-solid"
                    class="text-3xl cursor-pointer text-primary-800"
                />
                <Icon
                    icon="heroicons:cog-6-tooth-solid"
                    class="text-3xl cursor-pointer text-primary-800"
                />
            </div>
        </div>

        <!-- Scrollable Main Content -->
        <div class="flex-1 overflow-y-auto p-4">
            <!-- Greeting -->
            <DashGreeting :user="user" />

            <!-- Tab Content -->
            <component :is="activeTabContent" />
        </div>

        <!-- Bottom Navbar -->
        <div
            class="bg-white border-t z-40 fixed bottom-0 w-full flex justify-around items-center py-2 shadow-lg"
        >
            <template v-for="(tab, index) in tabs" :key="index">
                <button
                    :class="[
                        'flex flex-col items-center flex-1 text-sm font-semibold transition-all duration-300',
                        activeTab === index
                            ? 'text-primary'
                            : 'text-gray-600 hover:text-primary',
                    ]"
                    @click="setActiveTab(index)"
                >
                    <Icon :icon="tab.icon" height="24" />
                    <span>{{ tab.title }}</span>
                </button>
            </template>
        </div>
    </div>
</template>
