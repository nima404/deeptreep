<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <div>image:</div>
        <input type="file" class="col-12 p-0" ref="fileInput" />

        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tour:</div>
          <input type="number" class="col-12" v-model="tour" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tourist:</div>
          <input type="number" class="col-12" v-model="tourist" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <button class="btn btn-success mt-3">create</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "picture",
  layout: "admin",

  data() {
    return {
      tour: 0,
      tourist: 0,
    };
  },

  methods: {
    async create() {
      try {
        const bodyFormData = new FormData();
        bodyFormData.append("tour", this.tour);
        bodyFormData.append("tourist", this.tourist);
        bodyFormData.append("image", this.$refs.fileInput.files[0]);
        const res = await this.$axios.post(
          "api/leadersTourManagers/picture-create/",
          bodyFormData
        );
        console.log(res);
        this.$router.push("/panel/admin");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
