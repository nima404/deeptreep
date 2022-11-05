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
        to="/panel/service/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/service/categories"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-book"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">categories</span>
      </nuxt-link>
      <!-- <nuxt-link
        to="/panel/service/comments"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-comment"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">comments</span>
      </nuxt-link> -->
      <nuxt-link
        to="/panel/service/orders"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">orders</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/service/services"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-gear"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">services</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "serviceSidebarSection",

  data() {
    return {};
  },
};
</script>

<style scoped>
li,
span {
  color: white !important;
}
</style>
