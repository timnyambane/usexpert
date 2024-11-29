<script setup>
import { ref } from "vue";

const jobs = ref([
    {
        id: 1,
        title: "Complete Home Automation System",
        desc: "Upgrade your home with the latest smart technology for lighting, security, and climate control. Designed to make your life more convenient and efficient.",
        location: "Aarons Pass, NSW, 2850",
        urgency: "Immediately",
        service: "Smart Home Automation",
        propertyType: "Residential",
        type: "Premium",
    },
    {
        id: 2,
        title: "Commercial Office Fit-Out",
        desc: "Transform your commercial space into a functional and visually appealing office environment. Perfect for startups and expanding businesses.",
        location: "Sydney, NSW, 2000",
        urgency: "Next Week",
        service: "Office Renovation",
        propertyType: "Commercial",
        type: "Standard",
    },
    {
        id: 3,
        title: "Roof Restoration and Repairs",
        desc: "Restore your roof to its former glory with high-quality repairs. Protect your property from leaks and weather damage while enhancing its aesthetic appeal.",
        location: "Melbourne, VIC, 3000",
        urgency: "2 Days",
        service: "Roof Repair",
        propertyType: "Residential",
        type: "Premium",
    },
    {
        id: 4,
        title: "Luxury Kitchen Upgrade",
        desc: "Revamp your kitchen with modern appliances, bespoke cabinetry, and luxurious finishes. Designed to meet the needs of a professional cook or a large family.",
        location: "Brisbane, QLD, 4000",
        urgency: "1 Month",
        service: "Kitchen Remodeling",
        propertyType: "Commercial",
        type: "Standard",
    },
    {
        id: 5,
        title: "Timber Flooring Installation",
        desc: "Enhance your home with high-quality timber flooring that adds warmth, style, and durability. Perfect for living rooms, bedrooms, or hallways.",
        location: "Adelaide, SA, 5000",
        urgency: "Tomorrow",
        service: "Flooring Installation",
        propertyType: "Residential",
        type: "Premium",
    },
]);
</script>

<template>
    <div class="flex flex-col gap-8">
        <!-- Loop through jobs array to create 5 cards -->
        <div
            v-for="job in jobs"
            :key="job.id"
            class="relative flex flex-col mx-auto w-[95%] lg:w-[80%] m-8 round p-4 bg-gray-50 shadow rounded"
        >
            <!-- Ribbon Tag -->
            <div class="absolute top-0 left-0 -mt-3 -ml-4">
                <div
                    :class="[
                        'text-white font-bold text-xs px-2 rounded-sm py-1 shadow-lg relative z-10',
                        job.type === 'Premium'
                            ? 'bg-yellow-400'
                            : 'bg-blue-400',
                    ]"
                >
                    {{ job.type }}
                </div>
                <div
                    v-if="job.type === 'Premium'"
                    class="absolute bottom-0 left-0 w-0 h-0 border-l-[12px] border-t-8 border-l-transparent border-t-yellow-500"
                    style="transform: translate(2px, 8px)"
                ></div>
                <div
                    v-else
                    class="absolute bottom-0 left-0 w-0 h-0 border-l-[12px] border-t-8 border-l-transparent border-t-blue-500"
                    style="transform: translate(2px, 8px)"
                ></div>
            </div>

            <div class="flex flex-col z-10">
                <div class="flex items-center justify-between">
                    <div class="flex-1">
                        <h1 class="font-bold text-2xl">{{ job.title }}</h1>
                        <span class="text-sm text-gray-400"
                            >Posted 2 weeks ago</span
                        >
                    </div>
                </div>
                <div class="mt-8 flex">
                    <div class="flex gap-y-2 flex-col flex-1">
                        <span><strong>Job ID:</strong> {{ job.id }}</span>
                        <span
                            ><strong>Location:</strong> {{ job.location }}</span
                        >
                        <span><strong>Service:</strong> {{ job.service }}</span>
                    </div>
                    <div class="flex gap-y-2 flex-col flex-1 items-end">
                        <span><strong>Urgency:</strong> {{ job.urgency }}</span>
                        <span
                            ><strong>Property type:</strong>
                            {{ job.propertyType }}</span
                        >
                    </div>
                </div>
                <div class="mt-10">
                    <h1 class="font-bold mb-2">Job Description:</h1>
                    <div class="px-2">{{ job.desc }}</div>
                </div>

                <div class="mt-4">
                    <div class="flex flex-col">
                        <h2 class="font-bold">Work done by:</h2>
                        <div
                            class="flex items-center justify-between px-10 my-1 shadow py-2 rounded bg-gray-50"
                        >
                            <div class="flex items-center">
                                <Avatar
                                    image="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    class="mr-2"
                                    size="large"
                                    shape="circle"
                                />
                                <div class="flex gap-10 items-center">
                                    <div class="flex flex-col">
                                        <h1 class="font-semibold">
                                            Business Name
                                        </h1>
                                        <h1>
                                            <strong>Charge:</strong> A$ amount
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <Button label="Review Job" severity="info" />
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
    </div>
</template>
