<template>
  <LayoutVue>
    <div v-for="element in data" :key="element.id">
      <router-link :to="'discussion/' + element.id">
        <CardVue :data="element" />
      </router-link>
    </div>
  </LayoutVue>
</template>

<script>
import LayoutVue from "../../Layouts";
import CardVue from "./Card.vue";
import { axiosGet } from "../../api";

export default {
  name: "DiscussionVue",
  components: {
    LayoutVue,
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
