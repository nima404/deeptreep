<template>
  <div style="background-color: #e3e3e3">
    <div class="container" style="padding-top: 200px">
      <div class="row">
        <div class="mb-4 col-12 px-0">The latest tours</div>
        <div class="row mx-0 p-2 col-12">
          <div
            class="d-flex py-3 col-md-3 col-12"
            v-for="tour in tours.results"
            :key="tour.id"
          >
            <img :src="tour.image" alt="" class="col-3 pl-0" />
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'English'"
            >
              <div class="text-muted">
                {{ tour.country_en + "-" + tour.city_en }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'Farsi'"
            >
              <div class="text-muted">
                {{ tour.country_fa + "-" + tour.city_fa }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'German'"
            >
              <div class="text-muted">
                {{ tour.country_gr + "-" + tour.city_gr }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'Chines'"
            >
              <div class="text-muted">
                {{ tour.country_ch + "-" + tour.city_ch }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'Spanish'"
            >
              <div class="text-muted">
                {{ tour.country_sp + "-" + tour.city_sp }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
            <div
              class="justify-content-between d-flex flex-column"
              v-if="$store.state.lang.lang == 'Arabic'"
            >
              <div class="text-muted">
                {{ tour.country_ar + "-" + tour.city_ar }}
              </div>
              <div>{{ tour.price + " " + tour.pay_with }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  layout: "main",

  data() {
    return {
      detail: "",
      name: "",
    };
  },

  mounted() {
    console.log(this.$route.query.category);
    if (this.$route.query.category != undefined) {
      this.name = this.$route.query.category;
      this.search();
    }
  },

  async asyncData({ $axios, params }) {
    const tours = await $axios.$get("api/home/tours/");
    return {
      tours,
    };
  },

  methods: {
    async search() {
      try {
        const res = await this.$axios.get(
          `api/home/services-by-category/${this.name}/`
        );
        this.detail = res.data.results;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #c7cbd0 !important;
}
</style>
