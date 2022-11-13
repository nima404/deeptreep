<template>
  <div>
    <div
      class="row rounded border m-0"
      v-for="tour in detail.results"
      :key="tour.id"
    >
      <div class="col-2 px-0 d-flex align-items-center">
        <img :src="tour.image" class="col-12 px-0" alt="" />
      </div>
      <div
        class="col-10 py-2 d-flex flex-column justify-content-center"
        v-if="$store.state.lang.lang == 'English'"
      >
        <div class="d-flex justify-content-between">
          <h4>country: {{ tour.country_en }}</h4>
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
          <div class="d-flex">
            <span
              class="pointer rounded px-2 mx-2 bg-danger"
              @click="deleteTour"
              ><i class="fa-solid fa-trash"></i
            ></span>
            <nuxt-link
              class="pointer rounded px-2 mx-2 bg-warning"
              :to="`/panel/admin/tours/${$route.params.tourId}/edit`"
              ><i class="fa-solid fa-pen"></i
            ></nuxt-link>
          </div>
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
    <nuxt-link :to="`${$route.params.tourId}/add`" class="btn btn-success mt-3"
      >add leader</nuxt-link
    >
    <table class="table mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>tour</th>
          <th>tour guide</th>
          <th>percentage</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="leader in leaders.results" :key="leader.id">
          <td>{{ leader.id }}</td>
          <td>{{ leader.tour }}</td>
          <td>{{ leader.tourleader }}</td>
          <td>{{ leader.percentage }}</td>
          <td>
            <nuxt-link
              :to="`/panel/admin/tours/${$route.params.tourId}/${leader.id}`"
            >
              <button class="btn btn-warning">
                <i class="fa-solid fa-pen"></i>
              </button>
            </nuxt-link>
            <button
              class="btn btn-danger"
              @click="deleteLeader(leader.tourleader)"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="leaders.previous != null && leaders.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(leaders.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(leaders.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="leaders.previous == null && leaders.next == null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="leaders.previous != null && leaders.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(leaders.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="leaders.previous == null && leaders.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(leaders.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tourId",
  layout: "admin",
  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(
      `/api/leadersTourManagers/tour-detail/${params.tourId}/`
    );
    const leaders = await $axios.$get(
      `/api/leadersTourManagers/leaders/${params.tourId}/`
    );
    return {
      detail,
      leaders,
    };
  },
  methods: {
    async deleteTour() {
      try {
        const deleteT = await this.$axios.$delete(
          `/api/leadersTourManagers/tour-delete/${this.$route.params.tourId}/`
        );
        console.log(deleteT);
        this.$router.push("/panel/admin/tours");
      } catch (er) {
        console.log(er);
      }
    },
    async deleteLeader(id) {
      try {
        const deleteL = await this.$axios.$delete(
          `/api/leadersTourManagers/leader-delete/${this.$route.params.tourId}/${id}/`
        );
        window.location.reload();
        console.log(deleteL);
      } catch (error) {
        console.log(error);
      }
    },
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.tours = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
