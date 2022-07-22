<template>
  <LayoutVue>
    <!-- <QuillEditor class="bg-white" theme="snow" toolbar="full" /> -->
    <div v-for="element in data" :key="element.id">
      <CardVue :data="element" />
    </div>
  </LayoutVue>
</template>

<script>
import LayoutVue from "../../Layouts";
// import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import CardVue from "./Card.vue";
import { axiosGet } from "../../api";

export default {
  name: "DiscussionVue",
  components: {
    LayoutVue,
    // QuillEditor,
    CardVue,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const { posts } = await axiosGet("posts");
    this.data = posts;
  },
};
</script>

<style></style>
