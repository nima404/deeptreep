<template>
  <div class="col-12 p-0">
    <div
      class="col-12 text-light p-0"
      style="
        background-image: url('IMG_7355.jpg');
        height: 700px;
        background-size: cover;
      "
    >
      <div
        class="h-100 pb-5 pt-3 d-flex justify-content-end align-items-center"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="container d-flex justify-content-end">
          <div class="col-6">
            <h1>Services categories</h1>
            <h5>We are unique in providing services</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 p-0">
      <div
        class="text-center px-5 pb-5 pt-3"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="row g-5">
          <div
            class="col-6 col-md-4 col-lg-3 mb-4 text-light"
            v-for="(item, i) in categories.results"
            :key="i"
          >
            <div class="card h-100 text-white m-0 bg-transparent">
              <img
                :src="item.image"
                class="card-img w-100 h-100"
                alt="category"
              />
              <div
                class="card-img-overlay d-flex justify-content-center flex-column align-items-center h-100 card-hover"
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
</template>

<script>
export default {
  name: "ServiceCategories",
  layout: "main",
  async asyncData({ $axios }) {
    const categories = await $axios.$get("api/home/services-catgories/");
    return {
      // categories,
      categories: {
        count: 14,
        next: null,
        previous: null,
        results: [
          {
            id: 14,
            name: "music",
            image:
              "https://deeptreep.ir/media/categories-images/musical-pentagram-sound-waves-notes-background_1017-33911.webp",
          },
          {
            id: 13,
            name: "travel",
            image:
              "https://deeptreep.ir/media/categories-images/full-shot-travel-concept-with-landmarks_23-2149153258.webp",
          },
          {
            id: 12,
            name: "kids",
            image: "https://deeptreep.ir/media/categories-images/images.jfif",
          },
          {
            id: 11,
            name: "outdoors",
            image:
              "https://deeptreep.ir/media/categories-images/Colorado_Outdoors_m.jpg",
          },
          {
            id: 10,
            name: "nightlife",
            image:
              "https://deeptreep.ir/media/categories-images/camp-and-furnace.png",
          },
          {
            id: 9,
            name: "art and museusm",
            image:
              "https://deeptreep.ir/media/categories-images/download_2.jfif",
          },
          {
            id: 8,
            name: "markets",
            image: "https://deeptreep.ir/media/categories-images/149463.jpg",
          },
          {
            id: 7,
            name: "food and drink",
            image:
              "https://deeptreep.ir/media/categories-images/download_1.jfif",
          },
          {
            id: 6,
            name: "theater",
            image:
              "https://deeptreep.ir/media/categories-images/chinese-after-3-1024x566.jpg",
          },
          {
            id: 5,
            name: "shopping",
            image:
              "https://deeptreep.ir/media/categories-images/shoppingcart-1066110386.webp",
          },
          {
            id: 4,
            name: "free",
            image: "https://deeptreep.ir/media/categories-images/download.jfif",
          },
          {
            id: 3,
            name: "must see",
            image:
              "https://deeptreep.ir/media/categories-images/download_1.png",
          },
          {
            id: 2,
            name: "offers",
            image: "https://deeptreep.ir/media/categories-images/download.png",
          },
          {
            id: 1,
            name: "near me",
            image: "https://deeptreep.ir/media/categories-images/unnamed.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
.card-hover {
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.3s ease background;
}

.card-hover:hover {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
</style>
