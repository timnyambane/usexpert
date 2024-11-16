<script setup>
import { router, useForm } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import { usePage } from "@inertiajs/vue3";

const { locations, work_categories, services } = usePage().props;

const props = defineProps({
    user: Object,
});

const postJobModal = ref(false);
const jobDate = ref(null);

const jobPosting = useForm({
    selectedLocation: null,
    selectedWorkCategory: null,
    selectedService: null,
    propertyType: null,
    urgency: null,
    jobTitle: null,
    jobDesc: null,
    postType: null,
});

const step = ref(1);

const minDate = ref(new Date());

const filteredServices = computed(() => {
    if (!jobPosting.selectedWorkCategory) return [];
    return services.filter(
        (service) =>
            service.work_category_id === jobPosting.selectedWorkCategory.id
    );
});

const isStepValid = computed(() => {
    if (step.value === 1) {
        return (
            jobPosting.selectedWorkCategory &&
            jobPosting.selectedService &&
            jobPosting.selectedLocation
        );
    } else if (step.value === 2) {
        return jobPosting.propertyType !== null;
    } else if (step.value === 3) {
        // Ensure urgency is selected
        if (!jobPosting.urgency) {
            return false;
        }
        // If urgency is "specific", check jobDate's value
        if (jobPosting.urgency === "specific") {
            return jobDate.value !== null;
        }
        return true;
    } else if (step.value === 4) {
        return (
            jobPosting.jobTitle &&
            jobPosting.jobDesc &&
            jobPosting.postType !== null
        );
    }
    return true;
});

function logout() {
    router.post(route("post-logout"));
}

function nextStep() {
    if (isStepValid.value) {
        step.value++;
    }
}

function prevStep() {
    step.value--;
}

function postJob() {
    if (jobPosting.urgency === "specific") {
        jobPosting.urgency = jobDate.value;
    }
    console.log(jobPosting);
}
</script>

<template>
    <div
        class="flex justify-between items-center p-4 bg-gray-50 shadow-md w-full md:w-2/3 lg:w-1/3 my-6 mx-auto rounded-lg"
    >
        <div class="flex flex-col">
            <h1 class="font-black text-xl sm:text-2xl">
                Good Evening, {{ props.user.first_name }}!
            </h1>
            <Button
                label="Log Out"
                icon="pi pi-sign-out"
                link
                @click="logout"
                size="small"
                class="mt-4 w-full sm:w-fit"
            />

            <Button
                v-if="props.user.user_type === 'customer'"
                label="Post a Job"
                icon="pi pi-plus-circle"
                class="mt-6 w-fit"
                @click="postJobModal = true"
            />
        </div>
        <div>
            <div class="rounded-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    class="object-cover size-24"
                />
            </div>
        </div>

        <Dialog
            v-model:visible="postJobModal"
            modal
            header="Post a Job"
            class="w-[90%] lg:w-[40%] lg:h-[50vh]"
        >
            <div class="flex justify-between py-4 gap-10 px-10">
                <div class="flex flex-col flex-1">
                    <!-- Step 1: Select work category and location -->
                    <div v-if="step === 1" class="flex flex-col gap-y-2 flex-1">
                        <h2 class="font-bold">Work Category</h2>
                        <Select
                            v-model="jobPosting.selectedWorkCategory"
                            :options="work_categories"
                            optionLabel="name"
                            placeholder="Choose the work category"
                            class="py-1.5 w-full"
                            size="large"
                        />
                        <h2 class="font-bold">Service</h2>
                        <Select
                            v-model="jobPosting.selectedService"
                            :options="filteredServices"
                            optionLabel="name"
                            placeholder="Choose the service"
                            class="py-1.5 w-full"
                            size="large"
                        />
                        <h2 class="font-bold">Location</h2>
                        <Select
                            v-model="jobPosting.selectedLocation"
                            optionLabel="town"
                            :options="locations"
                            placeholder="Select your location"
                            class="py-1.5 w-full"
                            size="large"
                        />
                    </div>

                    <!-- Step 2: Property Type -->
                    <div v-if="step === 2" class="flex flex-col gap-y-4 flex-1">
                        <h2 class="font-bold">
                            Is this job for a residential or a commercial
                            property?
                        </h2>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.propertyType"
                                inputId="residential"
                                name="propertyType"
                                value="residential"
                            />
                            <label for="residential">Residential</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.propertyType"
                                inputId="commercial"
                                name="propertyType"
                                value="commercial"
                            />
                            <label for="commercial">Commercial</label>
                        </div>
                    </div>

                    <!-- Step 3: Urgency -->
                    <div v-if="step === 3" class="flex flex-col gap-y-4 flex-1">
                        <h2 class="font-bold">
                            When would you want the job done?
                        </h2>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.urgency"
                                inputId="immediately"
                                name="urgency"
                                value="immediately"
                            />
                            <label for="immediately">Immediately</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.urgency"
                                inputId="flexible"
                                name="urgency"
                                value="flexible"
                            />
                            <label for="flexible">Flexible</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.urgency"
                                inputId="specific"
                                name="urgency"
                                value="specific"
                            />
                            <label for="specific">Specific date</label>
                        </div>

                        <div
                            v-if="jobPosting.urgency === 'specific'"
                            class="card flex"
                        >
                            <DatePicker
                                v-model="jobDate"
                                placeholder="Date"
                                showButtonBar
                                dateFormat="dd/mm/yy"
                                :minDate="minDate"
                            />
                        </div>
                    </div>

                    <!-- Step 4: Job Title and Description -->
                    <div v-if="step === 4" class="flex flex-col gap-y-1 flex-1">
                        <h2 class="font-bold">Job title</h2>
                        <InputText type="text" v-model="jobPosting.jobTitle" />
                        <h2 class="font-bold mt-4">Job description</h2>
                        <Textarea
                            type="text"
                            v-model="jobPosting.jobDesc"
                            rows="6"
                        />

                        <h2 class="font-bold mt-4">Post Type</h2>
                        <div class="flex items-center gap-2 mb-2">
                            <RadioButton
                                v-model="jobPosting.postType"
                                inputId="premium"
                                name="postType"
                                value="premium"
                            />
                            <label for="premium">Premium post</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <RadioButton
                                v-model="jobPosting.postType"
                                inputId="standard"
                                name="postType"
                                value="standard"
                            />
                            <label for="standard">Standard post</label>
                        </div>
                    </div>

                    <!-- Step 5: Confirmation -->
                    <div v-if="step === 5" class="flex flex-col gap-y-1 flex-1">
                        Step 5
                    </div>

                    <!-- Step Navigation Buttons -->
                    <div class="flex items-center gap-x-4 justify-end mt-4">
                        <Button
                            v-if="step > 1"
                            icon="pi pi-arrow-left"
                            @click="prevStep"
                            rounded
                            :disabled="step === 1"
                        />
                        <Button
                            v-if="step < 5"
                            icon="pi pi-arrow-right"
                            @click="nextStep"
                            rounded
                            :disabled="!isStepValid"
                        />
                        <Button
                            v-if="step === 5"
                            icon="pi pi-check"
                            iconPos="right"
                            label="Post"
                            variant="outlined"
                            raised
                            rounded
                            @click="postJob"
                        />
                    </div>
                </div>
                <div class="flex-1 items-center flex flex-col border">
                    <img
                        src="@/assets/images/welcome.svg"
                        alt="Logo"
                        class="p-2"
                    />

                    <div class="flex space-x-2 mb-4">
                        <div class="flex space-x-2 my-8">
                            <div
                                v-for="i in 5"
                                :key="i"
                                :class="{
                                    'size-2.5 rounded-full': true,
                                    'bg-gray-400': i > step,
                                    'bg-primary': i <= step,
                                }"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>
