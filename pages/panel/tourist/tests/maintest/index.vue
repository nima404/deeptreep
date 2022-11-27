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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q1 == 'Q1A1' }"
        />
        <img
          src="/Q1A2.jpg"
          @click="formData.q1 = 'Q1A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q1 == 'Q1A2' }"
        />
        <img
          src="/Q1A3.jpg"
          @click="formData.q1 = 'Q1A3'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q2 == 'Q2A1' }"
        />
        <img
          src="/Q2A2.jpg"
          @click="formData.q2 = 'Q2A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q2 == 'Q2A2' }"
        />
        <img
          src="/Q2A3.jpg"
          @click="formData.q2 = 'Q2A3'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q3 == 'Q3A1' }"
        />
        <img
          src="/Q3A2.jpg"
          @click="formData.q3 = 'Q3A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q3 == 'Q3A2' }"
        />
        <img
          src="/Q3A3.jpg"
          @click="formData.q3 = 'Q3A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q3 == 'Q3A3' }"
        />
        <img
          src="/Q3A4.jpg"
          @click="formData.q3 = 'Q3A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q4 == 'Q4A1' }"
        />
        <img
          src="/Q4A2.jpg"
          @click="formData.q4 = 'Q4A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q4 == 'Q4A2' }"
        />
        <img
          src="/Q4A3.jpg"
          @click="formData.q4 = 'Q4A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q4 == 'Q4A3' }"
        />
        <img
          src="/Q4A4.jpg"
          @click="formData.q4 = 'Q4A5'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q4 == 'Q4A5' }"
        />
      </div>
      <div>
        Q5.Which of the following images do you prefer? To understand the
        interest in the travel vehicle
      </div>
      <div class="row mt-2 mb-5">
        <img
          src="/Q5A1.jpg"
          @click="formData.q5 = 'Q5A1'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q5 == 'Q5A1' }"
        />
        <img
          src="/Q5A2.jpg"
          @click="formData.q5 = 'Q5A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q5 == 'Q5A2' }"
        />
        <img
          src="/Q5A3.jpg"
          @click="formData.q5 = 'Q5A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q5 == 'Q5A3' }"
        />
        <img
          src="/Q5A4.jpg"
          @click="formData.q5 = 'Q5A4'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q5 == 'Q5A4' }"
        />
        <img
          src="/Q5A5.jpg"
          @click="formData.q5 = 'Q5A5'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q6 == 'Q6A1' }"
        />
        <img
          src="/Q6A2.jpg"
          @click="formData.q6 = 'Q6A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q6 == 'Q6A2' }"
        />
        <img
          src="/Q6A3.jpg"
          @click="formData.q6 = 'Q6A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q6 == 'Q6A3' }"
        />
        <img
          src="/Q6A4.jpg"
          @click="formData.q6 = 'Q6A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q7 == 'Q7A1' }"
        />
        <img
          src="/Q7A2.jpg"
          @click="formData.q7 = 'Q7A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q7 == 'Q7A2' }"
        />
        <img
          src="/Q7A3.jpg"
          @click="formData.q7 = 'Q7A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q7 == 'Q7A3' }"
        />
        <img
          src="/Q7A4.jpg"
          @click="formData.q7 = 'Q7A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q8 == 'Q8A1' }"
        />
        <img
          src="/Q8A2.jpg"
          @click="formData.q8 = 'Q8A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q8 == 'Q8A2' }"
        />
        <img
          src="/Q8A3.jpg"
          @click="formData.q8 = 'Q8A3'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q9 == 'Q9A1' }"
        />
        <img
          src="/Q9A2.jpg"
          @click="formData.q9 = 'Q9A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q9 == 'Q9A2' }"
        />
        <img
          src="/Q9A3.jpg"
          @click="formData.q9 = 'Q9A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q9 == 'Q9A3' }"
        />
        <img
          src="/Q9A4.jpg"
          @click="formData.q9 = 'Q9A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q10 == 'Q10A1' }"
        />
        <img
          src="/Q10A2.jpg"
          @click="formData.q10 = 'Q10A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q10 == 'Q10A2' }"
        />
        <img
          src="/Q10A3.jpg"
          @click="formData.q10 = 'Q10A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q10 == 'Q10A3' }"
        />
        <img
          src="/Q10A4.jpg"
          @click="formData.q10 = 'Q10A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q11 == 'Q11A1' }"
        />
        <img
          src="/Q11A2.jpg"
          @click="formData.q11 = 'Q11A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q11 == 'Q11A2' }"
        />
        <img
          src="/Q11A3.jpg"
          @click="formData.q11 = 'Q11A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q11 == 'Q11A3' }"
        />
        <img
          src="/Q11A4.webp"
          @click="formData.q11 = 'Q11A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q12 == 'Q12A1' }"
        />
        <img
          src="/Q12A2.webp"
          @click="formData.q12 = 'Q12A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q12 == 'Q12A2' }"
        />
        <img
          src="/Q12A3.jpg"
          @click="formData.q12 = 'Q12A3'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q12 == 'Q12A3' }"
        />
        <img
          src="/Q12A4.jpg"
          @click="formData.q12 = 'Q12A4'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q13 == 'Q13A1' }"
        />
        <img
          src="/Q13A2.jpg"
          @click="formData.q13 = 'Q13A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q13 == 'Q13A2' }"
        />
        <img
          src="/Q13A3.jpg"
          @click="formData.q13 = 'Q13A3'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q14 == 'Q14A1' }"
        />
        <img
          src="/Q14A2.jpg"
          @click="formData.q14 = 'Q14A2'"
          alt=""
          class="p-2 pointer test-page-img"
          :class="{ active: formData.q14 == 'Q14A2' }"
        />
        <img
          src="/Q14A3.jpg"
          @click="formData.q14 = 'Q14A3'"
          alt=""
          class="p-2 pointer test-page-img"
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
          class="p-2 pointer"
          :class="{ active: formData.q15 == 'Q15A1' }"
        >
          I don&#39;t enjoy being surprised
        </div>
        <div
          @click="formData.q15 = 'Q15A2'"
          class="p-2 pointer"
          :class="{ active: formData.q15 == 'Q15A2' }"
        >
          I enjoy being surprised
        </div>
      </div>
      <button class="btn btn-success mt-3" @click="send">send</button>
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-12">
        <div class="card overflow-hidden shadow">
          <h5 class="card-body bg-info text-light text-center mb-0">main test result</h5>
          <div class="card-body">
            <p class="card-text">
              <div class="border-bottom py-2 d-flex justify-content-between flex-column flex-lg-row"><span>
                1.To understand interest in city/nature
              </span> <span class="text-primary">{{ translateQ1(test.q1.split('A')[1])}}</span></div>
      <div class="border-bottom py-2 d-flex justify-content-between flex-column flex-lg-row">
        <span>2.To understand the interest in the seasons</span>
        <span class="text-primary">{{ translateQ12(test.q2.split('A')[1]) }}</span>
      </div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>3.To understand the interest in regular action</span> <span class="text-primary">{{ translateQ3(test.q3.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>4.To understand the preferred mode of travel from a human perspective</span> <span class="text-primary">{{ translateQ4(test.q4.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>5.To understand the interest in the travel vehicle</span> <span class="text-primary">{{ translateQ5(test.q5.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>6.To understand the type of music you like</span> <span class="text-primary">{{ translateQ6(test.q6.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>7.To understand the type of relationship with animals</span> <span class="text-primary">{{ translateQ7(test.q7.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>8.To understand the type of relationship of local people</span> <span class="text-primary">{{ translateQ8(test.q8.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>9.To understand the type of favorite food</span> <span class="text-primary">{{ translateQ9(test.q9.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>10.To understand the type of evening entertainment</span> <span class="text-primary">{{ translateQ10(test.q10.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>11.To understand the type of nightlife</span> <span class="text-primary">{{ translateQ11(test.q11.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>12.To understand interest or lack of interest in emotional-risky actions</span> <span class="text-primary">{{ translateQ12(test.q12.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>13.To understand overview or detail</span> <span class="text-primary">{{ translateQ13(test.q13.split('A')[1]) }}</span></div>
      <div class="border-bottom py-2 d-flex flex-column flex-lg-row justify-content-between"><span>14.To understand the speed interest in visits</span> <span class="text-primary">{{ translateQ14(test.q14.split('A')[1]) }}</span></div>
      <div class="py-2 d-flex flex-column flex-lg-row justify-content-between"><span>15.To understand how control is applied</span> <span class="text-primary">{{ translateQ15(test.q15.split('A')[1]) }}</span></div>
            </p>
          </div>
        </div>
        <button class="btn btn-info mt-3 w-100" @click="onTestAgain">test again</button>

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
    let test = {};
    try {
      test = await $axios.get("/api/psychologicalTesting/maintest/");
    } catch {}

    return {
      test: test?.data?.results[0] || null,
    };
  },
  methods: {
    translateQ1(answer){
      if(answer == "1"){
        return "Modern urban space"
      }else if(answer == "2"){
        return "Ancient urban space"
      }else if(answer == "3"){
        return "Nature"
      }
    },
    translateQ2(answer){
      if(answer == "1"){
        return "Winter"
      }else if(answer == "2"){
        return "Spring/Summer"
      }else if(answer == "3"){
        return "Autumn"
      }
    },
    translateQ3(answer){
      if(answer == "1"){
        return "Shopping center"
      }else if(answer == "2"){
        return "Concert"
      }else if(answer == "3"){
        return "Sport"
      }else if(answer == "4"){
        return "Resting on the beach"
      }
    },
    translateQ4(answer){
      if(answer == "1"){
        return "Family traveling"
      }else if(answer == "2"){
        return "Lonely traveler"
      }else if(answer == "3"){
        return "Traveling couple"
      }else if(answer == "4"){
        return "Traveling group"
      }
    },
    translateQ5(answer){
      if(answer == "1"){
        return "Normal car"
      }else if(answer == "2"){
        return "Airplane"
      }else if(answer == "3"){
        return "Train"
      }else if(answer == "4"){
        return "Camper and van"
      }else if(answer == "5"){
        return "Ship"
      }
    },
    translateQ6(answer){
      if(answer == "1"){
        return "Classical music concert"
      }else if(answer == "2"){
        return "Rock/Metal concert"
      }else if(answer == "3"){
        return "Folk concert"
      }else if(answer == "4"){
        return "Jazz concert(Open air)"
      }
    },
    translateQ7(answer){
      if(answer == "1"){
        return "Normal park with animals"
      }else if(answer == "2"){
        return "Zoo"
      }else if(answer == "3"){
        return "Hunting"
      }else if(answer == "4"){
        return "Fishing"
      }
    },
    translateQ8(answer){
      if(answer == "1"){
        return "Photo with local people"
      }else if(answer == "2"){
        return "Traveler in local dress"
      }
      else if(answer == "3"){
        return "City square view from hotel room"
      }
    },
    translateQ9(answer){
      if(answer == "1"){
        return "Classic restaurant"
      }else if(answer == "2"){
        return "Local food"
      }else if(answer == "3"){
        return "Fast food"
      }else if(answer == "4"){
        return "Street junk food"
      }
    },
    translateQ10(answer){
      if(answer == "1"){
        return "Walking"
      }else if(answer == "2"){
        return "Coffee shop"
      }else if(answer == "3"){
        return "Museum"
      }else if(answer == "4"){
        return "Pub"
      }
    },
    translateQ11(answer){
      if(answer == "1"){
        return "Dance club"
      }else if(answer == "2"){
        return "Couple on the beach"
      }else if(answer == "3"){
        return "Hotel’s roof garden with drinks and candles"
      }else if(answer == "4"){
        return "Wine bar"
      }
    },
    translateQ12(answer){
      if(answer == "1"){
        return "Bungee jumping"
      }else if(answer == "2"){
        return ":Off-road trip"
      }else if(answer == "3"){
        return "Amusement park"
      }else if(answer == "4"){
        return "Disneyland"
      }
    },
    translateQ13(answer){
      if(answer == "1"){
        return "Wide view"
      }else if(answer == "2"){
        return "Medium shot view"
      }else if(answer == "3"){
        return "Close-up"
      }
    },
    translateQ14(answer){
      if(answer == "1"){
        return "Fast"
      }else if(answer == "2"){
        return "Normal"
      }else if(answer == "3"){
        return "Slow"
      }
    },
    translateQ15(answer){
      if(answer == "1"){
        return "I don’t enjoy being surprised"
      }else if(answer == "2"){
        return "I enjoy being surprised"
      }
    },
    async onTestAgain(){
      try {
        const res = await this.$axios.delete(
          "/api/psychologicalTesting/maintest-delete/",
        );
        console.log(res);
        this.test = null
        // this.$router.push("/panel/tourist/tests");
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
        this.$router.push("/panel/tourist/tests");
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

.test-page-img{
  width:200px;
  height:200px;
}
</style>
