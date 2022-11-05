<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>message</div>
          <textarea
            cols="30"
            rows="3"
            class="col-12"
            v-model="message"
          ></textarea>
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tour</div>
          <input type="text" class="col-12" v-model="tour" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tourist</div>
          <input type="text" class="col-12" v-model="tourist" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <button class="btn btn-success mt-3">create</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "create",
  layout: "admin",

  data() {
    return {
      message: "",
      tour: 0,
      tourist: 0,
    };
  },

  methods: {
    async create() {
      try {
        const res = this.$axios.post(
          "api/leadersTourManagers/notification-dissatisfaction-create/",
          {
            message: this.message,
            tour: this.tour,
            tourist: this.tourist,
          }
        );
        this.$router.push("/panel/admin/notification");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
