<template>
  <div>
    <!-- test modal -->
    <b-modal id="modal-test" title="user tests" @shown="showEvent">
      <template v-slot:modal-footer>&nbsp;</template>

      <!-- main test -->
      <p class="my-2 border-bottom">
        main test:
        <span class="text-primary">{{ choosenUser.main_test_result }}</span>
      </p>

      <!-- hartman test -->
      <div class="my-2 border-bottom">
        <p>hartman test:</p>
        <canvas id="can" width="200" height="200" />
      </div>

      <!-- main test -->
      <div class="my-2">
        <p>
          worse title:
          <span class="text-primary">{{ choosenUser.badtarin_title }}</span>
        </p>
        <p>
          worse country:
          <span class="text-primary">{{ choosenUser.badtarin_country }}</span>
        </p>
        <p>
          worse city:
          <span class="text-primary">{{ choosenUser.badtarin_city }}</span>
        </p>
        <p>
          worse description:
          <span class="text-primary">{{
            choosenUser.badtarin_descriptions
          }}</span>
        </p>
        <p>
          normalest title:
          <span class="text-primary">{{ choosenUser.normaltarin_title }}</span>
        </p>
        <p>
          normalest country:
          <span class="text-primary">{{
            choosenUser.normaltarin_country
          }}</span>
        </p>
        <p>
          normalest city:
          <span class="text-primary">{{ choosenUser.normaltarin_city }}</span>
        </p>
        <p>
          normalest description:
          <span class="text-primary">{{
            choosenUser.normaltarin_descriptions
          }}</span>
        </p>
        <p>
          best title:
          <span class="text-primary">{{ choosenUser.behtrin_title }}</span>
        </p>
        <p>
          best country:
          <span class="text-primary">{{ choosenUser.behtarin_country }}</span>
        </p>
        <p>
          best city:
          <span class="text-primary">{{ choosenUser.behtarin_city }}</span>
        </p>
        <p>
          best description:
          <span class="text-primary">{{
            choosenUser.behratin_descriptions
          }}</span>
        </p>
      </div>
    </b-modal>
    <!-- data -->
    <div class="col-12">
      <nuxt-link to="tiket/create-tiket" class="btn btn-success mb-3"
        >create conversation</nuxt-link
      >
    </div>
    <div
      class="card bg-light mb-2 border-0"
      v-for="tiket in tikets.results"
      :key="tiket.id"
    >
      <div class="card-body">
        <nuxt-link
          :to="`tiket/${tiket.id}`"
          class="d-flex justify-content-center align-items-center text-dark"
        >
          <img
            src="/default.jpg"
            alt="profile"
            class="rounded-circle img-thumbnail manage-image-size"
          />
          <div class="card-body">
            <h5 class="card-title ml-4">
              {{ tiket.tourist_info[0].first_name || "" }}
              {{ tiket.tourist_info[0].last_name || "" }}
            </h5>
            <b-button
              class="btn btn-info"
              @click.prevent="onShowTest(tiket.tourist_info[0])"
              v-b-modal.modal-test
              >show tests</b-button
            >
          </div>
        </nuxt-link>
      </div>
    </div>

    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous != null && tikets.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tikets.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tikets.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous == null && tikets.next == null"
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
      v-if="tikets.previous != null && tikets.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(tikets.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="tikets.previous == null && tikets.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(tikets.next)">
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tiket",
  layout: "touristLeader",
  async asyncData({ $axios, params }) {
    const tikets = await $axios.$get(`/api/toursLeaders/tikets/`);
    return {
      tikets,
    };
  },
  data() {
    return {
      choosenUser: {},
    };
  },
  methods: {
    showEvent() {
      if (
        !this.choosenUser.hart_man_a &&
        !this.choosenUser.hart_man_b &&
        !this.choosenUser.hart_man_c &&
        !this.choosenUser.hart_man_d
      ) {
        return;
      }

      var canvas = document.getElementById("can");
      var ctx = canvas.getContext("2d");
      var lastend = 0;
      var data = [
        this.choosenUser.hart_man_a,
        this.choosenUser.hart_man_b,
        this.choosenUser.hart_man_c,
        this.choosenUser.hart_man_d,
      ];
      var myTotal = 0;
      var myColor = ["red", "green", "yellow", "blue"];

      for (var e = 0; e < data.length; e++) {
        myTotal += data[e];
      }
      var labels = [
        Math.floor((this.choosenUser.hart_man_a / myTotal) * 100) + "%",
        Math.floor((this.choosenUser.hart_man_b / myTotal) * 100) + "%",
        Math.floor((this.choosenUser.hart_man_c / myTotal) * 100) + "%",
        Math.floor((this.choosenUser.hart_man_d / myTotal) * 100) + "%",
      ];

      // make the chart 10 px smaller to fit on canvas
      var off = 10;
      var w = (canvas.width - off) / 2;
      var h = (canvas.height - off) / 2;
      for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = myColor[i];
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w, h);
        var len = (data[i] / myTotal) * 2 * Math.PI;
        var r = h - off / 2;
        ctx.arc(w, h, r, lastend, lastend + len, false);
        ctx.lineTo(w, h);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var mid = lastend + len / 2;
        ctx.fillText(
          labels[i],
          w + Math.cos(mid) * (r / 2),
          h + Math.sin(mid) * (r / 2)
        );
        lastend += Math.PI * 2 * (data[i] / myTotal);
      }
    },
    onShowTest(user) {
      this.choosenUser = user;
    },
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.tikets = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.manage-image-size {
  width: 80px;
  height: 80px;
}
</style>
