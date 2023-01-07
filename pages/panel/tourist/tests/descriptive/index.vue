<template>
  <div>
    <div v-if="!test">
      <div
        class="card bg-light mb-2"
        v-for="(question, i) in questions"
        :key="i"
      >
        <div class="card-body">
          <p>
            {{ i+1 }}. <b>{{ question.text }}</b>
          </p>
          <input type="text" class="form-control" v-model="formData[question.key]" />
        </div>
      </div>
      <button class="btn btn-primary" @click="onSubmit">submit</button>
      <p class="text-danger" v-show="notAnswerYet">you did not answer some questions !</p>
    </div>
    <div v-else>
      <div class="card overflow-hidden shadow">
        <h5 class="card-body bg-info text-light text-center mb-0">descriptive result</h5>
        <div class="card-body">
          <p class="card-text">
            <div class="border-bottom py-2 d-flex justify-content-between flex-column flex-lg-row" v-for="(question, i) in questions" :key="i">
              <span>
                {{i+1}}. {{question.text}}
              </span>
              <span class="text-primary">{{test[question.key]}}</span>
            </div>
          </p>
        </div>
      </div>
      <button class="btn btn-info mt-3 w-100" @click="onTestAgain">test again</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "tourist",

  async asyncData({ $axios }) {
    const userInfo = await $axios.get("/api/usersmodel/user-info/");
    try {
      const test = await $axios.get("/api/psychologicalTesting/descriptive-questions/");
      return {
        test: test.data.results[0],
        userInfo : userInfo?.data?.results?.[0]
      };
    } catch (error) {
      return {
        test: null,
        userInfo : userInfo?.data?.results?.[0]
      };
    }
  },
  methods: {
    async onTestAgain(){
      try {
        const res = await this.$axios.delete(
          "/api/psychologicalTesting/descriptive-questions-delete/",
        );
        console.log(res);
        this.test = null
        // this.$router.push("/panel/tourist/tests");
      } catch (error) {
        console.log(error);
      }
    },

    async onSubmit(){
      this.notAnswerYet = false;
      for(const key in this.formData){
        const value = this.formData[key]
        if(!value){
          this.notAnswerYet = true;
          return;
        }
      }
      try {
        // console.log(
        //   {...this.formData, user: this.userInfo?.id}
        // )
        // return;
        const res = await this.$axios.post(
          "/api/psychologicalTesting/descriptive-questions-create/",
          {...this.formData, user: this.userInfo?.id}
        );
        this.$nuxt.refresh()
        // this.$router.push("/panel/tourist/tests");
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
      notAnswerYet: false,
      formData: {
        'badtarin_title': "",
        'badtarin_country': "",
        'badtarin_city': "",
        'badtarin_descriptions': "",
        'normaltarin_title': "",
        'normaltarin_country': "",
        'normaltarin_city': "",
        'normaltarin_descriptions': "",
        'behtrin_title': "",
        'behtarin_country': "",
        'behtarin_city': "",
        'behratin_descriptions': "",
      },
      questions: [
        {text: "worse title", key: "badtarin_title"},
        {text: "worse country", key: "badtarin_country"},
        {text: "worse city", key: "badtarin_city"},
        {text: "worse description", key: "badtarin_descriptions"},
        {text: "normalest title", key: "normaltarin_title"},
        {text: "normalest country", key: "normaltarin_country"},
        {text: "normalest city", key: "normaltarin_city"},
        {text: "normalest description", key: "normaltarin_descriptions"},
        {text: "best title", key: "behtrin_title"},
        {text: "best country", key: "behtarin_country"},
        {text: "best city", key: "behtarin_city"},
        {text: "best description", key: "behratin_descriptions"},
      ],
    };
  },
};
</script>

<style></style>
