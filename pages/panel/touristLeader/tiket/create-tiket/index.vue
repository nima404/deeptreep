<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(sendTiket)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tourist:</div>
          <input type="number" class="col-12" v-model="tourist" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="text-danger" v-if="message">invalid tourist id</div>
        <button class="btn btn-success mt-3">send</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "sendtiket",
  layout: "touristLeader",

  data() {
    return {
      tourist: 0,
      message: false,
    };
  },

  methods: {
    async sendTiket() {
      try {
        this.message = false;
        const res = await this.$axios.post("/api/toursLeaders/tiket/create/", {
          tourist: this.tourist,
        });
        console.log(res.data.tourist);
        if (res.data.tourist == undefined) {
          this.$router.push("/panel/touristLeader/tiket");
        }
        if (
          res.data.tourist != undefined &&
          res.data.tourist ==
            `Invalid pk "${this.tourist}" - object does not exist.`
        ) {
          this.message = true;
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
