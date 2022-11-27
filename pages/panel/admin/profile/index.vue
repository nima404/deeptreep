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
            <p class="bg-light rounded py-1 px-3">
              email : <span class="text-primary">{{ user.email }} </span>
            </p>
            <p class="bg-light rounded py-1 px-3">
              gander : <span class="text-primary">{{ user.gender }} </span>
            </p>
            <p class="bg-light rounded py-1 px-3">
              wallet : <span class="text-primary">{{ user.wallet }} </span>
            </p>
            <p class="bg-light rounded py-1 px-3">
              role : <span class="text-primary">{{ user.role }} </span>
            </p>
            <p class="bg-light rounded py-1 px-3">
              address : <span class="text-primary">{{ user.address }} </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link class="btn btn-info w-100 mt-2" to="/panel/admin/profile/edit"
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
