<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns"; // Import date-fns functions

const jobs = ref([]);
const loading = ref(true);

onMounted(() => {
    axios
        .get(route("get-jobs"))
        .then((res) => {
            jobs.value = res.data;
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            loading.value = false;
        });
});

const formatRelativeTime = (date) => {
    const parsedDate = parseISO(date);
    return formatDistanceToNow(parsedDate, { addSuffix: true });
};
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="flex items-center" v-if="loading">
            <div
                class="rounded m-4 border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900 lg:w-[80%] mx-auto"
            >
                <div class="mb-2">
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div class="flex justify-between mt-4">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
        <div
            v-else
            v-for="job in jobs"
            :key="job.id"
            class="relative flex flex-col mx-auto w-[95%] lg:w-[80%] m-8 round p-4 bg-gray-50 shadow rounded"
        >
            <!-- Ribbon Tag -->
            <div class="absolute top-0 left-0 -mt-3 -ml-4">
                <div
                    :class="[
                        'text-white font-bold text-xs px-2 rounded-sm py-1 shadow-lg relative z-10',
                        job.type === 'premium'
                            ? 'bg-yellow-400'
                            : 'bg-blue-400',
                    ]"
                >
                    {{ job.type }}
                </div>
                <div
                    v-if="job.type === 'premium'"
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
                            >Posted
                            {{ formatRelativeTime(job.created_at) }}</span
                        >
                    </div>
                </div>
                <div class="mt-8 flex">
                    <div class="flex gap-y-2 flex-col flex-1">
                        <span><strong>Job ID:</strong> {{ job.id }}</span>
                        <span
                            ><strong>Location:</strong>
                            {{ job.location.town }}</span
                        >
                        <span
                            ><strong>Service:</strong>
                            {{ job.service.name }}</span
                        >
                    </div>
                    <div class="flex gap-y-2 flex-col flex-1 items-end">
                        <span><strong>Due:</strong> {{ job.urgency }}</span>
                        <span
                            ><strong>Property type:</strong>
                            {{ job.property_type }}</span
                        >
                    </div>
                </div>
                <div class="mt-10">
                    <h1 class="font-bold mb-2">Job Description:</h1>
                    <div class="px-2">{{ job.desc }}</div>
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
    </div>
</template>
