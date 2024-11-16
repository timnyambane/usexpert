<template>
    <div class="flex flex-col flex-1 p-2">
        <h2 class="text-2xl font-bold mb-4">Notifications</h2>
        <div class="flex flex-col px-2">
            <div class="flex justify-between items-center py-2">
                <label for="push-email-notifications"
                    >Push Email Notifications</label
                >
                <ToggleSwitch id="push-email-notifications" />
            </div>
            <div class="flex justify-between items-center py-2">
                <label for="push-sms-notifications"
                    >Push SMS Notifications</label
                >
                <ToggleSwitch id="push-sms-notifications" />
            </div>

            <div class="grid grid-cols-2 gap-4 my-8">
                <div class="flex items-center gap-2">
                    <Checkbox
                        inputId="messages"
                        name="messages"
                        value="messages"
                    />
                    <label for="messages">Messages</label>
                </div>
                <div class="flex items-center gap-2">
                    <Checkbox
                        inputId="special_offers"
                        name="special_offers"
                        value="special_offers"
                    />
                    <label for="special_offers">Special Offers</label>
                </div>
                <div class="flex items-center gap-2">
                    <Checkbox
                        inputId="newsletter"
                        name="newsletter"
                        value="newsletter"
                    />
                    <label for="newsletter">Newsletter</label>
                </div>
                <div class="flex items-center gap-2">
                    <Checkbox
                        inputId="recommendations"
                        name="recommendations"
                        value="recommendations"
                    />
                    <label for="recommendations">Recommendations</label>
                </div>
            </div>
        </div>
    </div>
</template>
