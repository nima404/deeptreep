<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">count</div>
          <input type="number" class="col-12" v-model="count" />

          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">cart</div>
          <input type="number" class="col-12" v-model="cart" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">service</div>
          <input type="number" class="col-12" v-model="service" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <button class="btn btn-success mt-3">create</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "create",
  layout: "service",

  data() {
    return {
      count: 0,
      cart: 0,
      service: 0,
    };
  },

  methods: {
    async create() {
      try {
        const res = await this.$axios.post("api/services/order-create/", {
          count: this.count,
          cart: this.cart,
          service: this.service,
        });
        this.$router.push("/panel/service/orders");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
