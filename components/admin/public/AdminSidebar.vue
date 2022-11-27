<template>
  <div class="shadow h-100">
    <ul
      class="d-flex flex-column h-100 p-0 w-100"
      style="position: sticky; top: 0px"
    >
      <li class="text-center py-3 border-bottom bgmain text-light">
        <h3 class="h6">
          <nuxt-link to="/" class="text-white">DEEP TREEP</nuxt-link>
        </h3>
      </li>
      <nuxt-link
        to="/panel/admin/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/admin/tours"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plane"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">tours</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/admin/notification"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-bell"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">notification</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/admin/createTour"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plus"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">create tour</span>
      </nuxt-link>
      <button
        class="py-2 px-4 w-100 right-to-left-animation border-0 border-bottom text-left bg-transparent"
        @click="onSignOut"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-sign-out"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">sign out</span>
      </button>
      <!-- <nuxt-link
        to="/panel/admin/picture"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plus"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">create picture</span>
      </nuxt-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdminSidebarSection",

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
</style>
