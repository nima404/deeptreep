<template>
  <div>
    <div class="col-12">
      <nuxt-link to="tiket/create-tiket" class="btn btn-success mb-3"
        >create tiket</nuxt-link
      >
    </div>
    <div
      class="card mb-2 border-0"
      v-for="tiket in tikets.results"
      :key="tiket.id"
    >
      <nuxt-link
        :to="`tiket/${tiket.id}`"
        class="d-flex justify-content-center align-items-center text-dark"
      >
        <img
          src="/default.jpg"
          alt="profile"
          class="rounded-circle img-thumbnail manage-image-size"
        />
        <div class="card-body">
          <h5 class="card-title ml-4">
            {{ tiket.tourist_info[0].first_name || "" }}
            {{ tiket.tourist_info[0].last_name || "" }}
          </h5>
        </div>
      </nuxt-link>
    </div>

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
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
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
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous == null && tikets.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
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

<style>
.manage-image-size {
  width: 80px;
  height: 80px;
}
</style>
