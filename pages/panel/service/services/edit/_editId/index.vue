<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(edit)">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">title</div>
          <input type="text" class="col-12" v-model="service.title" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">price</div>
          <input type="number" class="col-12" v-model="service.price" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">inventory</div>
          <input
            type="number"
            class="col-12"
            v-model="service.inventory"
          /><span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">country</div>
          <input type="text" class="col-12" v-model="service.country" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">city</div>
          <input type="text" class="col-12" v-model="service.city" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">category</div>
          <input type="text" class="col-12" v-model="service.category" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">descriptions</div>
          <textarea
            cols="30"
            rows="5"
            class="col-12"
            v-model="service.descriptions"
          ></textarea>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="col-12">image</div>
        <input type="file" class="col-12 px-0 mx-0" ref="fileInput" />
        <button class="btn btn-success mt-2">edit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "edit",
  layout: "service",

  async asyncData({ $axios, params }) {
    const service = await $axios.get(
      `api/services/service-detail/${params.editId}/`
    );
    return {
      service: service.data.results[0],
    };
  },

  methods: {
    async edit() {
      try {
        const bodyFormData = new FormData();
        bodyFormData.append("title", this.service.title);
        bodyFormData.append("price", this.service.price);
        bodyFormData.append("inventory", this.service.inventory);
        bodyFormData.append("country", this.service.country);
        bodyFormData.append("city", this.service.city);
        bodyFormData.append("category", this.service.category);
        bodyFormData.append("descriptions", this.service.discriptions);
        if (this.$refs.fileInput.files[0] != undefined) {
          bodyFormData.append("image", this.$refs.fileInput.files[0]);
        }
        const res = await this.$axios.put(
          `api/services/service-update/${this.$route.params.editId}/`,
          bodyFormData
        );
        this.$router.push("/panel/service/services");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
