import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { QuillEditor } from "@vueup/vue-quill";

createApp(App).use(router).use(QuillEditor).mount("#app");
