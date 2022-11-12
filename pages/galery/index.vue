<template>
  <div>
    <div
      class="col-12 text-light p-0"
      style="
        background-image: url('IMG_7456.jpg');
        height: 500px;
        background-size: cover;
      "
    >
      <div
        class="pb-5 d-flex justify-content-center align-items-end h-100"
        style="background-color: rgba(0, 0, 0, 0.5)"
      >
        <h2>Galery</h2>
      </div>
    </div>
    <h2 class="col-12 text-center mt-5">Grid style</h2>
    <p class="col-12 text-center">with Gap</p>
    <div class="row mx-0 px-3 justify-content-around mt-4">
      <img src="IMG_7466.jpg" alt="" style="width: 23%" />
      <img src="IMG_7428.jpg" alt="" style="width: 23%" />
      <img src="IMG_7466.jpg" alt="" style="width: 23%" />
      <img src="IMG_7428.jpg" alt="" style="width: 23%" />
    </div>

    <h2 class="col-12 text-center mt-5">Grid style</h2>
    <p class="col-12 text-center">without space</p>
    <div class="row mx-0 mt-4">
      <img src="IMG_7411.jpg" alt="" class="col-3 p-0" />
      <img src="IMG_7410.jpg" alt="" class="col-3 p-0" />
      <img src="IMG_7411.jpg" alt="" class="col-3 p-0" />
      <img src="IMG_7410.jpg" alt="" class="col-3 p-0" />
    </div>

    <h2 class="col-12 text-center mt-5">Horizontal scroll</h2>
    <p class="col-12 text-center">Haver with the central title</p>
    <div class="d-flex my-4 pb-3" style="overflow: scroll">
      <div
        class="col-4 mx-3 p-0 pointer"
        style="
          background-image: url('IMG_7467.jpg');
          background-size: cover;
          height: 300px;
        "
        @mouseover="hovered1 = true"
      >
        <div
          class="col-12 h-100 text-light d-flex justify-content-center align-items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
          v-if="hovered1"
          @mouseout="hovered1 = false"
        >
          <i class="fa fa-magnifying-glass"></i>
        </div>
      </div>
      <div
        class="col-4 mx-3 p-0 pointer"
        style="
          background-image: url('IMG_7421.jpg');
          background-size: cover;
          height: 300px;
        "
        @mouseover="hovered2 = true"
      >
        <div
          class="col-12 h-100 text-light d-flex justify-content-center align-items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
          v-if="hovered2"
          @mouseout="hovered2 = false"
        >
          <i class="fa fa-magnifying-glass"></i>
        </div>
      </div>
      <div
        class="col-4 mx-3 p-0 pointer"
        style="
          background-image: url('IMG_7467.jpg');
          background-size: cover;
          height: 300px;
        "
        @mouseover="hovered3 = true"
      >
        <div
          class="col-12 h-100 text-light d-flex justify-content-center align-items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
          v-if="hovered3"
          @mouseout="hovered3 = false"
        >
          <i class="fa fa-magnifying-glass"></i>
        </div>
      </div>
      <div
        class="col-4 mx-3 p-0 pointer"
        style="
          background-image: url('IMG_7421.jpg');
          background-size: cover;
          height: 300px;
        "
        @mouseover="hovered4 = true"
      >
        <div
          class="col-12 h-100 text-light d-flex justify-content-center align-items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
          v-if="hovered4"
          @mouseout="hovered4 = false"
        >
          <i class="fa fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
    <div
      class="col-12 mt-4 p-0"
      style="background-image: url('IMG_7350.jpg'); background-size: cover"
    >
      <div class="h-100 py-5" style="background-color: rgba(0, 0, 0, 0.5)">
        <h2 class="col-12 text-light text-center mt-5">
          Simple carousel gallery
        </h2>
        <p class="col-12 text-light text-center">
          Hover with left title and title
        </p>
        <div class="col-12 mt-4 d-flex justify-content-center">
          <div
            class="col-8 d-flex justify-content-between align-items-center p-3"
            style="background-size: cover; height: 500px"
            :style="{ backgroundImage: currentImg }"
          >
            <span
              class="text-light pointer p-2 px-3"
              @click="prev"
              style="background-color: black; border-radius: 50px"
              ><i class="fa fa-angle-left"></i
            ></span>
            <span
              class="text-light pointer p-2 px-3"
              @click="next"
              style="background-color: black; border-radius: 50px"
              ><i class="fa fa-angle-right"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #d3d3d3" class="py-5">
      <h2 class="col-12 text-center pt-5">Gallery with thumbnail</h2>
      <p class="col-12 text-center">Hover with the title gallery</p>
      <div class="col-12 d-flex justify-content-center">
        <div
          class="col-8 mx-3 p-0 pointer"
          style="
            background-image: url('IMG_7342.jpg');
            background-size: cover;
            height: 500px;
          "
          @mouseover="hovered5 = true"
        >
          <div
            class="col-12 h-100 text-light d-flex justify-content-center align-items-center"
            style="background-color: rgba(0, 0, 0, 0.5)"
            v-if="hovered5"
            @mouseout="hovered5 = false"
          >
            گالری
          </div>
        </div>
      </div>
    </div>
    <h2 class="col-12 text-center pt-5">Vertical gallery</h2>
    <p class="col-12 mb-4 text-center">Subtitle title, hover icon</p>
    <div class="row mx-0 justify-content-center">
      <img src="IMG_7423.jpg" alt="" class="col-8 my-2" />
      <img src="IMG_7440.jpg" alt="" class="col-8 my-2" />
      <img
        src="travel-education-teacher-with-students-school-field-trip-urban-tour-woman-city-guide-group-happy-tourists-pointing-local-architecture-learning-international-holiday.jpg"
        alt=""
        class="col-8 my-2"
      />
      <img
        src="young-man-with-camera-taking-photo-during-excursion.jpg"
        alt=""
        class="col-8 my-2"
      />
      <img src="IMG_7309.jpg" alt="" class="col-8 my-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "galery",
  layout: "main",
  data() {
    return {
      hovered1: false,
      hovered2: false,
      hovered3: false,
      hovered4: false,
      hovered5: false,
      images: [
        "url(IMG_7408.jpg)",
        "url(IMG_7407.jpg)",
        "url(IMG_7359.jpg)",
        "url(IMG_7409.jpg)",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImg() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    next() {
      this.currentIndex += 1;
      if (this.currentIndex < 0) {
        this.currentIndex = 3;
      }
      if (this.currentIndex > 3) {
        this.currentIndex = 0;
      }
    },
    prev() {
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = 3;
      }
      if (this.currentIndex > 3) {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style></style>
