<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(add)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>tour leader:</div>
          <input type="number" class="col-12" v-model="tourleader" /><span
            class="text-xs text-danger col-12 p-0"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>percentage:</div>
          <input type="number" class="col-12" v-model="percentage" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <button class="btn btn-success mt-3">add</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "addLeader",
  layout: "admin",

  data() {
    return {
      tourleader: 0,
      percentage: 0,
    };
  },
  methods: {
    async add() {
      try {
        const res = await this.$axios.post(
          `api/leadersTourManagers/leader-create/${this.$route.params.tourId}/`,
          {
            tour: this.$route.params.tourId,
            tourleader: this.tourleader,
            percentage: this.percentage,
          }
        );
        this.$router.push(`/panel/admin/tours/${this.$route.params.tourId}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
