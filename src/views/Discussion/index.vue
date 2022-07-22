<template>
  <HeaderVue />
  <QuillEditor theme="snow" toolbar="full" />
</template>

<script>
import HeaderVue from "../../Layouts/Header.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "DiscussionVue",
  components: {
    HeaderVue,
    QuillEditor,
  },
};
</script>

<style></style>
