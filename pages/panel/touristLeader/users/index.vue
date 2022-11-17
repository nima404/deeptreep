<template>
  <div>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-lg-4"
        v-for="user in users.results"
        :key="user.id"
      >
        <div class="card mb-3">
          <img
            :src="user.image || '/default.jpg'"
            class="card-img-top"
            alt="profile"
          />
          <div class="card-body text-center">
            <h5 class="card-title">
              {{ user.first_name || "" }}
              {{ user.last_name || "" }}
            </h5>
            <div class="card-text">
              test: {{ user.main_test_results || "-" }}
            </div>
            <nuxt-link :to="`tiket/${user.id}`" class="btn btn-primary w-100"
              >messages</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="users.previous != null && users.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(users.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(users.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="users.previous == null && users.next == null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="users.previous != null && users.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(users.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="users.previous == null && users.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(users.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  layout: "touristLeader",
  async asyncData({ $axios }) {
    const users = await $axios.$get(`/api/toursLeaders/users-a1/`);
    return {
      users,
    };
  },
  methods: {
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.users = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
