<template>
  <LayoutVue>
    <!-- <QuillEditor class="bg-white" theme="snow" toolbar="full" /> -->
    <CardVue />
  </LayoutVue>
</template>

<script>
import LayoutVue from "../../Layouts";
// import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import CardVue from "./Card.vue";

export default {
  name: "DiscussionVue",
  components: {
    LayoutVue,
    // QuillEditor,
    CardVue,
  },
};
</script>

<style></style>
