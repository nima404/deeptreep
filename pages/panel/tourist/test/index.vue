<template>
  <div>
    <div v-if="test == null">
      <div>
        Q1.Which of the following images do you prefer? To understand interest
        in city/nature
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q1A1.jpg"
          @click="formData.Q1 = 'Q1A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q1 == 'Q1A1' }"
        />
        <img
          src="/Q1A2.jpg"
          @click="formData.Q1 = 'Q1A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q1 == 'Q1A2' }"
        />
        <img
          src="/Q1A3.jpg"
          @click="formData.Q1 = 'Q1A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q1 == 'Q1A3' }"
        />
      </div>
      <div>
        Q2.Which of the following images do you prefer? To understand the
        interest in the seasons
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q2A1.jpg"
          @click="formData.Q2 = 'Q2A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q2 == 'Q2A1' }"
        />
        <img
          src="/Q2A2.jpg"
          @click="formData.Q2 = 'Q2A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q2 == 'Q2A2' }"
        />
        <img
          src="/Q2A3.jpg"
          @click="formData.Q2 = 'Q2A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q2 == 'Q2A3' }"
        />
      </div>
      <div>
        Q3.Which of the following images do you prefer? To understand the
        interest in regular action
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q3A1.jpg"
          @click="formData.Q3 = 'Q3A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q3 == 'Q3A1' }"
        />
        <img
          src="/Q3A2.jpg"
          @click="formData.Q3 = 'Q3A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q3 == 'Q3A2' }"
        />
        <img
          src="/Q3A3.jpg"
          @click="formData.Q3 = 'Q3A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q3 == 'Q3A3' }"
        />
        <img
          src="/Q3A4.jpg"
          @click="formData.Q3 = 'Q3A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q3 == 'Q3A4' }"
        />
      </div>
      <div>
        Q4.Which of the following images do you prefer? To understand the
        preferred mode of travel from a human perspective
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q4A1.jpg"
          @click="formData.Q4 = 'Q4A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q4 == 'Q4A1' }"
        />
        <img
          src="/Q4A2.jpg"
          @click="formData.Q4 = 'Q4A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q4 == 'Q4A2' }"
        />
        <img
          src="/Q4A3.jpg"
          @click="formData.Q4 = 'Q4A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q4 == 'Q4A3' }"
        />
        <img
          src="/Q4A4.jpg"
          @click="formData.Q4 = 'Q4A5'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q4 == 'Q4A5' }"
        />
      </div>
      <div>
        Q5.Which of the following images do you prefer? To understand the
        interest in the travel vehicle
      </div>
      <div class="row mt-2 mb-5 justify-content-between">
        <img
          src="/Q5A1.jpg"
          @click="formData.Q5 = 'Q5A1'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.Q5 == 'Q5A1' }"
        />
        <img
          src="/Q5A2.jpg"
          @click="formData.Q5 = 'Q5A2'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.Q5 == 'Q5A2' }"
        />
        <img
          src="/Q5A3.jpg"
          @click="formData.Q5 = 'Q5A3'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.Q5 == 'Q5A3' }"
        />
        <img
          src="/Q5A4.jpg"
          @click="formData.Q5 = 'Q5A4'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.Q5 == 'Q5A4' }"
        />
        <img
          src="/Q5A5.jpg"
          @click="formData.Q5 = 'Q5A5'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.Q5 == 'Q5A5' }"
        />
      </div>
      <div>
        Q6.Which of the following images do you prefer? To understand the type
        of music you like
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q6A1.jpg"
          @click="formData.Q6 = 'Q6A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q6 == 'Q6A1' }"
        />
        <img
          src="/Q6A2.jpg"
          @click="formData.Q6 = 'Q6A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q6 == 'Q6A2' }"
        />
        <img
          src="/Q6A3.jpg"
          @click="formData.Q6 = 'Q6A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q6 == 'Q6A3' }"
        />
        <img
          src="/Q6A4.jpg"
          @click="formData.Q6 = 'Q6A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q6 == 'Q6A4' }"
        />
      </div>
      <div>
        Q7.Which of the following images do you prefer? To understand the type
        of relationship with animals
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q7A1.jpg"
          @click="formData.Q7 = 'Q7A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q7 == 'Q7A1' }"
        />
        <img
          src="/Q7A2.jpg"
          @click="formData.Q7 = 'Q7A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q7 == 'Q7A2' }"
        />
        <img
          src="/Q7A3.jpg"
          @click="formData.Q7 = 'Q7A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q7 == 'Q7A3' }"
        />
        <img
          src="/Q7A4.jpg"
          @click="formData.Q7 = 'Q7A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q7 == 'Q7A4' }"
        />
      </div>
      <div>
        Q8.Which of the following images do you prefer? To understand the type
        of relationship of local people
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q8A1.jpg"
          @click="formData.Q8 = 'Q8A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q8 == 'Q8A1' }"
        />
        <img
          src="/Q8A2.jpg"
          @click="formData.Q8 = 'Q8A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q8 == 'Q8A2' }"
        />
        <img
          src="/Q8A3.jpg"
          @click="formData.Q8 = 'Q8A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q8 == 'Q8A3' }"
        />
      </div>
      <div>
        Q9.Which of the following images do you prefer? To understand the type
        of favorite food
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q9A1.jpg"
          @click="formData.Q9 = 'Q9A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q9 == 'Q9A1' }"
        />
        <img
          src="/Q9A2.jpg"
          @click="formData.Q9 = 'Q9A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q9 == 'Q9A2' }"
        />
        <img
          src="/Q9A3.jpg"
          @click="formData.Q9 = 'Q9A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q9 == 'Q9A3' }"
        />
        <img
          src="/Q9A4.jpg"
          @click="formData.Q9 = 'Q9A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q9 == 'Q9A4' }"
        />
      </div>
      <div>
        Q10.Which of the following images do you prefer? To understand the type
        of evening entertainment
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q10A1.jpg"
          @click="formData.Q10 = 'Q10A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q10 == 'Q10A1' }"
        />
        <img
          src="/Q10A2.jpg"
          @click="formData.Q10 = 'Q10A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q10 == 'Q10A2' }"
        />
        <img
          src="/Q10A3.jpg"
          @click="formData.Q10 = 'Q10A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q10 == 'Q10A3' }"
        />
        <img
          src="/Q10A4.jpg"
          @click="formData.Q10 = 'Q10A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q10 == 'Q10A4' }"
        />
      </div>
      <div>
        Q11.Which of the following images do you prefer? To understand the type
        of nightlife
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q11A1.jpg"
          @click="formData.Q11 = 'Q11A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q11 == 'Q11A1' }"
        />
        <img
          src="/Q11A2.jpg"
          @click="formData.Q11 = 'Q11A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q11 == 'Q11A2' }"
        />
        <img
          src="/Q11A3.jpg"
          @click="formData.Q11 = 'Q11A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q11 == 'Q11A3' }"
        />
        <img
          src="/Q11A4.webp"
          @click="formData.Q11 = 'Q11A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q11 == 'Q11A4' }"
        />
      </div>
      <div>
        Q12.Which of the following images do you prefer? To understand interest
        or lack of interest in emotional-risky actions
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q12A1.webp"
          @click="formData.Q12 = 'Q12A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q12 == 'Q12A1' }"
        />
        <img
          src="/Q12A2.webp"
          @click="formData.Q12 = 'Q12A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q12 == 'Q12A2' }"
        />
        <img
          src="/Q12A3.jpg"
          @click="formData.Q12 = 'Q12A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q12 == 'Q12A3' }"
        />
        <img
          src="/Q12A4.jpg"
          @click="formData.Q12 = 'Q12A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.Q12 == 'Q12A4' }"
        />
      </div>
      <div>
        Q13.Which of the following images do you prefer? To understand overview
        or detail
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q13A1.jpg"
          @click="formData.Q13 = 'Q13A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q13 == 'Q13A1' }"
        />
        <img
          src="/Q13A2.jpg"
          @click="formData.Q13 = 'Q13A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q13 == 'Q13A2' }"
        />
        <img
          src="/Q13A3.jpg"
          @click="formData.Q13 = 'Q13A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q13 == 'Q13A3' }"
        />
      </div>
      <div>
        Q14.Which of the following images do you prefer? To understand the speed
        interest in visits
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q14A1.jpg"
          @click="formData.Q14 = 'Q14A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q14 == 'Q14A1' }"
        />
        <img
          src="/Q14A2.jpg"
          @click="formData.Q14 = 'Q14A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q14 == 'Q14A2' }"
        />
        <img
          src="/Q14A3.jpg"
          @click="formData.Q14 = 'Q14A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.Q14 == 'Q14A3' }"
        />
      </div>
      <div>
        Q15.Which of the following images do you prefer? To understand how
        control is applied
      </div>
      <div class="row mt-2 mb-5">
        <div
          @click="formData.Q15 = 'Q15A1'"
          class="col-6 p-2 pointer"
          :class="{ active: formData.Q15 == 'Q15A1' }"
        >
          I don&#39;t enjoy being surprised
        </div>
        <div
          @click="formData.Q15 = 'Q15A2'"
          class="col-6 p-2 pointer"
          :class="{ active: formData.Q15 == 'Q15A2' }"
        >
          I enjoy being surprised
        </div>
      </div>
      <button class="btn btn-success mt-3" @click="send">send</button>
    </div>
    <div v-else>
      <div class="col-12 border-bottom py-2">Q1: {{ test.q1 }}</div>
      <div class="col-12 border-bottom py-2">Q2: {{ test.q2 }}</div>
      <div class="col-12 border-bottom py-2">Q3: {{ test.q3 }}</div>
      <div class="col-12 border-bottom py-2">Q4: {{ test.q4 }}</div>
      <div class="col-12 border-bottom py-2">Q5: {{ test.q5 }}</div>
      <div class="col-12 border-bottom py-2">Q6: {{ test.q6 }}</div>
      <div class="col-12 border-bottom py-2">Q7: {{ test.q7 }}</div>
      <div class="col-12 border-bottom py-2">Q8: {{ test.q8 }}</div>
      <div class="col-12 border-bottom py-2">Q9: {{ test.q9 }}</div>
      <div class="col-12 border-bottom py-2">Q10: {{ test.q10 }}</div>
      <div class="col-12 border-bottom py-2">Q11: {{ test.q11 }}</div>
      <div class="col-12 border-bottom py-2">Q12: {{ test.q12 }}</div>
      <div class="col-12 border-bottom py-2">Q13: {{ test.q13 }}</div>
      <div class="col-12 border-bottom py-2">Q14: {{ test.q14 }}</div>
      <div class="col-12 border-bottom py-2">Q15: {{ test.q15 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  layout: "tourist",

  data() {
    return {
      formData: {
        Q1: "Q1A1",
        Q2: "Q2A1",
        Q3: "Q3A1",
        Q4: "Q4A1",
        Q5: "Q5A1",
        Q6: "Q6A1",
        Q7: "Q7A1",
        Q8: "Q8A1",
        Q9: "Q9A1",
        Q10: "Q10A1",
        Q11: "Q11A1",
        Q12: "Q12A1",
        Q13: "Q13A1",
        Q14: "Q14A1",
        Q15: "Q15A1",
      },
    };
  },

  async asyncData({ $axios }) {
    let user = {};
    let test = {};
    try {
      user = await $axios.get("api/usersmodel/user-info/");
      test = await $axios.get("/api/psychologicalTesting/maintest/");
    } catch {}

    return {
      test: test?.data?.results[0] || null,
      user: user?.data?.results[0]?.id || {},
    };
  },
  methods: {
    async send() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.formData) {
          bodyFormData.append(property, this.formData[property]);
        }
        bodyFormData.append("user", this.user);
        const res = await this.$axios.post(
          "api/psychologicalTesting/maintest-create/",
          bodyFormData
        );
        console.log(res);
        this.$router.push("/panel/tourist/profile");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.active {
  border: solid green 3px;
}
</style>
