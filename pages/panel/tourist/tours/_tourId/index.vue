<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <div>image:</div>
        <input type="file" class="col-12 p-0" ref="fileInput" />
        <button class="btn btn-success mt-3">create</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "picture",
  layout: "tourist",

  async asyncData({ $axios }) {
    const user = await $axios.get("api/usersmodel/user-info/");
    return {
      user: user.data.results[0],
    };
  },

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
        bodyFormData.append("tour", this.$route.params.tourId);
        bodyFormData.append("tourist", this.user.id);
        bodyFormData.append("image", this.$refs.fileInput.files[0]);
        const res = await this.$axios.post(
          "api/leadersTourManagers/picture-create/",
          bodyFormData
        );
        console.log(res);
        this.$router.push("/panel/tourist/tours");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
