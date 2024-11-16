<template>
    <div class="flex flex-col p-2">
        <h3 class="text-2xl font-bold mb-4">Privacy</h3>
        <div class="mb-4 w-1/2">
            <label for="current-password" class="font-semibold ml-1"
                >Current Password</label
            >
            <IconField>
                <InputIcon class="pi pi-lock" />
                <InputText
                    id="current-password"
                    placeholder="********"
                    class="w-full"
                    type="password"
                />
            </IconField>
        </div>
        <div class="mb-4 w-1/2">
            <label for="new-password" class="font-semibold ml-1"
                >New Password</label
            >
            <IconField>
                <InputIcon class="pi pi-lock" />
                <InputText
                    id="new-password"
                    placeholder="********"
                    class="w-full"
                    type="password"
                />
            </IconField>
        </div>
        <div class="mb-4 w-1/2">
            <label for="new2-password" class="font-semibold ml-1"
                >Confirm Password</label
            >
            <IconField>
                <InputIcon class="pi pi-lock" />
                <InputText
                    id="new2-password"
                    placeholder="********"
                    class="w-full"
                    type="password"
                />
            </IconField>
        </div>
        <div class="flex items-center justify-between py-2">
            <Button label="Update Password" icon="pi pi-pencil" class="w-fit" />
            <!-- Delete Account Button -->
            <Button
                label="Delete Account"
                severity="danger"
                class="w-fit"
                icon="pi pi-trash"
            />
        </div>
    </div>
</template>
