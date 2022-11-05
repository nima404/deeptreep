<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>image</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(category, index) in categories.data.results"
          :key="category.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.image }}</td>
          <td>
            <nuxt-link :to="`categories/${category.id}`" class="btn btn-info"
              >more</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "categories",
  layout: "service",

  async asyncData({ $axios }) {
    const categories = await $axios.get("api/services/categories/");
    return {
      categories,
    };
  },

  mounted() {
    console.log(categories);
  },
};
</script>

<style></style>
