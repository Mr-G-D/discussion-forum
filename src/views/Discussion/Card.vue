<template>
  <section
    v-if="data"
    class="text-gray-600 body-font overflow-hidden bg-white rounded-xl my-8"
  >
    <div class="container px-5 py-11 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div
          class="py-8 flex flex-wrap md:flex-nowrap text-center md:text-left justify-center"
        >
          <div
            class="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center m-3"
          >
            <div class="rounded-full w-16">
              <img :src="getImageUrl()" class="rounded-full" alt="avatar" />
            </div>

            <span class="mt-1 text-gray-500 text-sm whitespace-nowrap">{{
              name
            }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ data?.title }}
            </h2>
            <p class="leading-relaxed">
              {{ data?.body }}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4"
              >Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    v-else
    class="text-gray-600 body-font overflow-hidden bg-white rounded-xl my-8"
  >
    <div class="animate-pulse flex space-x-4 container px-5 py-11 mx-auto">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="rounded-full bg-slate-200"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { axiosGet } from "@/api";
export default {
  name: "CardVue",
  props: ["data"],
  data() {
    return {
      name: null,
    };
  },
  async mounted() {
    const { firstName, lastName } = await axiosGet(
      "users/" + this.data?.userId,
    );
    this.name = firstName + " " + lastName;
  },
  methods: {
    getImageUrl() {
      const path = "https://i.pravatar.cc/300/img=" + this.data?.userId;
      return path;
    },
  },
};
</script>

<style></style>
