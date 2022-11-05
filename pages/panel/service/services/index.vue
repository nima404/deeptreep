<template>
  <div>
    <div class="col-12 mb-3">
      <nuxt-link to="/panel/service/services/creeate" class="btn btn-success"
        >create service</nuxt-link
      >
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>country</th>
          <th>city</th>
          <th>category</th>
          <th>inventory</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in services.data.results" :key="service.id">
          <td>{{ index + 1 }}</td>
          <td>{{ service.title }}</td>
          <td>{{ service.country }}</td>
          <td>{{ service.city }}</td>
          <td>{{ service.category }}</td>
          <td>{{ service.inventory }}</td>
          <td>
            <nuxt-link
              :to="`/panel/service/services/${service.id}/`"
              class="btn btn-info mx-1"
              >more</nuxt-link
            >
            <nuxt-link
              :to="`/panel/service/services/edit/${service.id}/`"
              class="btn btn-warning mx-1"
              ><i class="fa fa-pen"></i
            ></nuxt-link>
            <button
              class="btn btn-danger mx-1"
              @click="deleteService(service.id)"
            >
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
  name: "services",
  layout: "service",

  async asyncData({ $axios }) {
    const services = await $axios.get("api/services/services/");
    return {
      services,
    };
  },

  methods: {
    async deleteService(id) {
      try {
        const res = await this.$axios.delete(
          `api/services/service-delete/${id}/`
        );
        console.log(res);
        this.$router.push("/panel/service");
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    console.log(services);
  },
};
</script>

<style></style>
