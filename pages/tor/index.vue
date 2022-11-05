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
      class="col-12 py-5 d-flex justify-content-center px-3"
      style="background-color: rgba(0, 0, 0, 0.5)"
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
          search
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
          search
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
          search
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
          search
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
          search
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
          search
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'English'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCity">search</button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Arabic'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityAR">
          search
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Spanish'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCitySP">
          search
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Farsi'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityFA">
          search
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'German'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityGR">
          search
        </button>
      </div>
      <div
        class="d-flex border rounded mx-2 p-0 col-4"
        v-if="$store.state.lang.lang == 'Chines'"
      >
        <input type="text" class="col-9" v-model="city" placeholder="city" />
        <button class="btn btn-success p-0 col-3" @click="sCityCH">
          search
        </button>
      </div>
      <div
        class="d-flex mx-2 col-4"
        v-if="$auth.strategy.token.status().valid() == true"
      >
        <button class="btn col-6 btn-info mx-1" @click="sScores">
          by scores
        </button>
        <button class="btn col-6 btn-info mx-1" @click="sTest">
          by maintest
        </button>
      </div>
      <div
        class="d-flex mx-2 col-4"
        v-if="$auth.strategy.token.status().valid() == false"
      >
        <button class="btn col-12 btn-info mx-1" @click="sScores">
          by scores
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
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Arabic'"
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Spanish'"
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Farsi'"
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'German'"
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </div>
        </div>
        <div
          class="my-3 my-md-0 rounded bg-light p-0"
          v-if="$store.state.lang.lang == 'Chines'"
        >
          <img src="IMG_7421.jpg" alt="" class="col-12 h-50 p-0 rounded-top" />
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
            <nuxt-link :to="`/tor/${tour.id}`" class="btn btn-info"
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
  layout: "main",
  data() {
    return {
      toursByCity: "",
      toursByCountry: "",
      country: "",
      city: "",
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
  },
  methods: {
    async onSearch() {
      const toursByCity = await $axios.$get(`/api/home/tours-by-city/`);
      const toursByCountry = await $axios.$get(`/api/home/tours-by-country/`);
      this.toursByCity = toursByCity;
      this.toursByCountry = toursByCountry;
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
