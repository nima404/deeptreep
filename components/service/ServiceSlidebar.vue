<template>
  <div class="shadow h-100">
    <ul
      class="d-flex flex-column vh-100 p-0 w-100"
      style="position: sticky; top: 0px"
    >
      <li class="text-center py-3 border-bottom bgmain text-light">
        <h3 class="h6">
          <nuxt-link to="/" class="text-white">DEEP TREEP</nuxt-link>
        </h3>
      </li>
      <nuxt-link
        to="/panel/service/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/service/categories"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-book"></i>
        </span>
        <span class="ms-1">categories</span>
      </nuxt-link>
      <!-- <nuxt-link
        to="/panel/service/comments"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-comment"></i>
        </span>
        <span class="ms-1">comments</span>
      </nuxt-link> -->
      <nuxt-link
        to="/panel/service/orders"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span class="ms-1">orders</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/service/services"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-gear"></i>
        </span>
        <span class="ms-1">services</span>
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
  name: "serviceSidebarSection",

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
