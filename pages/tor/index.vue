<template>
  <div>
    <div
      class="col-12 text-light p-0"
      style="
        background-image: url('IMG_7355.jpg');
        height: 700px;
        background-size: cover;
      "
    >
      <div
        class="h-100 pb-5 d-flex justify-content-end align-items-center"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="container d-flex justify-content-end">
          <div class="col-6">
            <h1>Our tours</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-12 py-5 row justify-content-center px-3 m-0"
      style="background-color: rgba(0, 0, 0, 0.1)"
    >
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'English'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountry">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Arabic'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountryAR">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Spanish'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountrySP">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Farsi'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountryFA">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'German'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountryGR">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Chines'"
      >
        <input
          type="text"
          class="col-9"
          v-model="country"
          placeholder="country"
        />
        <button class="btn btn-success p-0 col-3" @click="sCountryCH">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'English'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCity">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Arabic'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityAR">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Spanish'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCitySP">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Farsi'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityFA">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'German'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityGR">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Chines'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityCH">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div
        class="d-flex mx-2 col-12 justify-content-center mt-3"
        v-if="$auth.strategy.token.status().valid() == true"
      >
        <button class="btn col-4 col-sm-3 btn-info mx-1" @click="sScores">
          search
        </button>
        <button class="btn col-4 col-sm-3 btn-info mx-1" @click="sTest">
          by maintest
        </button>
        <button class="btn col-4 col-sm-3 btn-info mx-1" @click="nearMe">
          near me
        </button>
      </div>
      <div
        class="d-flex mx-2 col-4 mt-3"
        v-if="$auth.strategy.token.status().valid() == false"
      >
        <button class="btn col-12 btn-info mx-1" @click="sScores">
          search
        </button>
      </div>
    </div>
    <div class="row justify-content-between col-12 mt-4">
      <div
        class="p-2 col-md-3 col-6"
        v-for="tour in tours.results"
        :key="tour.id"
      >
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'English'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_en + "-" + tour.city_en }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Arabic'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_ar + "-" + tour.city_ar }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Spanish'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_sp + "-" + tour.city_sp }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Farsi'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_fa + "-" + tour.city_fa }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'German'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_gr + "-" + tour.city_gr }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Chines'"
          style="height: 400px"
        >
          <img :src="tour.image" alt="" class="col-12 h-50 p-0 rounded-top" />
          <div class="p-3">
            <div class="d-flex justify-content-between mb-2">
              {{ tour.country_ch + "-" + tour.city_ch }}
            </div>
            <h4 class="text-info my-2">
              {{ tour.price + " " + tour.pay_with }}
            </h4>
            <div class="my-2">
              <i class="fa-regular fa-clock-rotate-left text-info mr-2"></i
              ><span class="text-muted">{{ tour.duration }} days</span>
            </div>
            <nuxt-link :to="`/tor/${tour.id}`" class="btn text-light bgorange"
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
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
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
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tours.previous == null && tours.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tours.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tours",
  layout: "main",
  data() {
    return {
      toursByCity: "",
      toursByCountry: "",
      country: "",
      city: "",
      userInfo: {},
    };
  },
  async asyncData({ $axios }) {
    const tours = await $axios.$get("/api/home/tours/");
    const toursByScores = await $axios.$get("/api/home/tours-by-scores/");
    return {
      tours,
      toursByScores,
    };
  },
  async mounted() {
    console.log(this.$route.query.country);
    if (this.$route.query.country != undefined) {
      this.country = this.$route.query.country;
      this.sCountry();
    }
    if (this.$auth.strategy.token.status().valid() == true) {
      const userInfo = await this.$axios.get("api/usersmodel/user-info/");
      this.userInfo = userInfo.data.results[0];
    }
  },
  methods: {
    async onSearch() {
      const toursByCity = await $axios.$get(`/api/home/tours-by-city/`);
      const toursByCountry = await $axios.$get(`/api/home/tours-by-country/`);
      this.toursByCity = toursByCity;
      this.toursByCountry = toursByCountry;
    },
    async nearMe() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/en/${this.userInfo.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountry() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/en/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryAR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/ar/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryCH() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/ch/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryFA() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/fa/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountryGR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/gr/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCountrySP() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-country/sp/${this.country}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCity() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/en/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityAR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/ar/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityCH() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/ch/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityFA() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/fa/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCityGR() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/gr/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sCitySP() {
      try {
        const res = await this.$axios.get(
          `api/home/tours-by-city/sp/${this.city}/`
        );
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sScores() {
      try {
        const res = await this.$axios.get("api/home/tours-by-scores/");
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async sTest() {
      try {
        const res = await this.$axios.get("api/home/tours-by-maintest/");
        console.log(res);
        this.tours = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async alltours() {
      try {
        const res = await this.$axios.$get("/api/home/tours/");
        this.tours = res;
        console.log(res);
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

<style scoped></style>
