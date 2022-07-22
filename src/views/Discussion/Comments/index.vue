<template>
  <LayoutVue>
    <div class="bg-white p-6 rounded-xl h-96">
      <QuillEditor class="h-72" theme="snow" toolbar="essential" />
    </div>
    <!-- <div v-for="element in data" :key="element.id"> -->
    <CommentVue :data="data" />
    <!-- </div> -->
  </LayoutVue>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import LayoutVue from "../../../Layouts";
import CommentVue from "./Comment.vue";
import { axiosGet } from "@/api";

export default {
  name: "CommentsVue",
  components: {
    QuillEditor,
    LayoutVue,
    CommentVue,
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const comment = await axiosGet("comments/1");
    this.data = comment;
  },
};
</script>

<style></style>
