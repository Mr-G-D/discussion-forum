<template class="flex align-middle justify-center">
  <form
    @submit="handleSubmit"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl m-10 md:m-auto flex flex-col justify-center align-middle"
  >
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="username"
      >
        Username
      </label>
      <input
        v-model="username"
        class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-6">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="password"
      >
        Password
      </label>
      <input
        v-model="password"
        class="shadow appearance-none border border-red rounded py-2 px-3 text-grey-darker mb-3"
        id="password"
        type="password"
        placeholder="******************"
      />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between flex-col md:flex-row">
      <a
        class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker m-2"
        href="#"
      >
        Forgot Password?
      </a>
      <button
        class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded m-2"
        type="submit"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (!this.username) {
        alert("Please enter username");
        return false;
      }
      if (!this.password) {
        alert("Please enter password");
        return false;
      }
      window.location.href = "/";
    },
  },
};
</script>

<style></style>
