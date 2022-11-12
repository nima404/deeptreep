<template>
  <div>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th>#</th>
          <th>first name</th>
          <th>last name</th>
          <th>main test result</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.results" :key="user.id" class="text-center">
          <td>{{ user.id }}</td>
          <td v-if="first_name == null">-</td>
          <td v-else>{{ user.first_name }}</td>
          <td v-if="last_name == null">-</td>
          <td v-else>{{ user.last_name }}</td>
          <td v-if="last_name == null">-</td>
          <td v-else>{{ user.main_test_results }}</td>
          <td>
            <nuxt-link :to="`tiket/${user.id}`" class="btn btn-success"
              >messages</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
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
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
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
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="users.previous == null && users.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
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
