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
        to="/panel/touristLeader/profile"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">profile</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/touristLeader/users"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-users"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">users</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/touristLeader/tours"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-solid fa-plane"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">tours</span>
      </nuxt-link>
      <nuxt-link
        to="/panel/touristLeader/tiket"
        class="py-2 px-4 w-100 right-to-left-animation border-bottom"
      >
        <span class="d-block d-sm-inline-block text-center">
          <i class="fa-regular fa-ticket"></i>
        </span>
        <span class="ms-1 d-none d-sm-inline-block">tikets</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "touristSidebarSection",

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
