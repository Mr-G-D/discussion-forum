<template>
  <HeaderVue />
  <div class="lg:mx-40 xl:mx-52 my-10 p-5">
    <slot />
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
export default {
  name: "LayoutVue",
  components: {
    HeaderVue,
  },
};
</script>

<style></style>
