<template>
  <div class="h-100 shadow">
    <ul
      class="d-flex flex-column p-0 vh-100 w-100 text-dark"
      style="position: sticky; top: 0px"
    >
      <li class="text-center py-3 border-bottom bgmain text-light">
        <h3 class="h6">
          <nuxt-link to="/" class="text-white">DEEP TREEP</nuxt-link>
        </h3>
      </li>

      <nuxt-link
        to="/panel/tourist/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/tests"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-regular fa-tent"></i>
        </span>
        <span class="ms-1">tests</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/tiket"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-regular fa-ticket"></i>
        </span>
        <span class="ms-1"
          >request travel itinerary</span
        >
      </nuxt-link>
      <nuxt-link
        to="/panel/tourist/tours"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plane"></i>
        </span>
        <span class="ms-1">my tours</span>
      </nuxt-link>
      <button
        class="py-2 px-4 w-100 right-to-left-animation border-0 border-bottom text-left bg-transparent"
        @click="onSignOut"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-sign-out"></i>
        </span>
        <span class="ms-1 text-danger">sign out</span>
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
span {
  color: black !important;
}
span.text-danger {
  color: #dc3545 !important;
}
</style>
