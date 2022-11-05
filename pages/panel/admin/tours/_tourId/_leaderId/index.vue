<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(change)">
        <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
          <div>percentage:</div>
          <input type="number" v-model="leader.percentage" class="col-12" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
        <button class="btn btn-success mt-3">save</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "leaderEdit",
  layout: "admin",

  async asyncData({ $axios, params }) {
    const leader = await $axios.get(
      `api/leadersTourManagers/leader-detail/${params.leaderId}/`
    );
    return {
      leader: leader.data.results[0],
    };
  },

  methods: {
    async change() {
      try {
        const res = await this.$axios.put(
          `api/leadersTourManagers/leader-update/${this.$route.params.leaderId}/`,
          {
            tour: this.leader.tour,
            tourleader: this.leader.tourleader,
            percentage: this.leader.percentage,
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
