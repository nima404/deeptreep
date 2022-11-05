<template>
  <div style="background-color: #e3e3e3">
    <div
      class="col-12 text-light pb-5 d-flex justify-content-center align-items-center"
      style="height: 500px; background-size: cover"
      :style="{ backgroundImage: detail.results.image }"
    >
      <div class="container">
        <h5 class="text-light">Category</h5>
        <h1>{{ detail.results.name }}</h1>
      </div>
    </div>
    <div class="container py-5">
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
  middleware: ["auth"],

  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(
      `api/services/category-detail/${params.categoryId}/`
    );
    const tours = await $axios.$get("api/home/tours/");
    return {
      detail,
      tours,
    };
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #c7cbd0 !important;
}
</style>
