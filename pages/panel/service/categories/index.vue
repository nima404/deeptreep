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
          <td><img :src="category.image" height="40" alt="" width="" /></td>
          <td>
            <nuxt-link
              :to="`categories/${category.id}`"
              class="btn text-light bgorange"
              >more</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="categories.previous != null && categories.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(categories.previous)"
      >
        prev
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(categories.next)"
      >
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="categories.previous == null && categories.next == null"
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
      v-if="categories.previous != null && categories.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(categories.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="categories.previous == null && categories.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(categories.next)"
      >
        next
      </button>
    </div>
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
  methods: {
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
