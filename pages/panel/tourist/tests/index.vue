<template>
  <div>
    <div class="card bg-light mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div
              class="d-flex justify-content-center align-items-center h-100 font-weight-bold"
            >
              Main test
            </div>
          </div>
          <div class="col-6">
            <div
              class="d-flex flex-column justify-content-center align-items-start"
            >
              <div v-if="mainTest">
                <p>{{ userInfo.main_test_result }}</p>
                <nuxt-link
                  to="/panel/tourist/tests/maintest"
                  class="btn btn-secondary"
                  >detail</nuxt-link
                >
              </div>
              <div v-else>
                <p class="text-danger">not found test</p>
                <nuxt-link
                  to="/panel/tourist/tests/maintest"
                  class="btn btn-info"
                  >start the test</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-light mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div
              class="d-flex justify-content-center align-items-center h-100 font-weight-bold"
            >
              Descriptive test
            </div>
          </div>
          <div class="col-6">
            <div
              class="d-flex flex-column justify-content-center align-items-start"
            >
              <div v-if="descriptiveTest">
                <nuxt-link
                  to="/panel/tourist/tests/descriptive"
                  class="btn btn-secondary"
                  >detail</nuxt-link
                >
              </div>
              <div v-else>
                <p class="text-danger">not found test</p>
                <nuxt-link
                  to="/panel/tourist/tests/descriptive"
                  class="btn btn-info"
                  >start the test</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-light">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <div
              class="d-flex justify-content-center align-items-center h-100 font-weight-bold"
            >
              Hartman test
            </div>
          </div>
          <div class="col-6">
            <div
              class="d-flex flex-column justify-content-center align-items-start"
            >
              <div v-if="hartmanTest">
                <canvas id="can" width="200" height="200" />

                <nuxt-link
                  to="/panel/tourist/tests/hartman"
                  class="btn btn-secondary"
                  >detail</nuxt-link
                >
              </div>
              <div v-else>
                <p class="text-danger">not found test</p>
                <nuxt-link
                  to="/panel/tourist/tests/hartman"
                  class="btn btn-info"
                  >start the test</nuxt-link
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
  layout: "tourist",
  mounted() {
    if (
      !this.userInfo.hart_man_a &&
      !this.userInfo.hart_man_b &&
      !this.userInfo.hart_man_c &&
      !this.userInfo.hart_man_d
    ) {
      return;
    }
    console.log(
      this.userInfo.hart_man_a,
      this.userInfo.hart_man_b,
      this.userInfo.hart_man_c,
      this.userInfo.hart_man_d
    );
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");
    var lastend = 0;
    var data = [
      this.userInfo.hart_man_a,
      this.userInfo.hart_man_b,
      this.userInfo.hart_man_c,
      this.userInfo.hart_man_d,
    ];
    var myTotal = 0;
    var myColor = ["red", "green", "yellow", "blue"];

    for (var e = 0; e < data.length; e++) {
      myTotal += data[e];
    }
    var labels = [
      Math.floor((this.userInfo.hart_man_a / myTotal) * 100) + "%",
      Math.floor((this.userInfo.hart_man_b / myTotal) * 100) + "%",
      Math.floor((this.userInfo.hart_man_c / myTotal) * 100) + "%",
      Math.floor((this.userInfo.hart_man_d / myTotal) * 100) + "%",
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
  async asyncData({ $axios }) {
    let hartmanTest = null;
    let mainTest = null;
    let descriptiveTest = null;
    let userInfo = {};
    try {
      const test = await $axios.get("/api/psychologicalTesting/hasrtman/");
      hartmanTest = test?.data?.results?.[0];
    } catch (error) {}
    try {
      const test = await $axios.get(
        "/api/psychologicalTesting/descriptive-questions/"
      );
      descriptiveTest = test?.data?.results?.[0];
    } catch (error) {}
    try {
      const res = await $axios.get("/api/usersmodel/user-info/");
      userInfo = res.data.results[0];
    } catch (error) {}
    try {
      const test = await $axios.get("/api/psychologicalTesting/maintest/");
      mainTest = test?.data?.results?.[0];
    } catch (error) {}
    return {
      hartmanTest,
      mainTest,
      userInfo,
      descriptiveTest,
    };
  },
};
</script>

<style>
/* .pie {
  width: 100px;
  height: 100px;
  background-image: conic-gradient(red 25%, blue 14%);
  border-radius: 50%;
} */
</style>
