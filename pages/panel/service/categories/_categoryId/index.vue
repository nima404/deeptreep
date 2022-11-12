<template>
  <div class="row">
    <img :src="category.image" alt="" class="col-3" />
    <div class="col-8 px-2 d-flex flex-column justify-content-center">
      <div class="col-">{{ category.id }}</div>
      <div class="col-">{{ category.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categorydetail",
  layout: "service",

  async asyncData({ $axios, params }) {
    const category = await $axios.get(
      `api/services/category-detail/${params.categoryId}/`
    );
    return {
      category: category.data.results[0],
    };
  },
};
</script>

<style></style>
