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
import axios from "axios";

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
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    this.data = data;
  },
};
</script>

<style></style>
