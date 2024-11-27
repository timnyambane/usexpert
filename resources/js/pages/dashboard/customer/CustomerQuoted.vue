<script setup>
import { ref, onMounted } from "vue";

function toggleSPs(jobId) {
    const job = quotations.value.find((job) => job.id === jobId);
    job.showSP = !job.showSP;
}

onMounted(() => {
    quotations.value.forEach((job) => {
        job.showSP = false;
    });
});

const quotations = ref([
    {
        id: 1,
        title: "Smart Home Installation",
        desc: "Design and install smart home systems that improve efficiency and convenience.",
        location: "Wollongong, NSW, 2500",
        urgency: "In 3 Days",
        service: "Smart Home Automation",
        propertyType: "Residential",
        type: "Standard",
        quotedSP: [
            {
                name: "Alex Turner",
                rating: 4,
                cost: 580,
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                averageRating: 32,
            },
            {
                name: "Sarah Miller",
                rating: 5,
                cost: 750,
                avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                averageRating: 47,
            },
        ],
    },
    {
        id: 2,
        title: "Kitchen Renovation",
        desc: "Upgrade your kitchen with modern appliances and stylish designs.",
        location: "Sydney, NSW, 2000",
        urgency: "Next Week",
        service: "Kitchen Remodeling",
        propertyType: "Commercial",
        type: "Premium",
        quotedSP: [
            {
                name: "John Smith",
                rating: 5,
                cost: 9500,
                avatar: "https://randomuser.me/api/portraits/men/2.jpg",
                averageRating: 42,
            },
            {
                name: "Emily Davis",
                rating: 3,
                cost: 7000,
                avatar: "https://randomuser.me/api/portraits/women/3.jpg",
                averageRating: 26,
            },
        ],
    },
    {
        id: 3,
        title: "Bathroom Overhaul",
        desc: "Complete redesign of your bathroom with premium fixtures and fittings.",
        location: "Melbourne, VIC, 3000",
        urgency: "2 Days",
        service: "Bathroom Renovation",
        propertyType: "Residential",
        type: "Standard",
        quotedSP: [
            {
                name: "Chris Johnson",
                rating: 4,
                cost: 3500,
                avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                averageRating: 38,
            },
            {
                name: "Sophie Carter",
                rating: 2,
                cost: 2400,
                avatar: "https://randomuser.me/api/portraits/women/4.jpg",
                averageRating: 18,
            },
        ],
    },
    {
        id: 4,
        title: "Home Office Setup",
        desc: "Create a productive and ergonomic home office environment.",
        location: "Brisbane, QLD, 4000",
        urgency: "1 Month",
        service: "Office Setup",
        propertyType: "Commercial",
        type: "Premium",
        quotedSP: [
            {
                name: "Robert Brown",
                rating: 5,
                cost: 1200,
                avatar: "https://randomuser.me/api/portraits/men/4.jpg",
                averageRating: 45,
            },
            {
                name: "Olivia Martinez",
                rating: 4,
                cost: 950,
                avatar: "https://randomuser.me/api/portraits/women/5.jpg",
                averageRating: 33,
            },
            {
                name: "Martin Gaye",
                rating: 3,
                cost: 301,
                avatar: "https://randomuser.me/api/portraits/men/12.jpg",
                averageRating: 12,
            },
        ],
    },
    {
        id: 5,
        title: "House Painting",
        desc: "High-quality exterior and interior house painting services.",
        location: "Adelaide, SA, 5000",
        urgency: "Tomorrow",
        service: "Painting",
        propertyType: "Residential",
        type: "Standard",
        quotedSP: [
            {
                name: "Jack Wilson",
                rating: 3,
                cost: 1600,
                avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                averageRating: 28,
            },
            {
                name: "Emma White",
                rating: 4,
                cost: 2200,
                avatar: "https://randomuser.me/api/portraits/women/6.jpg",
                averageRating: 41,
            },
        ],
    },
]);
</script>

<template>
    <div class="flex flex-col">
        <div
            v-for="job in quotations"
            :key="job.id"
            class="relative flex flex-col mx-auto w-[95%] lg:w-[80%] m-8 round p-4 bg-gray-50 shadow rounded"
        >
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
                <div class="my-10">
                    <h1 class="font-bold mb-2">Job Description:</h1>
                    <div class="px-2">{{ job.desc }}</div>
                </div>

                <div class="flex flex-col">
                    <h2
                        class="flex items-center font-bold mb-2 cursor-pointer w-fit"
                        @click="toggleSPs(job.id)"
                    >
                        Local Pros who quoted
                        <Icon
                            icon="fe:drop-down"
                            :class="[
                                'transition-transform duration-300',
                                job.showSP ? 'rotate-180' : 'rotate-0',
                            ]"
                        />
                    </h2>

                    <div
                        v-if="job.showSP"
                        v-for="sp in job.quotedSP"
                        :key="sp.index"
                        class="flex items-center justify-between px-10 my-1 shadow py-1 rounded bg-gray-50"
                    >
                        <div class="flex items-center">
                            <Avatar
                                :image="sp.avatar"
                                class="mr-2"
                                size="large"
                                shape="circle"
                            />
                            <div class="flex gap-10 items-center">
                                <div class="flex flex-col">
                                    <h1 class="font-semibold">{{ sp.name }}</h1>
                                    <h1>
                                        <strong>Bid:</strong> A$ {{ sp.cost }}
                                    </h1>
                                </div>
                                <div class="flex gap-2 items-center text-sm">
                                    <Rating
                                        v-model="sp.rating"
                                        :stars="5"
                                        disabled
                                    />
                                    <span> {{ sp.averageRating }} Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <Button
                                label="Inbox"
                                icon="pi pi-inbox"
                                iconPos="top"
                                size="small"
                                severity="secondary"
                            />
                            <Button
                                label="Hire"
                                icon="pi pi-briefcase"
                                iconPos="top"
                                size="small"
                                severity="success"
                            />
                        </div>
                    </div>
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
