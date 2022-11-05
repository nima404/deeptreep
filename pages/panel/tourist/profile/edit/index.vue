<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(edit)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">first name:</label>
          <input type="text" class="col-12" v-model="user.first_name" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">last name:</label>
          <input type="text" class="col-12" v-model="user.last_name" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">password:</label>
          <input type="text" class="col-12" v-model="user.password" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">gender:</label>
          <select class="col-12" style="height: 38px" v-model="user.gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">role:</label>
          <select class="col-12" style="height: 38px" v-model="user.role">
            <option value="tourist">tourist</option>
            <option value="tour-leader">tour leader</option>
            <option value="leader-tour-manager">leader tour manager</option>
            <option value="service">service</option>
          </select>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <label for="" class="col-12 mt-2">address:</label>
          <textarea
            type="text"
            class="col-12"
            rows="5"
            v-model="user.address"
          />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <label for="" class="col-12 mt-2">image:</label>
        <input type="file" class="col-12" ref="fileInput" />
        <button class="btn btn-warning mt-3">edit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "profile",
  layout: "tourist",

  async asyncData({ $axios }) {
    const user = await $axios.get("api/usersmodel/user-info/");
    return {
      user: user.data.results[0],
    };
  },

  methods: {
    async edit() {
      try {
        const bodyFormData = new FormData();
        bodyFormData.append("first_name", this.user.first_name);
        bodyFormData.append("last_name", this.user.last_name);
        bodyFormData.append("password", this.user.password);
        bodyFormData.append("gender", this.user.gender);
        bodyFormData.append("role", this.user.role);
        bodyFormData.append("address", this.user.address);
        if (this.$refs.fileInput.files[0] != undefined) {
          bodyFormData.append("image", this.$refs.fileInput.files[0]);
        }
        const res = await this.$axios.put(
          "api/usersmodel/user-update/",
          bodyFormData
        );
        this.$router.push("/panel/tourist/profile");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
