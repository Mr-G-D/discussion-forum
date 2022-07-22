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
            class="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center"
          >
            <div class="rounded-full w-16">
              <img :src="getImageUrl()" class="rounded-full" alt="avatar" />
            </div>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ data?.user.username }}
            </h2>
            <p class="leading-relaxed">
              {{ data?.body }}
            </p>
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
export default {
  name: "CardVue",
  props: ["data"],
  methods: {
    getImageUrl() {
      const path = "https://i.pravatar.cc/300/img=" + this.data?.user.id;
      return path;
    },
  },
};
</script>

<style></style>
