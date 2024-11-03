<script setup>
const missions = [
    {
        image: "https://thelocalpro.com.au/_nuxt/img/conn.6685569.png",
        title: "Connect",
        desc: "Connect with businesses and build local communities together",
    },
    {
        image: "https://thelocalpro.com.au/_nuxt/img/conn.6685569.png",
        title: "Give",
        desc: "Giving an opportunity to all local businesses to be able to succeed and not have to compete with big companies and the power of the internet",
    },
    {
        image: "https://thelocalpro.com.au/_nuxt/img/conn.6685569.png",
        title: "Build",
        desc: "Build trusted relationships in all local areas by giving customers fair prices and peace of mind",
    },
];
</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-5xl font-black my-10">Our Mission</h1>
        <div class="flex py-4 items-center w-full px-[15%]">
            <div v-for="mission in missions" :key="index" class="flex-1">
                <div class="flex flex-col items-center m-2 p-4 rounded shadow">
                    <img :src="mission.image" alt="Mission Image" />
                    <h1 class="font-bold text-2xl mt-2">{{ mission.title }}</h1>
                    <span class="text-center mt-2">
                        {{ mission.desc }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
