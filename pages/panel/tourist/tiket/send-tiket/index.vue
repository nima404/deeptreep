<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(sendTiket)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tourleader:</div>
          <input type="number" class="col-12" v-model="tourleader" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="text-danger" v-if="message">invalid tourleader id</div>
        <button class="btn btn-success mt-3">send</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "sendtiket",
  layout: "tourist",

  data() {
    return {
      tourleader: 0,
      message: false,
    };
  },

  methods: {
    async sendTiket() {
      try {
        this.message = false;
        const res = await this.$axios.post("/api/tourists/tiket/create/", {
          tourleader: this.tourleader,
        });
        console.log(res.data.tourleader[0]);
        if (
          res.data.tourleader[0] ==
          `Invalid pk "${this.tourleader}" - object does not exist.`
        ) {
          this.message = true;
        }
        this.$router.push("/panel/tourist/tiket");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
