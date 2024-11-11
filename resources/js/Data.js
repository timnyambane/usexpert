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
        value: 0,
    },
    {
        title: "Quoted",
        icon: "mdi:file-document-outline",
        content: markRaw(CustomerQuoted),
        value: 1,
    },
    {
        title: "In Progress",
        icon: "mdi:progress-check",
        content: markRaw(CustomerInProgress),
        value: "2",
    },
    {
        title: "Completed",
        icon: "mdi:check-circle-outline",
        content: markRaw(CustomerCompleted),
        value: 3,
    },
    {
        title: "Inbox",
        icon: "mdi:email-outline",
        content: markRaw(CustomerInbox),
        value: 4,
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(CustomerSettings),
        value: 5,
    },
];

export const businessTabs = [
    {
        title: "Leads",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessLeads),
        value: 0,
    },
    {
        title: "Quoted",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessQuoted),
        value: 1,
    },
    {
        title: "In Progress",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessInProgress),
        value: 2,
    },
    {
        title: "Completed",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessCompleted),
        value: 3,
    },
    {
        title: "Inbox",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessInbox),
        value: 4,
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(BusinessSettings),
        value: 5,
    },
];
export const adminTabs = [
    {
        title: "Customers",
        icon: "mdi:cog-outline",
        content: markRaw(AdminCustomers),
        value: 0,
    },
    {
        title: "Businesses",
        icon: "mdi:cog-outline",
        content: markRaw(AdminBusinesses),
        value: 1,
    },
    {
        title: "Jobs",
        icon: "mdi:cog-outline",
        content: markRaw(AdminJobs),
        value: 2,
    },
    {
        title: "Work Categories",
        icon: "mdi:cog-outline",
        content: markRaw(AdminWorkCategories),
        value: 3,
    },
    {
        title: "Reviews",
        icon: "mdi:cog-outline",
        content: markRaw(AdminReviews),
        value: 4,
    },
    {
        title: "Settings",
        icon: "mdi:cog-outline",
        content: markRaw(AdminSettings),
        value: 5,
    },
];
