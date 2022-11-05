<template>
  <div class="row">
    <div class="col-4 px-2 mb-2" v-for="tour in tours.results" :key="tour.id">
      <div class="col-12 border rounded p-0">
        <img :src="tour.image" class="col-12" />
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'English'">
          <h4>country: {{ tour.country_en }}</h4>
          <h4>city: {{ tour.city_en }}</h4>
          <div class="col-12">{{ tour.descriptions_en }}</div>
          <div class="col-12">transportation: {{ tour.transportation_en }}</div>
          <div class="col-12">level: {{ tour.level_en }}</div>
          <div class="col-12">services: {{ tour.services_en }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'German'">
          <h4>country: {{ tour.country_gr }}</h4>
          <h4>city: {{ tour.city_gr }}</h4>
          <div class="col-12">{{ tour.descriptions_gr }}</div>
          <div class="col-12">transportation: {{ tour.transportation_gr }}</div>
          <div class="col-12">level: {{ tour.level_gr }}</div>
          <div class="col-12">services: {{ tour.services_gr }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'Farsi'">
          <h4>country: {{ tour.country_fa }}</h4>
          <h4>city: {{ tour.city_fa }}</h4>
          <div class="col-12">{{ tour.descriptions_fa }}</div>
          <div class="col-12">transportation: {{ tour.transportation_fa }}</div>
          <div class="col-12">level: {{ tour.level_fa }}</div>
          <div class="col-12">services: {{ tour.services_fa }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'Chines'">
          <h4>country: {{ tour.country_ch }}</h4>
          <h4>city: {{ tour.city_ch }}</h4>
          <div class="col-12">{{ tour.descriptions_ch }}</div>
          <div class="col-12">transportation: {{ tour.transportation_ch }}</div>
          <div class="col-12">level: {{ tour.level_ch }}</div>
          <div class="col-12">services: {{ tour.services_ch }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'Spanish'">
          <h4>country: {{ tour.country_sp }}</h4>
          <h4>city: {{ tour.city_sp }}</h4>
          <div class="col-12">{{ tour.descriptions_sp }}</div>
          <div class="col-12">transportation: {{ tour.transportation_sp }}</div>
          <div class="col-12">level: {{ tour.level_sp }}</div>
          <div class="col-12">services: {{ tour.services_sp }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-12 py-2" v-if="$store.state.lang.lang == 'Arabic'">
          <h4>country: {{ tour.country_ar }}</h4>
          <h4>city: {{ tour.city_ar }}</h4>
          <div class="col-12">{{ tour.descriptions_ar }}</div>
          <div class="col-12">transportation: {{ tour.transportation_ar }}</div>
          <div class="col-12">level: {{ tour.level_ar }}</div>
          <div class="col-12">services: {{ tour.services_ar }}</div>
          <div class="row">
            <div class="col-4">capacity: {{ tour.capacity }}</div>
            <div class="col-4">duration: {{ tour.duration }}</div>
            <div class="col-4">price: {{ tour.price }} {{ tour.pay_with }}</div>
          </div>
          <div class="col-12 text-center">
            <nuxt-link
              :to="`/panel/touristLeader/tours/${tour.id}`"
              class="button px-3 pb-1"
              >more</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tours.previous != null && tours.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tours.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tours.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tours.previous == null && tours.next == null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tours.previous != null && tours.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tours.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tours.previous == null && tours.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tours.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tours",
  layout: "touristLeader",
  async asyncData({ $axios }) {
    const tours = await $axios.$get("/api/toursLeaders/tours/", {
      headers: {
        Authorization: "token a79df83fc25c7e2270af15f27479abcdcb4399cd",
      },
    });
    return {
      tours,
    };
  },
};
</script>

<style scoped>
.button {
  color: white;
  background-color: #487df5;
  border-radius: 10px;
}
.button:hover {
  text-decoration: none;
}
</style>
