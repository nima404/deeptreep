<template>
  <div>
    <div class="col-12 mb-3">
      <nuxt-link to="/panel/service/orders/create" class="btn btn-success"
        >create order</nuxt-link
      >
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>count</th>
          <th>date</th>
          <th>cart</th>
          <th>service</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders.data.results" :key="order.id">
          <td>{{ index + 1 }}</td>
          <td>{{ order.count }}</td>
          <td>{{ order.date.split("T")[0] }}</td>
          <td>{{ order.cart }}</td>
          <td>{{ order.service }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteOrder(order.id)">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "orders",
  layout: "service",

  async asyncData({ $axios }) {
    const orders = await $axios.get("api/services/orders/");
    return {
      orders,
    };
  },

  methods: {
    async deleteOrder(id) {
      try {
        const res = await this.$axios.delete(
          `api/services/order-delete/${id}/`
        );
        console.log(res);
        this.$router.push("/panel/service");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(orders);
  },
};
</script>

<style></style>
