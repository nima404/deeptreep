<template>
  <div>
    <div class="col-12">
      <nuxt-link to="tiket/create-tiket" class="btn btn-success mb-3"
        >create tiket</nuxt-link
      >
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>date</th>
          <th>tourist</th>
          <th>tourleader</th>
          <th>message</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tiket in tikets.results" :key="tiket.id">
          <td>{{ tiket.id }}</td>
          <td>{{ tiket.date.split("T")[0] }}</td>
          <td>{{ tiket.tourist }}</td>
          <td>{{ tiket.tourleader }}</td>
          <td>
            <nuxt-link :to="`tiket/${tiket.id}`" class="btn btn-success"
              >messages</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous != null && tikets.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tikets.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tikets.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous == null && tikets.next == null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous != null && tikets.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tikets.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous == null && tikets.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tikets.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tiket",
  layout: "touristLeader",
  async asyncData({ $axios, params }) {
    const tikets = await $axios.$get(`/api/toursLeaders/tikets/`);
    return {
      tikets,
    };
  },
  methods: {
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.tikets = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
