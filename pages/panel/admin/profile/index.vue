<template>
  <div>
    <img class="col-3" :src="user.image" />
    <table class="table">
      <tr>
        <td class="col-12">id:</td>
        <td class="col-12">{{ user.id }}</td>
      </tr>
      <tr>
        <td class="col-12">wallet:</td>
        <td class="col-12">{{ user.wallet }}</td>
      </tr>
      <tr>
        <td class="col-12">first name:</td>
        <td class="col-12">{{ user.first_name }}</td>
      </tr>
      <tr>
        <td class="col-12">last name:</td>
        <td class="col-12">{{ user.last_name }}</td>
      </tr>
      <tr>
        <td class="col-12">gender:</td>
        <td class="col-12">{{ user.gender }}</td>
      </tr>
      <tr>
        <td class="col-12">role:</td>
        <td class="col-12">{{ user.role }}</td>
      </tr>
      <tr>
        <td class="col-12">email:</td>
        <td class="col-12">{{ user.email }}</td>
      </tr>
      <tr>
        <td class="col-12">address:</td>
        <td class="col-12">{{ user.address }}</td>
      </tr>
    </table>
    <nuxt-link class="btn btn-info" to="/panel/admin/profile/edit"
      >edit</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: "admin",

  async asyncData({ $axios }) {
    const user = await $axios.get("api/usersmodel/user-info/");
    return {
      user: user.data.results[0],
    };
  },
};
</script>

<style></style>
