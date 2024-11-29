<script setup>
import { ref, computed } from "vue";
import { messages as allMessages } from "../../../Data";

const messages = ref(allMessages);
const selectedMessage = ref(null);
const conversation = ref([]);
const newMessage = ref("");

function selectMessage(message) {
    selectedMessage.value = message;
    conversation.value = message.conversation || [];
}

function sendMessage() {
    if (newMessage.value.trim() !== "") {
        const newMsg = {
            id: conversation.value.length + 1,
            text: newMessage.value,
            sender: "You",
            time: "Now",
        };
        conversation.value.push(newMsg);
        newMessage.value = "";
    }
}

function truncateSnippet(snippet) {
    if (snippet.length > 40) {
        return snippet.slice(0, 40) + "...";
    }
    return snippet;
}

const isSendButtonDisabled = computed(() => {
    return newMessage.value.trim() === "" || newMessage.value === null;
});
</script>

<template>
    <div class="flex h-[75vh] overflow-hidden">
        <!-- Inbox Section -->
        <div class="max-w-md bg-gray-50 border-r overflow-y-auto relative">
            <div class="px-4 py-2 bg-gray-50 border-b top-0 sticky">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText placeholder="Search Inbox" class="w-full" />
                </IconField>
            </div>
            <div class="divide-y">
                <div
                    v-for="message in messages"
                    :key="message.id"
                    class="p-4 hover:bg-gray-100 cursor-pointer gap-2 flex justify-between items-center"
                    :class="{
                        'bg-gray-100': selectedMessage?.id === message.id,
                    }"
                    @click="selectMessage(message)"
                >
                    <div
                        class="size-14 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700"
                    >
                        {{ message.sender.charAt(0) }}
                    </div>
                    <div class="flex-1">
                        <p
                            class="font-semibold"
                            :class="{
                                'text-gray-900': !message.read,
                                'text-gray-500': message.read,
                            }"
                        >
                            {{ message.sender }}
                        </p>
                        <p class="text-sm text-gray-500">
                            {{ message.subject }}
                        </p>
                        <p
                            class="text-xs text-gray-400 text-wrap text-ellipsis"
                        >
                            {{ truncateSnippet(message.snippet) }}
                        </p>
                    </div>
                    <div class="text-xs text-gray-400">{{ message.time }}</div>
                </div>
            </div>
        </div>

        <!-- Chat Section -->
        <div class="flex-1 flex flex-col bg-gray-50 relative">
            <!-- Chat Header -->
            <div
                class="bg-white border-b px-4 py-2 flex items-center sticky top-0 z-10"
            >
                <div v-if="selectedMessage" class="flex items-center gap-3">
                    <div
                        class="size-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700"
                    >
                        {{ selectedMessage.sender.charAt(0) }}
                    </div>
                    <div>
                        <p class="font-bold">{{ selectedMessage.sender }}</p>
                        <p class="text-sm text-gray-500">
                            {{ selectedMessage.subject }}
                        </p>
                    </div>
                </div>
                <p v-else class="text-gray-500 text-center py-2 w-full">
                    Select a message to start chatting
                </p>
            </div>

            <!-- Chat Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-3 border-b">
                <div
                    v-for="msg in conversation"
                    :key="msg.id"
                    class="flex flex-col"
                >
                    <!-- Message Text -->
                    <div
                        class="inline-block px-4 py-2 rounded-lg max-w-[60%] w-auto"
                        :class="{
                            'bg-primary-400 text-white self-start':
                                msg.sender !== 'You',
                            'bg-gray-200 text-gray-700 self-end':
                                msg.sender === 'You',
                        }"
                    >
                        {{ msg.text }}
                    </div>

                    <!-- Message Time -->
                    <p
                        :class="{
                            'text-xs text-gray-400 mt-1 self-start':
                                msg.sender !== 'You',
                            'text-xs text-gray-400 mt-1 self-end':
                                msg.sender === 'You',
                        }"
                    >
                        {{ msg.time }}
                    </p>
                </div>
            </div>

            <!-- Chat Input -->
            <div
                v-if="selectedMessage"
                class="bg-white border-t p-4 gap-x-1 flex items-center sticky bottom-0 left-0 right-0 z-10"
            >
                <Button icon="pi pi-paperclip" rounded text />
                <InputText
                    type="text"
                    v-model="newMessage"
                    class="flex-1 rounded-lg px-4 py-2.5"
                    placeholder="Type a message..."
                />
                <Button
                    @click="sendMessage"
                    icon="pi pi-send"
                    :disabled="isSendButtonDisabled"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-track {
    background: transparent;
}
</style>
