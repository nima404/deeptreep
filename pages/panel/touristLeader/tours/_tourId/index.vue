<template>
  <div>
    <div
      class="row rounded border m-0"
      v-for="tour in detail.results"
      :key="tour.id"
    >
      <div class="col-2 d-flex align-items-center">
        <img :src="tour.image" class="col-12" alt="" />
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'English'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_en }}</h4>
        </div>
        <h4>city: {{ tour.city_en }}</h4>
        <div>{{ tour.descriptions_en }}</div>
        <div>services: {{ tour.services_en }}</div>
        <div>transportation: {{ tour.transportation_en }}</div>
        <div>level: {{ tour.level_en }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'German'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_gr }}</h4>
        </div>
        <h4>city: {{ tour.city_gr }}</h4>
        <div>{{ tour.descriptions_gr }}</div>
        <div>services: {{ tour.services_gr }}</div>
        <div>transportation: {{ tour.transportation_gr }}</div>
        <div>level: {{ tour.level_gr }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'Farsi'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_fa }}</h4>
        </div>
        <h4>city: {{ tour.city_fa }}</h4>
        <div>{{ tour.descriptions_fa }}</div>
        <div>services: {{ tour.services_fa }}</div>
        <div>transportation: {{ tour.transportation_fa }}</div>
        <div>level: {{ tour.level_fa }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'Chines'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_ch }}</h4>
        </div>
        <h4>city: {{ tour.city_ch }}</h4>
        <div>{{ tour.descriptions_ch }}</div>
        <div>services: {{ tour.services_ch }}</div>
        <div>transportation: {{ tour.transportation_ch }}</div>
        <div>level: {{ tour.level_ch }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'Spanish'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_sp }}</h4>
        </div>
        <h4>city: {{ tour.city_sp }}</h4>
        <div>{{ tour.descriptions_sp }}</div>
        <div>services: {{ tour.services_sp }}</div>
        <div>transportation: {{ tour.transportation_sp }}</div>
        <div>level: {{ tour.level_sp }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'Arabic'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_ar }}</h4>
        </div>
        <h4>city: {{ tour.city_ar }}</h4>
        <div>{{ tour.descriptions_ar }}</div>
        <div>services: {{ tour.services_ar }}</div>
        <div>transportation: {{ tour.transportation_ar }}</div>
        <div>level: {{ tour.level_ar }}</div>
        <div class="row">
          <div class="col-4">capacity: {{ tour.capacity }}</div>
          <div class="col-4">duration: {{ tour.duration }}</div>
          <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tourist in detail.results[0].tourists" :key="tourist">
          <td>{{ tourist }}</td>
          <td>
            <button
              class="btn btn-danger"
              @click="deleteTourist(parseInt(tourist))"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>add tourist:</div>
    <input type="number" class="col-12" v-model="tourist" />
    <button class="btn btn-success mt-3" @click="add">add</button>
  </div>
</template>

<script>
export default {
  name: "tourId",
  layout: "touristLeader",
  data() {
    return {
      tourist: 0,
    };
  },
  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(
      `/api/toursLeaders/tour-detail/${params.tourId}/`
    );
    return {
      detail,
    };
  },
  methods: {
    async deleteTourist(id) {
      try {
        const res = await this.$axios.delete(
          `/api/toursLeaders/tour-delete-tourist/${this.$route.params.tourId}/`,
          {
            tourist: id,
          }
        );
        console.log(res);
        this.$router.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async add() {
      try {
        const res = await this.$axios.post(
          `api/toursLeaders/tour-add-tourist/${this.$route.params.tourId}/`,
          {
            tourist: this.tourist,
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
