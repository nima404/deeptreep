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
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="orders.previous != null && orders.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(orders.previous)"
      >
        prev
      </button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(orders.next)">
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="orders.previous == null && orders.next == null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="orders.previous != null && orders.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(orders.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="orders.previous == null && orders.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="btn btn-info pointer mx-2" @click="nextprev(orders.next)">
        next
      </button>
    </div>
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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },

    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.categories = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
