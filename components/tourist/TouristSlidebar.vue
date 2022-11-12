<template>
  <div class="text-light bgmain h-100">
    <ul class="d-flex flex-column p-0 w-100">
      <li
        class="text-center py-3 border-bottom"
        style="background-color: black"
      >
        <h3>DEEP TREEP</h3>
      </li>
      <nuxt-link
        to="/panel/tourist/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/tours"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plane"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">my tours</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/tiket"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-regular fa-ticket"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">tikets</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/test"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-regular fa-tent"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">test</span>
      </nuxt-link>
      <button
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
        @click="onSignOut"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-sign-out"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">sign out</span>
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "touristSidebarSection",

  data() {
    return {};
  },

  methods: {
    async onSignOut() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped>
li,
span {
  color: white !important;
}
</style>
