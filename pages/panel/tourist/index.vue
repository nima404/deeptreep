<template>
  <div>
    <div v-for="tour in tours.results" :key="tour.id">
      <div class="text-center mb-4" v-if="tour.status && dis">
        <h3>
          Are you enjoying {{ tour.country_en + "-" + tour.city_en }} tour?
        </h3>
        <div class="d-flex justify-content-center mt-3">
          <button class="btn btn-success mx-2" @click="dis = false">YES</button>
          <button class="btn btn-danger mx-2" @click="askHim">NO</button>
        </div>
      </div>
      <div class="text-center mb-4" v-if="tour.status && ask">
        <h3>Can you tell us why?</h3>
        <div class="text-center my-3">
          <textarea
            name=""
            id=""
            cols="40"
            rows="3"
            v-model="message"
          ></textarea>
        </div>
        <button class="btn btn-warning" @click="send(tour.id)">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "tourist",
  data() {
    return {
      dis: true,
      ask: false,
      message: "",
    };
  },

  async asyncData({ $axios }) {
    const tours = await $axios.$get("/api/tourists/my-tours/");
    const user = await $axios.get("api/usersmodel/user-info/");
    return {
      tours,
      user: user.data.results[0],
    };
  },

  methods: {
    askHim() {
      this.dis = false;
      this.ask = true;
    },
    async send(id) {
      try {
        const res = await this.$axios.post(
          "api/leadersTourManagers/notification-dissatisfaction-create/",
          {
            message: this.message,
            tour: id,
            tourist: this.user.id,
          }
        );
        this.ask = false;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
