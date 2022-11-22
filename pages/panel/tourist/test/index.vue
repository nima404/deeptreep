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
          @click="formData.q1 = 'Q1A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q1 == 'Q1A1' }"
        />
        <img
          src="/Q1A2.jpg"
          @click="formData.q1 = 'Q1A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q1 == 'Q1A2' }"
        />
        <img
          src="/Q1A3.jpg"
          @click="formData.q1 = 'Q1A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q1 == 'Q1A3' }"
        />
      </div>
      <div>
        Q2.Which of the following images do you prefer? To understand the
        interest in the seasons
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q2A1.jpg"
          @click="formData.q2 = 'Q2A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q2 == 'Q2A1' }"
        />
        <img
          src="/Q2A2.jpg"
          @click="formData.q2 = 'Q2A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q2 == 'Q2A2' }"
        />
        <img
          src="/Q2A3.jpg"
          @click="formData.q2 = 'Q2A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q2 == 'Q2A3' }"
        />
      </div>
      <div>
        Q3.Which of the following images do you prefer? To understand the
        interest in regular action
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q3A1.jpg"
          @click="formData.q3 = 'Q3A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q3 == 'Q3A1' }"
        />
        <img
          src="/Q3A2.jpg"
          @click="formData.q3 = 'Q3A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q3 == 'Q3A2' }"
        />
        <img
          src="/Q3A3.jpg"
          @click="formData.q3 = 'Q3A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q3 == 'Q3A3' }"
        />
        <img
          src="/Q3A4.jpg"
          @click="formData.q3 = 'Q3A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q3 == 'Q3A4' }"
        />
      </div>
      <div>
        Q4.Which of the following images do you prefer? To understand the
        preferred mode of travel from a human perspective
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q4A1.jpg"
          @click="formData.q4 = 'Q4A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q4 == 'Q4A1' }"
        />
        <img
          src="/Q4A2.jpg"
          @click="formData.q4 = 'Q4A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q4 == 'Q4A2' }"
        />
        <img
          src="/Q4A3.jpg"
          @click="formData.q4 = 'Q4A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q4 == 'Q4A3' }"
        />
        <img
          src="/Q4A4.jpg"
          @click="formData.q4 = 'Q4A5'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q4 == 'Q4A5' }"
        />
      </div>
      <div>
        Q5.Which of the following images do you prefer? To understand the
        interest in the travel vehicle
      </div>
      <div class="row mt-2 mb-5 justify-content-between">
        <img
          src="/Q5A1.jpg"
          @click="formData.q5 = 'Q5A1'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.q5 == 'Q5A1' }"
        />
        <img
          src="/Q5A2.jpg"
          @click="formData.q5 = 'Q5A2'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.q5 == 'Q5A2' }"
        />
        <img
          src="/Q5A3.jpg"
          @click="formData.q5 = 'Q5A3'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.q5 == 'Q5A3' }"
        />
        <img
          src="/Q5A4.jpg"
          @click="formData.q5 = 'Q5A4'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.q5 == 'Q5A4' }"
        />
        <img
          src="/Q5A5.jpg"
          @click="formData.q5 = 'Q5A5'"
          alt=""
          class="col-2 p-2 pointer"
          :class="{ active: formData.q5 == 'Q5A5' }"
        />
      </div>
      <div>
        Q6.Which of the following images do you prefer? To understand the type
        of music you like
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q6A1.jpg"
          @click="formData.q6 = 'Q6A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q6 == 'Q6A1' }"
        />
        <img
          src="/Q6A2.jpg"
          @click="formData.q6 = 'Q6A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q6 == 'Q6A2' }"
        />
        <img
          src="/Q6A3.jpg"
          @click="formData.q6 = 'Q6A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q6 == 'Q6A3' }"
        />
        <img
          src="/Q6A4.jpg"
          @click="formData.q6 = 'Q6A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q6 == 'Q6A4' }"
        />
      </div>
      <div>
        Q7.Which of the following images do you prefer? To understand the type
        of relationship with animals
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q7A1.jpg"
          @click="formData.q7 = 'Q7A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q7 == 'Q7A1' }"
        />
        <img
          src="/Q7A2.jpg"
          @click="formData.q7 = 'Q7A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q7 == 'Q7A2' }"
        />
        <img
          src="/Q7A3.jpg"
          @click="formData.q7 = 'Q7A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q7 == 'Q7A3' }"
        />
        <img
          src="/Q7A4.jpg"
          @click="formData.q7 = 'Q7A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q7 == 'Q7A4' }"
        />
      </div>
      <div>
        Q8.Which of the following images do you prefer? To understand the type
        of relationship of local people
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q8A1.jpg"
          @click="formData.q8 = 'Q8A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q8 == 'Q8A1' }"
        />
        <img
          src="/Q8A2.jpg"
          @click="formData.q8 = 'Q8A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q8 == 'Q8A2' }"
        />
        <img
          src="/Q8A3.jpg"
          @click="formData.q8 = 'Q8A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q8 == 'Q8A3' }"
        />
      </div>
      <div>
        Q9.Which of the following images do you prefer? To understand the type
        of favorite food
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q9A1.jpg"
          @click="formData.q9 = 'Q9A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q9 == 'Q9A1' }"
        />
        <img
          src="/Q9A2.jpg"
          @click="formData.q9 = 'Q9A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q9 == 'Q9A2' }"
        />
        <img
          src="/Q9A3.jpg"
          @click="formData.q9 = 'Q9A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q9 == 'Q9A3' }"
        />
        <img
          src="/Q9A4.jpg"
          @click="formData.q9 = 'Q9A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q9 == 'Q9A4' }"
        />
      </div>
      <div>
        Q10.Which of the following images do you prefer? To understand the type
        of evening entertainment
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q10A1.jpg"
          @click="formData.q10 = 'Q10A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q10 == 'Q10A1' }"
        />
        <img
          src="/Q10A2.jpg"
          @click="formData.q10 = 'Q10A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q10 == 'Q10A2' }"
        />
        <img
          src="/Q10A3.jpg"
          @click="formData.q10 = 'Q10A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q10 == 'Q10A3' }"
        />
        <img
          src="/Q10A4.jpg"
          @click="formData.q10 = 'Q10A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q10 == 'Q10A4' }"
        />
      </div>
      <div>
        Q11.Which of the following images do you prefer? To understand the type
        of nightlife
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q11A1.jpg"
          @click="formData.q11 = 'Q11A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q11 == 'Q11A1' }"
        />
        <img
          src="/Q11A2.jpg"
          @click="formData.q11 = 'Q11A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q11 == 'Q11A2' }"
        />
        <img
          src="/Q11A3.jpg"
          @click="formData.q11 = 'Q11A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q11 == 'Q11A3' }"
        />
        <img
          src="/Q11A4.webp"
          @click="formData.q11 = 'Q11A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q11 == 'Q11A4' }"
        />
      </div>
      <div>
        Q12.Which of the following images do you prefer? To understand interest
        or lack of interest in emotional-risky actions
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q12A1.webp"
          @click="formData.q12 = 'Q12A1'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q12 == 'Q12A1' }"
        />
        <img
          src="/Q12A2.webp"
          @click="formData.q12 = 'Q12A2'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q12 == 'Q12A2' }"
        />
        <img
          src="/Q12A3.jpg"
          @click="formData.q12 = 'Q12A3'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q12 == 'Q12A3' }"
        />
        <img
          src="/Q12A4.jpg"
          @click="formData.q12 = 'Q12A4'"
          alt=""
          class="col-3 p-2 pointer"
          :class="{ active: formData.q12 == 'Q12A4' }"
        />
      </div>
      <div>
        Q13.Which of the following images do you prefer? To understand overview
        or detail
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q13A1.jpg"
          @click="formData.q13 = 'Q13A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q13 == 'Q13A1' }"
        />
        <img
          src="/Q13A2.jpg"
          @click="formData.q13 = 'Q13A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q13 == 'Q13A2' }"
        />
        <img
          src="/Q13A3.jpg"
          @click="formData.q13 = 'Q13A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q13 == 'Q13A3' }"
        />
      </div>
      <div>
        Q14.Which of the following images do you prefer? To understand the speed
        interest in visits
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q14A1.jpg"
          @click="formData.q14 = 'Q14A1'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q14 == 'Q14A1' }"
        />
        <img
          src="/Q14A2.jpg"
          @click="formData.q14 = 'Q14A2'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q14 == 'Q14A2' }"
        />
        <img
          src="/Q14A3.jpg"
          @click="formData.q14 = 'Q14A3'"
          alt=""
          class="col-4 p-2 pointer"
          :class="{ active: formData.q14 == 'Q14A3' }"
        />
      </div>
      <div>
        Q15.Which of the following images do you prefer? To understand how
        control is applied
      </div>
      <div class="row mt-2 mb-5">
        <div
          @click="formData.q15 = 'Q15A1'"
          class="col-6 p-2 pointer"
          :class="{ active: formData.q15 == 'Q15A1' }"
        >
          I don&#39;t enjoy being surprised
        </div>
        <div
          @click="formData.q15 = 'Q15A2'"
          class="col-6 p-2 pointer"
          :class="{ active: formData.q15 == 'Q15A2' }"
        >
          I enjoy being surprised
        </div>
      </div>
      <button class="btn btn-success mt-3" @click="send">send</button>
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-12 col-sm-6 col-lg-5">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">test grade</h5>
            <p class="card-text">
              <div class="border-bottom py-2 d-flex justify-content-between"><span>Q1</span> <span>{{ test.q1 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between">
        <span>Q2</span>
        <span>{{ test.q2 }}</span>
      </div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q3</span> <span>{{ test.q3 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q4</span> <span>{{ test.q4 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q5</span> <span>{{ test.q5 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q6</span> <span>{{ test.q6 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q7</span> <span>{{ test.q7 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q8</span> <span>{{ test.q8 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q9</span> <span>{{ test.q9 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q10</span> <span>{{ test.q10 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q11</span> <span>{{ test.q11 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q12</span> <span>{{ test.q12 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q13</span> <span>{{ test.q13 }}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between"><span>Q14</span> <span>{{ test.q14 }}</span></div>
      <div class="py-2 d-flex justify-content-between"><span>Q15</span> <span>{{ test.q15 }}</span></div>
            </p>
          </div>
        </div>
        <button class="btn btn-danger mt-3 w-100" @click="onTestAgain">test again</button>

      </div>

      
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
        q1: "Q1A1",
        q2: "Q2A1",
        q3: "Q3A1",
        q4: "Q4A1",
        q5: "Q5A1",
        q6: "Q6A1",
        q7: "Q7A1",
        q8: "Q8A1",
        q9: "Q9A1",
        q10: "Q10A1",
        q11: "Q11A1",
        q12: "Q12A1",
        q13: "Q13A1",
        q14: "Q14A1",
        q15: "Q15A1",
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
    async onTestAgain(){
      try {
        const res = await this.$axios.delete(
          "/api/psychologicalTesting/maintest-delete/",
        );
        console.log(res);
        this.$router.push("/panel/tourist/profile");
      } catch (error) {
        console.log(error);
      }
    },
    async send() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.formData) {
          bodyFormData.append(property, this.formData[property]);
        }
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
