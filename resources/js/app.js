import "./bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import Aura from "@/assets/aura";
import PrimeVue from "primevue/config";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import "primeicons/primeicons.css";

import { Icon } from "@iconify/vue";

const appName = import.meta.env.VITE_APP_NAME;

import Button from "primevue/button";
import DatePicker from "primevue/datepicker";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import Fluid from "primevue/fluid";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Select from "primevue/select";
import InputNumber from "primevue/inputnumber";
import InputMask from "primevue/inputmask";
import MultiSelect from "primevue/multiselect";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
        return pages[`./pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                unstyled: true,
                pt: Aura,
            })

            .component("Icon", Icon)

            .component("Button", Button)
            .component("DatePicker", DatePicker)
            .component("Divider", Divider)
            .component("InputText", InputText)
            .component("Checkbox", Checkbox)
            .component("Stepper", Stepper)
            .component("Step", Step)
            .component("StepList", StepList)
            .component("StepPanels", StepPanels)
            .component("StepPanel", StepPanel)
            .component("StepItem", StepItem)
            .component("Fluid", Fluid)
            .component("FloatLabel", FloatLabel)
            .component("IconField", IconField)
            .component("InputIcon", InputIcon)
            .component("Select", Select)
            .component("InputNumber", InputNumber)
            .component("InputMask", InputMask)
            .component("MultiSelect", MultiSelect)

            .mount(el);
    },
});
