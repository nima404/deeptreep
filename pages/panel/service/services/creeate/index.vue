<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">title</div>
          <input type="text" class="col-12" v-model="formData.title" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">price</div>
          <input type="number" class="col-12" v-model="formData.price" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">inventory</div>
          <input
            type="number"
            class="col-12"
            v-model="formData.inventory"
          /><span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">country</div>
          <input type="text" class="col-12" v-model="formData.country" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">city</div>
          <input type="text" class="col-12" v-model="formData.city" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">category</div>

          <select
            v-model="formData.category"
            class="border rounded px-2 pointer col-12 border-dark p-2"
          >
            <option :value="n.id" v-for="n in categories" :key="n.id">
              {{ n.name }}
            </option>
          </select>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <div class="col-12">descriptions</div>
          <textarea
            cols="30"
            rows="5"
            class="col-12"
            v-model="formData.descriptions"
          ></textarea>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>

        <div class="col-12">image</div>
        <input type="file" class="col-12 px-0 mx-0" ref="fileInput" />

        <button class="btn btn-success mt-2">create</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "edit",
  layout: "service",

  async asyncData({ $axios }) {
    let categories = {};
    try {
      categories = await $axios.get("api/services/categories/");
    } catch {}
    console.log(categories);
    return {
      categories: categories?.data?.results || {},
    };
  },

  data() {
    return {
      formData: {
        title: "",
        price: 0,
        inventory: 0,
        country: "",
        city: "",
        category: "",
        descriptions: "",
      },
    };
  },

  methods: {
    async create() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.formData) {
          bodyFormData.append(property, this.formData[property]);
        }
        bodyFormData.append("image", this.$refs.fileInput.files[0]);
        const res = await this.$axios.post(
          `api/services/service-create/`,
          bodyFormData
        );
        this.$router.push("/panel/service");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
