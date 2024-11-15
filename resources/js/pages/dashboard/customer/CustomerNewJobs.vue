<script setup>
import { ref } from "vue";

const title = ref("This is the job title");
const desc = ref(
    "The term unstyled is used to define an alternative styling approach instead of the default theming with design tokens. PrimeVue offers two options for styling the components with your own css; the hybrid mode and the pure mode."
);
const location = ref("Aarons Pass, NSW, 2850");
const urgency = ref("Immediately");
const service = ref("Cellar Basement Conversion");
const propertyType = ref("Residential");
</script>

<template>
    <div
        class="relative flex flex-col mx-auto w-[95%] lg:w-[80%] m-4 p-4 bg-gray-50 shadow"
    >
        <!-- Premium Ribbon with Folding Effect -->
        <div class="absolute top-0 left-0 -mt-3 -ml-4">
            <!-- Ribbon Front -->
            <div
                class="bg-yellow-400 text-white font-bold text-xs px-2 rounded-sm py-1 shadow-lg relative z-10"
            >
                Premium
            </div>
            <!-- Ribbon Fold -->
            <div
                class="absolute bottom-0 left-0 w-0 h-0 border-l-[12px] border-t-8 border-l-transparent border-t-yellow-500"
                style="transform: translate(2px, 8px)"
            ></div>
        </div>

        <div class="flex flex-col z-10">
            <div class="flex items-center justify-between">
                <div class="flex-1">
                    <h1 class="font-bold text-2xl">{{ title }}</h1>
                    <span class="text-sm text-gray-400"
                        >Posted 2 weeks ago</span
                    >
                </div>
                <div class="">
                    <span><strong>ID:</strong> 4344344848347</span>
                </div>
            </div>
            <div class="mt-8 flex">
                <div class="flex gap-y-2 flex-col flex-1">
                    <span><strong>Location:</strong> {{ location }}</span>
                    <span><strong>Service:</strong> {{ service }}</span>
                </div>
                <div class="flex gap-y-2 flex-col flex-1 items-end">
                    <span><strong>Urgency:</strong> {{ urgency }}</span>
                    <span
                        ><strong>Property type:</strong>
                        {{ propertyType }}</span
                    >
                </div>
            </div>
            <div class="mt-10">
                <h1 class="font-bold mb-2">Job Description:</h1>
                <div class="px-2">{{ desc }}</div>
            </div>

            <div class="flex justify-end mt-4">
                <Button label="Cancel Job" severity="danger" />
            </div>
        </div>

        <!-- Full-width Wavy SVG Design -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1440 320" class="w-full">
                <path
                    fill="#e0f2ff"
                    d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,170.7C672,171,768,181,864,197.3C960,213,1056,235,1152,245.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    </div>
</template>
