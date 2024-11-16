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
