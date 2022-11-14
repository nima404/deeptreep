<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form action="#" @submit.prevent="handleSubmit(create)">
        <ValidationProvider
          v-slot="{ errors }"
          vid="role"
          rules="required|max_value:5|min_value:0"
        >
          <div>score:</div>
          <input type="number" class="col-12" v-model="score" />
          <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
        </ValidationProvider>
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
  name: "score",
  layout: "tourist",

  data() {
    return {
      score: 0,
      tour: 0,
      tourist: 0,
    };
  },
  methods: {
    async create() {
      try {
        const res = await this.$axios.post(
          "api/leadersTourManagers/score-create/",
          {
            score: this.score,
            tour: this.tour,
            tourist: this.tourist,
          }
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
