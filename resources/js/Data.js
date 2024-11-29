import { markRaw } from "vue";
import CustomerNewJobs from "./pages/dashboard/customer/CustomerNewJobs.vue";
import CustomerQuoted from "./pages/dashboard/customer/CustomerQuoted.vue";
import CustomerCompleted from "./pages/dashboard/customer/CustomerCompleted.vue";
import CustomerInbox from "./pages/dashboard/customer/CustomerInbox.vue";
import CustomerSettings from "./pages/dashboard/customer/CustomerSettings.vue";
import CustomerInProgress from "./pages/dashboard/customer/CustomerInProgress.vue";

import BusinessLeads from "./pages/dashboard/business/BusinessLeads.vue";
import BusinessQuoted from "./pages/dashboard/business/BusinessQuoted.vue";
import BusinessInProgress from "./pages/dashboard/business/BusinessInProgress.vue";
import BusinessInbox from "./pages/dashboard/business/BusinessInbox.vue";
import BusinessCompleted from "./pages/dashboard/business/BusinessCompleted.vue";
import BusinessSettings from "./pages/dashboard/business/BusinessSettings.vue";

import AdminCustomers from "./pages/dashboard/admin/AdminCustomers.vue";
import AdminBusinesses from "./pages/dashboard/admin/AdminBusinesses.vue";
import AdminWorkCategories from "./pages/dashboard/admin/AdminWorkCategories.vue";
import AdminReviews from "./pages/dashboard/admin/AdminReviews.vue";
import AdminJobs from "./pages/dashboard/admin/AdminJobs.vue";
import AdminSettings from "./pages/dashboard/admin/AdminSettings.vue";

export const customerTabs = [
    {
        title: "New Jobs",
        icon: "mdi:briefcase-outline",
        content: markRaw(CustomerNewJobs),
    },
    {
        title: "Quoted",
        icon: "mdi:file-document-outline",
        content: markRaw(CustomerQuoted),
    },

    {
        title: "Inbox",
        icon: "mdi:email-outline",
        content: markRaw(CustomerInbox),
    },
    {
        title: "In Progress",
        icon: "mdi:progress-check",
        content: markRaw(CustomerInProgress),
    },
    {
        title: "Completed",
        icon: "mdi:check-circle-outline",
        content: markRaw(CustomerCompleted),
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(CustomerSettings),
    },
];

export const businessTabs = [
    {
        title: "Leads",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessLeads),
    },
    {
        title: "Quoted",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessQuoted),
    },
    {
        title: "In Progress",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessInProgress),
    },
    {
        title: "Completed",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessCompleted),
    },
    {
        title: "Inbox",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessInbox),
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessSettings),
    },
];
export const adminTabs = [
    {
        title: "Customers",
        icon: "mdi:cog-outline",
        content: markRaw(AdminCustomers),
    },
    {
        title: "Businesses",
        icon: "mdi:cog-outline",
        content: markRaw(AdminBusinesses),
    },
    {
        title: "Jobs",
        icon: "mdi:cog-outline",
        content: markRaw(AdminJobs),
    },
    {
        title: "Work Categories",
        icon: "mdi:cog-outline",
        content: markRaw(AdminWorkCategories),
    },
    {
        title: "Reviews",
        icon: "mdi:cog-outline",
        content: markRaw(AdminReviews),
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(AdminSettings),
    },
];

// messages.js

export const messages = [
    {
        id: 1,
        sender: "John Doe",
        subject: "Meeting Follow-Up",
        snippet: "Can you send me the minutes of the meeting?",
        time: "10:30 AM",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "John",
                text: "Hi, did you prepare the minutes for the meeting?",
                time: "10:20 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Standing by the door to the church car park, where the displaced have pitched tents, Ibrahim Termos, 25, radiated joy when asked about the ceasefire on Wednesday. Around him, people were packing up their tents and belongings as they prepared for the journey back home.Its not about just a ceasefire but that we won a ceasefire, Termos said, smiling. He lost his home in this war, but the fact the nightmare of the past two months is over has him focusing on the positive. Our apartment was destroyed, but the building is still standing, Termos said.",
                time: "10:25 AM",
            },
            {
                id: 3,
                sender: "John",
                text: "Thanks! That would be helpful.",
                time: "10:27 AM",
            },
            {
                id: 4,
                sender: "You",
                text: "No problem, I'll email them to you in a bit.",
                time: "10:30 AM",
            },
            {
                id: 5,
                sender: "John",
                text: "Do you think it’ll be ready by noon?",
                time: "10:32 AM",
            },
            {
                id: 6,
                sender: "You",
                text: "Yes, I’m almost done with it.",
                time: "10:35 AM",
            },
            {
                id: 7,
                sender: "John",
                text: "Great, I need to send it to the client before 1 PM.",
                time: "10:40 AM",
            },
            {
                id: 8,
                sender: "You",
                text: "Understood, I'll make sure it’s in your inbox shortly.",
                time: "10:42 AM",
            },
            {
                id: 9,
                sender: "John",
                text: "Perfect, I appreciate it.",
                time: "10:45 AM",
            },
            {
                id: 10,
                sender: "You",
                text: "You're welcome! Let me know if you need anything else.",
                time: "10:47 AM",
            },
            {
                id: 11,
                sender: "John",
                text: "Could you also send me the presentation slides from last week’s meeting?",
                time: "10:50 AM",
            },
            {
                id: 12,
                sender: "You",
                text: "Sure! I'll attach them to the same email.",
                time: "10:52 AM",
            },
            {
                id: 13,
                sender: "John",
                text: "Thanks, that would be great.",
                time: "10:55 AM",
            },
            {
                id: 14,
                sender: "You",
                text: "No problem, I’ll take care of it.",
                time: "10:57 AM",
            },
            {
                id: 15,
                sender: "John",
                text: "By the way, do you have any updates on the project timeline?",
                time: "11:00 AM",
            },
            {
                id: 16,
                sender: "You",
                text: "Yes, I spoke to the team earlier. We're on track to finish by next Friday.",
                time: "11:05 AM",
            },
            {
                id: 17,
                sender: "John",
                text: "That’s good news. I was getting a bit concerned about the deadline.",
                time: "11:10 AM",
            },
            {
                id: 18,
                sender: "You",
                text: "I understand, but we're moving along smoothly. No issues so far.",
                time: "11:12 AM",
            },
            {
                id: 19,
                sender: "John",
                text: "Awesome, I’m relieved to hear that.",
                time: "11:15 AM",
            },
            {
                id: 20,
                sender: "You",
                text: "Glad to ease your mind. I’ll keep you updated if anything changes.",
                time: "11:17 AM",
            },
            {
                id: 21,
                sender: "John",
                text: "Thanks! You always keep me in the loop, which is much appreciated.",
                time: "11:20 AM",
            },
            {
                id: 22,
                sender: "You",
                text: "It’s my pleasure! I believe communication is key to staying ahead.",
                time: "11:22 AM",
            },
            {
                id: 23,
                sender: "John",
                text: "Absolutely. Speaking of which, we need to schedule the next meeting. Any availability next week?",
                time: "11:25 AM",
            },
            {
                id: 24,
                sender: "You",
                text: "Next week is fine for me. I’m free on Tuesday and Thursday afternoon.",
                time: "11:27 AM",
            },
            {
                id: 25,
                sender: "John",
                text: "Thursday works better for me. Let’s book it for 2 PM.",
                time: "11:30 AM",
            },
            {
                id: 26,
                sender: "You",
                text: "Sounds good. I’ll send out the invite now.",
                time: "11:32 AM",
            },
            {
                id: 27,
                sender: "John",
                text: "Great, I’ll look for it in my inbox.",
                time: "11:35 AM",
            },
            {
                id: 28,
                sender: "You",
                text: "It should be there in a couple of minutes.",
                time: "11:37 AM",
            },
            {
                id: 29,
                sender: "John",
                text: "I’ve received it! Thanks for handling that.",
                time: "11:40 AM",
            },
            {
                id: 30,
                sender: "You",
                text: "Anytime! Glad I could help.",
                time: "11:42 AM",
            },
            {
                id: 31,
                sender: "John",
                text: "One more thing, have we finalized the budget for next quarter?",
                time: "11:45 AM",
            },
            {
                id: 32,
                sender: "You",
                text: "Not yet, I’m waiting for approval from finance. I’ll follow up today.",
                time: "11:47 AM",
            },
            {
                id: 33,
                sender: "John",
                text: "Thanks, it would be good to get that finalized soon.",
                time: "11:50 AM",
            },
            {
                id: 34,
                sender: "You",
                text: "I agree. I’ll make sure to chase them up after lunch.",
                time: "11:52 AM",
            },
            {
                id: 35,
                sender: "John",
                text: "Thanks, I appreciate the urgency on this.",
                time: "11:55 AM",
            },
            {
                id: 36,
                sender: "You",
                text: "Of course, I understand the importance of getting this sorted out quickly.",
                time: "11:57 AM",
            },
            {
                id: 37,
                sender: "John",
                text: "I’m sure we’ll have it resolved by the end of the week.",
                time: "12:00 PM",
            },
            {
                id: 38,
                sender: "You",
                text: "That’s the plan. I’ll keep you updated if I hear anything from them.",
                time: "12:02 PM",
            },
            {
                id: 39,
                sender: "John",
                text: "Thanks! I’ll also prepare a backup plan just in case.",
                time: "12:05 PM",
            },
            {
                id: 40,
                sender: "You",
                text: "Good idea! It never hurts to be prepared for any scenario.",
                time: "12:07 PM",
            },
            {
                id: 41,
                sender: "John",
                text: "Agreed! I’ll send you the draft of the backup plan later today.",
                time: "12:10 PM",
            },
            {
                id: 42,
                sender: "You",
                text: "I’ll review it as soon as I get it.",
                time: "12:12 PM",
            },
            {
                id: 43,
                sender: "John",
                text: "Perfect, looking forward to hearing your thoughts.",
                time: "12:15 PM",
            },
            {
                id: 44,
                sender: "You",
                text: "I’ll get back to you after my review. It shouldn’t take long.",
                time: "12:17 PM",
            },
            {
                id: 45,
                sender: "John",
                text: "Sounds good. I’ll be here if you need anything.",
                time: "12:20 PM",
            },
            {
                id: 46,
                sender: "You",
                text: "Thanks, I’ll reach out if I have any questions while reviewing.",
                time: "12:22 PM",
            },
            {
                id: 47,
                sender: "John",
                text: "I’m sure everything will be in order, but feel free to ping me if needed.",
                time: "12:25 PM",
            },
            {
                id: 48,
                sender: "You",
                text: "Will do! I’ll aim to finish up the review this afternoon.",
                time: "12:27 PM",
            },
            {
                id: 49,
                sender: "John",
                text: "Great! Let me know if you need an extension on the review.",
                time: "12:30 PM",
            },
            {
                id: 50,
                sender: "You",
                text: "I should be able to complete it today. I’ll update you once I’ve finished.",
                time: "12:32 PM",
            },
        ],
    },
    {
        id: 2,
        sender: "Jane Smith",
        subject: "Project Update",
        // snippet: "The project is on track. I'll send a full report soon.",
        snippet:
            "The project is on track. I'll send a full report soon. The project is on track. I'll send a full report soon. I'll send a full report soon. The project is on track. I'll send a full report soon.",
        time: "Yesterday",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "Jane",
                text: "The project is progressing as planned.",
                time: "9:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Great! Let me know if you need any help.",
                time: "9:10 AM",
            },
            {
                id: 3,
                sender: "Jane",
                text: "Standing by the door to the church car park, where the displaced have pitched tents, Ibrahim Termos, 25, radiated joy when asked about the ceasefire on Wednesday. Around him, people were packing up their tents and belongings as they prepared for the journey back home.Its not about just a ceasefire but that we won a ceasefire, Termos said, smiling. He lost his home in this war, but the fact the nightmare of the past two months is over has him focusing on the positive. Our apartment was destroyed, but the building is still standing, Termos said.",
                time: "9:20 AM",
            },
        ],
    },
    {
        id: 3,
        sender: "Michael Johnson",
        subject: "Invoice Issue",
        snippet: "There seems to be an error in the invoice total.",
        time: "Monday",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "Michael",
                text: "The invoice total doesn’t match the breakdown.",
                time: "3:00 PM",
            },
            {
                id: 2,
                sender: "You",
                text: "Let me double-check and get back to you.",
                time: "3:05 PM",
            },
            {
                id: 3,
                sender: "Michael",
                text: "Appreciate it. Thanks for looking into this.",
                time: "3:10 PM",
            },
            {
                id: 4,
                sender: "You",
                text: "It looks like there was a mistake on our end. I’ll send the corrected version shortly.",
                time: "3:15 PM",
            },
        ],
    },
    {
        id: 4,
        sender: "Emily Davis",
        subject: "Quick Question",
        snippet: "Do we have a backup plan for tomorrow's meeting?",
        time: "9:15 AM",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "Emily",
                text: "Do we have a backup plan for tomorrow’s meeting in case something goes wrong?",
                time: "9:10 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Yes, I’ve got the backup plan ready. I’ll go over it with the team beforehand.",
                time: "9:12 AM",
            },
            {
                id: 3,
                sender: "Emily",
                text: "Great! Let me know if you need any assistance with it.",
                time: "9:14 AM",
            },
        ],
    },
    {
        id: 5,
        sender: "William Brown",
        subject: "Team Outing",
        snippet: "What dates work for everyone for the outing?",
        time: "Last Week",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "William",
                text: "What dates work for everyone for the team outing?",
                time: "10:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "I’m good for next Friday. What do others think?",
                time: "10:05 AM",
            },
            {
                id: 3,
                sender: "William",
                text: "Sounds good. I’ll send out a poll to confirm.",
                time: "10:07 AM",
            },
            {
                id: 4,
                sender: "You",
                text: "Awesome! Looking forward to it.",
                time: "10:10 AM",
            },
        ],
    },
    {
        id: 6,
        sender: "Sophia Wilson",
        subject: "New Opportunity",
        snippet: "I found a new opportunity you might find interesting.",
        time: "5:45 PM",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "Sophia",
                text: "I found a new opportunity that you might find interesting. Let me know if you want details!",
                time: "5:40 PM",
            },
            {
                id: 2,
                sender: "You",
                text: "That sounds intriguing! Can you send me more info?",
                time: "5:45 PM",
            },
            {
                id: 3,
                sender: "Sophia",
                text: "I’ll email you the details tonight. Check your inbox.",
                time: "5:50 PM",
            },
        ],
    },
    {
        id: 7,
        sender: "James Garcia",
        subject: "Contract Details",
        snippet: "Please review the attached contract and let me know.",
        time: "3:20 PM",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "James",
                text: "Please review the attached contract and let me know if you have any feedback.",
                time: "3:15 PM",
            },
            {
                id: 2,
                sender: "You",
                text: "I’ll look over it now and get back to you by the end of the day.",
                time: "3:25 PM",
            },
            {
                id: 3,
                sender: "James",
                text: "Thanks! I appreciate it.",
                time: "3:30 PM",
            },
        ],
    },
    {
        id: 8,
        sender: "Olivia Martinez",
        subject: "Event Confirmation",
        snippet: "Confirming your attendance at the upcoming event.",
        time: "11:00 AM",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "Olivia",
                text: "Can you confirm your attendance at the upcoming event?",
                time: "11:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Yes, I’ll be there. Looking forward to it!",
                time: "11:05 AM",
            },
            {
                id: 3,
                sender: "Olivia",
                text: "Great! See you there!",
                time: "11:10 AM",
            },
        ],
    },
    {
        id: 9,
        sender: "Benjamin Lee",
        subject: "Client Feedback",
        snippet: "Here's the feedback from our recent client meeting.",
        time: "2 days ago",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "Benjamin",
                text: "Here’s the feedback from our recent client meeting. Please review.",
                time: "9:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Got it, I’ll review it and send back any thoughts.",
                time: "9:15 AM",
            },
            {
                id: 3,
                sender: "Benjamin",
                text: "Thanks for your quick response!",
                time: "9:20 AM",
            },
        ],
    },
    {
        id: 10,
        sender: "Emma Taylor",
        subject: "Reminder",
        snippet: "Don't forget about the deadline tomorrow.",
        time: "1 hour ago",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "Emma",
                text: "Just a quick reminder about the deadline tomorrow!",
                time: "10:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "Thanks for the reminder, I’m on it.",
                time: "10:05 AM",
            },
        ],
    },
    {
        id: 11,
        sender: "Daniel Anderson",
        subject: "Budget Approval",
        snippet: "Has the budget for Q4 been approved yet?",
        time: "Last Month",
        read: true,
        conversation: [
            {
                id: 1,
                sender: "Daniel",
                text: "Has the budget for Q4 been approved yet?",
                time: "2:00 PM",
            },
            {
                id: 2,
                sender: "You",
                text: "Not yet, but I expect an update this week.",
                time: "2:05 PM",
            },
            {
                id: 3,
                sender: "Daniel",
                text: "Thanks! I’ll keep an eye out for it.",
                time: "2:10 PM",
            },
        ],
    },
    {
        id: 12,
        sender: "Ava Thomas",
        subject: "Weekly Update",
        snippet: "Here's a summary of what we achieved this week.",
        time: "8:00 AM",
        read: false,
        conversation: [
            {
                id: 1,
                sender: "Ava",
                text: "Here’s the summary of what we achieved this week. Let me know if you have any feedback.",
                time: "8:00 AM",
            },
            {
                id: 2,
                sender: "You",
                text: "I’ll go over it and get back to you soon.",
                time: "8:10 AM",
            },
            {
                id: 3,
                sender: "Ava",
                text: "Looking forward to your thoughts!",
                time: "8:15 AM",
            },
        ],
    },
];
