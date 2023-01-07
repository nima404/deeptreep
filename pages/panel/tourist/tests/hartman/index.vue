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
            {{ question.number }}. <b>{{ question.text }}</b>
          </p>

          <label
            class="d-inline-flex justify-content-center align-items-center mr-3"
          >
            <input type="radio" :name="`hartman-${question.number}`" :value="'Q' + question.number + 'A'" v-model="formData['q' + question.number]" />
            <span class="ml-1">{{ question.a }}</span>
          </label>

          <label
            class="d-inline-flex justify-content-center align-items-center mr-3"
          >
            <input type="radio" :name="`hartman-${question.number}`" :value="'Q' + question.number + 'B'" v-model="formData['q' + question.number]" />
            <span class="ml-1">{{ question.b }}</span>
          </label>

          <label
            class="d-inline-flex justify-content-center align-items-center mr-3"
          >
            <input type="radio" :name="`hartman-${question.number}`" :value="'Q' + question.number + 'C'" v-model="formData['q' + question.number]" />
            <span class="ml-1">{{ question.c }}</span>
          </label>

          <label
            class="d-inline-flex justify-content-center align-items-center"
          >
            <input type="radio" :name="`hartman-${question.number}`" :value="'Q' + question.number + 'D'" v-model="formData['q' + question.number]" />
            <span class="ml-1">{{ question.d }}</span>
          </label>
        </div>
      </div>
      <button class="btn btn-primary" @click="onSubmit">submit</button>
      <p class="text-danger" v-show="notAnswerYet">you did not answer some questions !</p>
    </div>
    <div v-else>
        <div class="card overflow-hidden shadow">
          <h5 class="card-body bg-info text-light text-center mb-0">hartman result</h5>
          <div class="card-body">
            <p class="card-text">
              <div class="border-bottom py-2 d-flex justify-content-between flex-column flex-lg-row" v-for="(question, i) in questions" :key="i">
                <span>
                  {{question.number}}. {{question.text}}
                </span>
                <span class="text-primary">{{whitchAnswer(question.number)}}</span>
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
    try {
      const test = await $axios.get("/api/psychologicalTesting/hasrtman/");
      return {
        test: test.data.results[0],
      };
    } catch (error) {
      return {
        test: null,
      };
    }
  },
  methods: {
    async onTestAgain(){
      try {
        const res = await this.$axios.delete(
          "/api/psychologicalTesting/hasrtman-delete/",
        );
        console.log(res);
        this.test = null
        // this.$router.push("/panel/tourist/tests");
      } catch (error) {
        console.log(error);
      }
    },

    whitchAnswer(number){
      const answer = this.test[`q${number}`]
      const option = answer.slice(-1).toLocaleLowerCase();
      return this.questions[number-1][option]
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
        const res = await this.$axios.post(
          "/api/psychologicalTesting/hasrtman-create/",
          this.formData
        );
        console.log(res);
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
        'q1': "",
        'q2': "",
        'q3': "",
        'q4': "",
        'q5': "",
        'q6': "",
        'q7': "",
        'q8': "",
        'q9': "",
        'q10': "",
        'q11': "",
        'q12': "",
        'q13': "",
        'q14': "",
        'q15': "",
        'q16': "",
        'q17': "",
        'q18': "",
        'q19': "",
        'q20': "",
        'q21': "",
        'q22': "",
        'q23': "",
        'q24': "",
        'q25': "",
        'q26': "",
        'q27': "",
        'q28': "",
        'q29': "",
        'q30': "",
        'q31': "",
        'q32': "",
        'q33': "",
        'q34': "",
        'q35': "",
        'q36': "",
        'q37': "",
        'q38': "",
        'q39': "",
        'q40': "",
        'q41': "",
        'q42': "",
        'q43': "",
        'q44': "",
        'q45': "",
      },
      questions: [
        {
          number: 1,
          text: "I Am",
          a: "proactive",
          b: "nurturing",
          c: "objective",
          d: "insightful",
        },
        {
          number: 2,
          text: "I was...",
          a: "indecisive",
          b: "arrogant",
          c: "a perfectionist",
          d: "poor follow through",
        },
        {
          number: 3,
          text: "I was...",
          a: "enthusiastic",
          b: "kind",
          c: "caring",
          d: "productive",
        },
        {
          number: 4,
          text: "I was...",
          a: "relentless",
          b: "suspicious",
          c: "indifferent",
          d: "naive",
        },
        {
          number: 5,
          text: "I was...",
          a: "peaceful",
          b: "carefree",
          c: "decisive",
          d: "loyal",
        },
        {
          number: 6,
          text: "I was...",
          a: "silently stubborn",
          b: "worry prone",
          c: "an interrupter",
          d: "obsessive",
        },
        {
          number: 7,
          text: "I was...",
          a: "sociable",
          b: "assertive",
          c: "intimate",
          d: "non-discriminate",
        },
        {
          number: 8,
          text: "I was...",
          a: "self critical",
          b: "bossy",
          c: "unfocused",
          d: "avoids conflict",
        },

        {
          number: 9,
          text: "I was...",
          a: "voice of reason",
          b: "flexible",
          c: "action-oriented",
          d: "analytical",
        },
        {
          number: 10,
          text: "I was...",
          a: "critical of others",
          b: "disinterested",
          c: "overly sensitive",
          d: "irresponsible",
        },
        {
          number: 11,
          text: "I was...",
          a: "determined",
          b: "thoughtful",
          c: "a good listener",
          d: "positive",
        },
        {
          number: 12,
          text: "I was...",
          a: "unmotivated",
          b: "vain",
          c: "demanding",
          d: "unforgiving",
        },
        {
          number: 13,
          text: "I was...",
          a: "happy",
          b: "compassionate",
          c: "inventive",
          d: "responsible",
        },
        {
          number: 14,
          text: "I was...",
          a: "impulsive",
          b: "impatient",
          c: "moody",
          d: "indirect communicator",
        },
        {
          number: 15,
          text: "I was...",
          a: "a leader",
          b: "patient",
          c: "fun-loving",
          d: "respectful",
        },
        {
          number: 16,
          text: "I was...",
          a: "jealous",
          b: "reluctant",
          c: "argumentative",
          d: "obnoxious",
        },
        {
          number: 17,
          text: "I was...",
          a: "even-tempered",
          b: "inclusive",
          c: "dependable",
          d: "focused",
        },
        {
          number: 18,
          text: "I was...",
          a: "overly aggressive",
          b: "low self-esteem",
          c: "ambivalent",
          d: "inconsistent",
        },
        {
          number: 19,
          text: "I was...",
          a: "deliberate",
          b: "powerful",
          c: "balanced",
          d: "persuasive",
        },
        {
          number: 20,
          text: "I was...",
          a: "undisciplined",
          b: "timid",
          c: "insensitive",
          d: "judgmental",
        },
        {
          number: 21,
          text: "I was...",
          a: "creative thinker",
          b: "clear perspective",
          c: "detail conscious",
          d: "visionary",
        },
        {
          number: 22,
          text: "I was...",
          a: "always right",
          b: "uncommitted",
          c: "uninvolved",
          d: "guilt prone",
        },
        {
          number: 23,
          text: "I was...",
          a: "accepting",
          b: "spontaneous",
          c: "pragmatic",
          d: "well-mannered",
        },
        {
          number: 24,
          text: "I was...",
          a: "disorganized",
          b: "selfish",
          c: "emotionally intense",
          d: "detached",
        },
        {
          number: 25,
          text: "I was...",
          a: "motivated",
          b: "sincere",
          c: "diplomatic",
          d: "engaging of others",
        },
        {
          number: 26,
          text: "I was...",
          a: "forgetful",
          b: "boring",
          c: "hard to please",
          d: "tactless",
        },
        {
          number: 27,
          text: "I was...",
          a: "articulate",
          b: "quality-oriented",
          c: "centered",
          d: "forgiving",
        },
        {
          number: 28,
          text: "I was...",
          a: "self-centered",
          b: "calculating",
          c: "self-righteous",
          d: "unexpressive",
        },
        {
          number: 29,
          text: "I was...",
          a: "self-regulated",
          b: "charismatic",
          c: "confident",
          d: "intuitive",
        },
        {
          number: 30,
          text: "As a child, when my friend was in trouble, I was:",
          a: "unrealistic expectations",
          b: "unproductive",
          c: "afraid to face facts",
          d: "intimidating",
        },
        {
          number: 31,
          text: "In my youth, I was most often criticized for being:",
          a: "Concerned, empathetic, and loyal regardless of the problem",
          b: "Supportive, patient, and a good listener",
          c: "Nonjudgmental, optimistic, and downplayed the seriousness of the situation",
          d: "Protective, resourceful, and recommending of solutions",
        },
        {
          number: 32,
          text: "In my youth, life was most meaningful when it:",
          a: "Directionless, unenthusiastic, and/or boring",
          b: "Overly sensitive, moody, and/or jealous",
          c: "Disruptive, uncommitted, and/or disorganized",
          d: "Argumentative, bossy, and/or tactless",
        },
        {
          number: 33,
          text: "When I was embarrassed as a child, my natural reaction was to:",
          a: "Was filled with accomplishment, leadership opportunities, and recognition",
          b: "Was free of pressure, conflict, and unnecessary stress",
          c: "Was filled with meaningful friends and purpose",
          d: "Allowed me to be playful, optimistic and carefree",
        },
        {
          number: 34,
          text: "Doing my chores was:",
          a: "Distance myself and downplay the situation to others while silently feeling the pain",
          b: "Fight back with facts and anger",
          c: "Become quiet, withdrawn, and often hold anger in until I blew up over some minor issue later",
          d: "Feel strong, negative emotion; hurt (perhaps cry); and plan to get even",
        },
        {
          number: 35,
          text: "In an argument with a parent, I was typically:",
          a: "A healthy activity, which was to be right if it was to be done at all. Family life requires cooperation and team play",
          b: "Something I was known for being efficient at, especially when tied to earning my allowance",
          c: "A necessary requirement (if you say so), so that I could go out and play",
          d: "Something I was willing to do but required reminding and structure for me to finish",
        },
        {
          number: 36,
          text: "When interacting with others as a child, I was most concerned with being:",
          a: "Disrespectful of authority and verbally manipulative",
          b: "Verbally attacking and unyielding",
          c: "Emotionally distraught and hung up over fairness",
          d: "Silently stubborn, uncomfortable, and/or confused about how to respond",
        },
        {
          number: 37,
          text: "When making decisions with a group of my friends I was typically:",
          a: "Praised, having fun, and feeling free",
          b: "Allowed space, treated with kindness, and left alone",
          c: "Right, approved of, and respected",
          d: "Understood, appreciated, and cared for",
        },
        {
          number: 38,
          text: "In social situations, I was most often:",
          a: "Impulsive, unfocused, and interruptive",
          b: "Indecisive, timid, and reluctant to offer input",
          c: "Selfish, impatient, and demanding of my way",
          d: "Suspicious, worry-prone, and unrealistic with my expectations of others' behavior",
        },
        {
          number: 39,
          text: "When I failed as a child, I felt:",
          a: "Followed by others because I was assertive and on task",
          b: "Admired by others because I was caring and quality-based",
          c: "Protected by others because I was gentle and kind",
          d: "Envied by others because I was happy and carefree",
        },
        {
          number: 40,
          text: "To feel alive and positive in my youth, I sought:",
          a: "Silently self-critical, yet verbally stubborn and defensive",
          b: "Unsettled and fearful, but I kept it to myself",
          c: "Embarrassed and nervous - seeking to escape the situation",
          d: "Guilty, self-critical, and vulnerable to depression. I would dwell on it",
        },
        {
          number: 41,
          text: "If a friend crossed me:",
          a: "Adventure, leadership, and lots of action",
          b: "Excitement, playful productivity, and the company of others",
          c: "Security, creativity, and purpose",
          d: "Acceptance, safety, and moving at my own pace",
        },
        {
          number: 42,
          text: "As a child, I was:",
          a: "I would act as if nothing happened, disengage from the relationship, and seek other friends",
          b: "I would feel deeply hurt and find it almost impossible to forgive completely",
          c: "I would feel hurt, hold my feelings inside, and avoid interacting with that individual",
          d: "I would express my anger and demand an apology",
        },
        {
          number: 43,
          text: "As a child, I was:",
          a: "Quiet, easy-going, and/or lazy",
          b: "Well-behaved, caring, and/or depressed",
          c: "Happy, playful, and/or obnoxious",
          d: "Confident, determined, and/or outwardly demanding",
        },
        {
          number: 44,
          text: "I was most likely known for being:",
          a: "Opinionated, determined, and/or bossy",
          b: "Compassionate, honest, and/or unforgiving",
          c: "Kind, pleasant, and/or unmotiviated",
          d: "Charismatic, positive, and/or undisplined",
        },
        {
          number: 45,
          text: "As a young person, I generally was seen as:",
          a: "Contented, a voice of reason, and/or often overwhelmed",
          b: "Playful, enthusiastic, and/or irresponsible",
          c: "Proactive, action-oriented, and/or quick-tempered",
          d: "Concerned about others, sensitive, and/or hard to please",
        },
      ],
    };
  },
};
</script>

<style></style>
