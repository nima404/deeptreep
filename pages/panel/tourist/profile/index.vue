<template>
  <div>
    <div class="card" style="background-color: #eee">
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img
              :src="user.image || '/default.jpg'"
              class="rounded border w-100"
            />
          </div>
          <div class="col-8">
            <h1>
              {{ user.first_name }}
              {{ user.last_name }}
            </h1>
            <p>email : {{ user.email }}</p>
            <p>gander : {{ user.gender }}</p>
            <p>wallet : {{ user.wallet }}</p>
            <!-- <p>test : {{ user.main_test_result }}</p> -->
            <p>role : {{ user.role }}</p>
            <p>address : {{ user.address }}</p>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="btn btn-info w-100 mt-2" to="/panel/tourist/profile/edit"
      >edit</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: "tourist",

  async asyncData({ $axios }) {
    const user = await $axios.get("api/usersmodel/user-info/");
    return {
      user: user.data.results[0],
    };
  },
};
</script>

<style></style>
