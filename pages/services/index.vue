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
            <h1>Our services</h1>
            <h5>The best things you need !</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 row m-0 py-4 justify-content-center bgmain text-light">
      <p class="px-3 text-justify">
        The Company will provide the local guides registered with Deep Treep
        with training courses to understand the client’s requirements to fulfil
        their needs. Deep Treep Courses will include three different kinds of
        courses for their guides: Hartman Personality Test: This course is
        designed to make guides understand the personalities that people
        exhibit. With this test, personalities are given colour codes instead of
        using names. These colours depict a person's traits and how these traits
        correspond with a person's overall personality. Deep Treep Experience:
        The Company will create its own dedicated database centre, where it will
        collect data and feedback received from the previous bookings in the
        form of multiple- choice questions. This will help the system better
        understand travellers' tastes and desires for future recommendations.
        The course will train the guides in understanding and using the data
        obtained from the database for future reference. Creative Photos and
        Films: This course is designed to help guides learn new and creative
        photography skills to make their client's travel more special and
        memorable by providing them with their travel experience in photos and
        videos. The first two courses are compulsory for all the guides who will
        register themselves with Deep Treep, and the third one is desirable for
        those who are passionate about learning photographic skills, However,
        this course is still compulsory for those who wants to offer creative
        photos and films to the company’s precious customers.
      </p>
    </div>
    <div
      class="col-12 row mx-0 py-5 d-flex justify-content-center px-2"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div class="col-12 row mx-0 justify-content-center">
        <div class="d-flex border rounded mx-2 col-4 px-0">
          <input
            type="text"
            class="col-9"
            v-model="country"
            placeholder="country"
          />
          <button class="btn btn-success col-3 px-0" @click="sCountry">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div class="d-flex border rounded mx-2 col-4 px-0">
          <input type="text" class="col-9" v-model="city" placeholder="city" />
          <button class="btn btn-success col-3 px-0" @click="sCity">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div class="col-12 row mx-0 mt-3 justify-content-center">
        <div class="d-flex border rounded mx-2 col-4 px-0">
          <select v-model="category2" class="col-9">
            <option
              v-for="cate in category.data.results"
              :key="cate"
              :value="cate.name"
            >
              {{ cate.name }}
            </option>
          </select>
          <button class="btn btn-success col-3 p-0" @click="sCategory">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <button
          class="btn col-4 btn-info mx-2"
          v-if="$auth.strategy.token.status().valid() == true"
          @click="nearMe"
        >
          near me
        </button>
      </div>
    </div>
    <div
      class="row col-12 px-0 mx-0"
      v-for="(service, index) in services.data.results"
      :key="service.id"
    >
      <div class="row col-12 px-0 m-0" v-if="index % 2 == 0">
        <div class="col-6 p-0">
          <img :src="service.image" alt="" class="col-12 h-100 p-0" />
        </div>
        <div class="col-6 py-5 row mx-0">
          <div
            class="col-md-6 col-12 py-5 my-5 px-2 row mx-0 align-items-center"
          >
            <h2 class="col-12 px-0">{{ service.title }}</h2>
            <p>{{ service.country + "-" + service.city }}</p>
            <p class="col-12 p-0">
              {{ service.descriptions }}
            </p>
            <div class="d-flex justify-content-between col-12">
              <div>inventory: {{ service.inventory }}</div>
              <div>price: {{ service.price }}</div>
            </div>
            <nuxt-link
              :to="`services/${service.id}`"
              class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="row col-12 px-0 m-0" v-else>
        <div class="col-6 py-5 my-5 row mx-0 justify-content-end">
          <div class="col-md-6 col-12 px-2 row mx-0 align-items-center">
            <h2 class="col-12 px-0">{{ service.title }}</h2>
            <p>{{ service.country + "-" + service.city }}</p>
            <p class="col-12 p-0">
              {{ service.descriptions }}
            </p>
            <div class="d-flex justify-content-between col-12">
              <div>inventory: {{ service.inventory }}</div>
              <div>price: {{ service.price }}</div>
            </div>
            <nuxt-link
              :to="`services/${service.id}`"
              class="btn text-light bgorange"
              >more</nuxt-link
            >
          </div>
        </div>
        <div class="col-6 p-0">
          <img :src="service.image" alt="" class="col-12 h-100 p-0" />
        </div>
      </div>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="services.previous != null && services.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(services.previous)"
      >
        prev
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(services.next)"
      >
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="services.previous == null && services.next == null"
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
      v-if="services.previous != null && services.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(services.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="services.previous == null && services.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(services.next)"
      >
        next
      </button>
    </div>

    <div
      class="col-12 p-0"
      style="background-image: url('IMG_7466.jpg'); background-size: cover"
    >
      <div class="py-5 h-100" style="background-color: rgba(0, 0, 0, 0.5)">
        <div class="container">
          <div class="row text-light">
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa-regular fa-lightbulb"></i></h4>
              <h5>Clean system</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa fa-cloud-arrow-down"></i></h4>
              <h5>Google fonts</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa fa-credit-card"></i></h4>
              <h5>Credit cards</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa-solid fa-clock"></i></h4>
              <h5>Perfect timing</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa-solid fa-circle"></i></h4>
              <h5>Smart variety</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div class="col-4 px-2 mt-3">
              <h4><i class="fa-regular fa-location-dot"></i></h4>
              <h5>We are always here</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex my-5 justify-content-between">
      <div>
        <h5>Are you interested in our services yet?</h5>
        <div>
          Photography is an important part of any travel plan, but some
          travellers believe that photography takes away from the experience of
          travelling, so they need someone to capture their moments while
          enjoying and experiencing new things. Deep Treep will provide its
          clients with a worry-free travel experience in which they will not
          have to worry about collecting photos because the guides will do so
          for them. The guides will photograph and film the traveller's precious
          moments with the help of their smartphones and intelligent techniques
          while they are having fun and experiencing their travel
        </div>
      </div>
      <button
        class="border p-2 px-3 text-center h-50 bg-light"
        style="border-radius: 40px"
      >
        contact us
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "services",
  layout: "main",
  data() {
    return {
      category2: "",
      city: "",
      country: "",
      userInfo: {},
    };
  },
  async asyncData({ $axios }) {
    const services = await $axios.get("api/home/services/");
    const category = await $axios.get("api/home/services-catgories/");
    return {
      services,
      category,
    };
  },
  async mounted() {
    if (this.$auth.strategy.token.status().valid() == true) {
      const userInfo = await this.$axios.get("api/usersmodel/user-info/");
      this.userInfo = userInfo.data.results[0];
    }
    if (this.$route.query.category != undefined) {
      this.category2 = this.$route.query.category;
      this.sCategory();
    }
  },
  watch: {
    "$route.query"() {
      if (this.$route.query.category != undefined) {
        this.category2 = this.$route.query.category;
        this.sCategory();
      }
    },
  },
  methods: {
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
    async onSearch() {
      const toursByCity = await $axios.$get(`/api/home/tours-by-city/`);
      const toursByCountry = await $axios.$get(`/api/home/tours-by-country/`);
      this.toursByCity = toursByCity;
      this.toursByCountry = toursByCountry;
    },
    async sCountry() {
      try {
        const res = await this.$axios.get(
          `api/home/services-by-country/${this.country}/`
        );
        console.log(res);
        this.services = res;
      } catch (error) {
        console.log(error);
      }
    },
    async sCity() {
      try {
        const res = await this.$axios.get(
          `api/home/services-by-city/${this.city}/`
        );
        console.log(res);
        this.services = res;
      } catch (error) {
        console.log(error);
      }
    },
    async sCategory() {
      try {
        const res = await this.$axios.get(
          `api/home/services-by-category/${this.category2}/`
        );
        console.log(res);
        this.services = res;
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
