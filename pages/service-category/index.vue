<template>
  <div class="col-12 p-0">
    <div
      class="col-12 text-light p-0"
      :style="`
        background-image: url('IMG_7467.jpg');
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.6);`"
    >
      <div class="pt-5">
        <div class="pt-5">
          <h5 class="px-5 pt-5 m-0 pb-5 text-center text-success">
            We are unique in providing services
          </h5>
        </div>
      </div>
    </div>
    <div class="col-12 p-0">
      <div
        class="text-center px-5 pb-5"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="row g-5">
          <div
            class="col-12 mb-4 text-light"
            v-for="(item, i) in categories.results"
            :key="i"
          >
            <div class="card m-0 bg-transparent">
              <div
                class="row g-0"
                :class="i % 2 !== 0 ? 'flex-row-reverse' : ''"
              >
                <div class="col-md-4">
                  <img
                    :src="item.image"
                    class="img-fluid rounded-start"
                    alt="category"
                  />
                </div>
                <div class="col-md-8">
                  <div
                    class="card-body h-100 d-flex align-items-center flex-column justify-content-center"
                  >
                    <h5 class="card-title">{{ item.name }}</h5>
                    <nuxt-link
                      :to="`/services?category=${item.name}`"
                      class="btn text-light bgorange"
                      >more</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 row m-0 py-4 justify-content-center bgmain">
      <div class="col-md-2 col-6 d-flex">
        <div class="mx-2"><i class="fa-solid fa-user"></i></div>
        <div class="mx-2">
          <div class="text-light">+500 destinations and places</div>
          <div style="color: #ababab">
            The most spectacular and amazing places
          </div>
        </div>
      </div>
      <div class="col-md-2 col-6 d-flex">
        <div class="mx-2"><i class="fa-solid fa-user"></i></div>
        <div class="mx-2">
          <div class="text-light">Best price guarantee</div>
          <div style="color: #ababab">
            The lowest price and the highest quality service
          </div>
        </div>
      </div>
      <div class="col-md-2 col-6 d-flex">
        <div class="mx-2"><i class="fa-solid fa-user"></i></div>
        <div class="mx-2">
          <div class="text-light">Excellent customer</div>
          <div style="color: #ababab">
            The comfort and satisfaction of passengers is our most important
            mission
          </div>
        </div>
      </div>
      <div class="col-md-2 col-6 d-flex">
        <div class="mx-2"><i class="fa-solid fa-user"></i></div>
        <div class="mx-2">
          <div class="text-light">Super fast booking</div>
          <div style="color: #ababab">
            The best hotels and flights at your disposal
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCategories",
  layout: "main",
  async asyncData({ $axios }) {
    const categories = await $axios.$get("api/home/services-catgories/");
    return {
      categories,
    };
  },
};
</script>
