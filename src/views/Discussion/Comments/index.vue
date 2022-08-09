<template>
  <LayoutVue>
    <CardVue :data="discussion" />
    <div class="bg-white p-6 rounded-xl h-58 flex justify-between flex-col">
      <QuillEditor class="sm:h-28 h-12" theme="snow" toolbar="essential" />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
      >
        Post
      </button>
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
import { useRoute } from "vue-router";
import CardVue from "../Card.vue";

export default {
  name: "CommentsVue",
  components: {
    QuillEditor,
    LayoutVue,
    CommentVue,
    CardVue,
  },
  data() {
    return {
      data: null,
      id: null,
      discussion: null,
    };
  },
  async mounted() {
    const id = useRoute();
    this.id = id.params.id;
    const comment = await axiosGet(`comments/${this.id}`);
    this.data = comment;

    const discussion = await axiosGet(`posts/${this.id}`);
    this.discussion = discussion;
  },
};
</script>

<style></style>
