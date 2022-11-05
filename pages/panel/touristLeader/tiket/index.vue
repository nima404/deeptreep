<template>
  <div>
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
};
</script>

<style></style>
