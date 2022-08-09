<template>
  <LayoutVue>
    <div class="relative mr-6 my-2">
      <input
        v-model="search"
        type="search"
        class="bg-purple-white shadow rounded border-0 p-3"
        placeholder="Search 🔎"
      />
      <div class="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
    </div>
    <div v-for="element in filteredPosts" :key="element.id">
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
      search: "",
      data: null,
    };
  },
  async created() {
    const { posts } = await axiosGet("posts");
    this.data = posts;
  },

  computed: {
    filteredPosts() {
      return this.data?.filter((data) => {
        return (
          data.body.toLowerCase().includes(this.search.toLowerCase()) ||
          data.title.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style></style>
