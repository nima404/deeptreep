<template>
  <div>
    <div class="form-check d-flex align-items-center">
      <input class="form-check-input pointer" type="radio" name="type" id="best" value="best" v-model="type">
      <label class="form-check-label pointer" for="best">
        Best experience
      </label>
    </div>
    <div class="form-check d-flex align-items-center">
      <input class="form-check-input pointer" type="radio" name="type" id="worst" value="worst" v-model="type">
      <label class="form-check-label pointer" for="worst">
        Worst experience
      </label>
    </div>
    <div class="form-check d-flex align-items-center mb-5">
      <input class="form-check-input pointer" type="radio" name="type" id="mediocre" value="medicore" v-model="type">
      <label class="form-check-label pointer" for="mediocre">
        Mediocre experience
      </label>
    </div>

    <div v-if="type === 'best'">
      <div class="mb-2 pb-4 pt-2 bg-gray row mx-0 rounded">
        <div class="col-6">
          <p>where?</p>
          <input type="text" class="form-control" v-model="best.where">
        </div>
        <div class="col-6">
          <p>when?</p>
          <input type="date" class="form-control" v-model="best.when" />
        </div>
        <div class="col-12 mt-2">
          <p>why?</p>
          <textarea type="text" class="form-control" v-model="best.why"></textarea>
        </div>
      </div>

      <table class="table table-bordered" v-if="showBestForm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Positive Points</th>
            <th scope="col">Negative Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bestForm" :key="index">
            <th class="py-0">{{index + 1}}</th>
            <td class="p-0 ">
              <input v-model="item.posetive" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
            <td class="p-0">
              <input v-model="item.negative" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
          </tr>
        </tbody>
      </table>
      <button v-if="showBestForm" class="btn btn-primary" @click="formSubmit">submit</button>
      <button v-else class="btn btn-primary" @click="onSubmit">submit</button>
    </div>

    <div v-show="type === 'worst'">
      <div class="mb-2 pb-4 pt-2 bg-gray row mx-0 rounded">
        <div class="col-6">
          <p>where?</p>
          <input type="text" class="form-control" v-model="worst.where">
        </div>
        <div class="col-6">
          <p>when?</p>
          <input type="date" class="form-control" v-model="worst.when" />
        </div>
        <div class="col-12 mt-2">
          <p>why?</p>
          <textarea type="text" class="form-control" v-model="worst.why"></textarea>
        </div>
      </div>

      <table class="table table-bordered" v-if="showWorstForm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Positive Points</th>
            <th scope="col">Negative Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in worstForm" :key="index">
            <th class="py-0">{{index + 1}}</th>
            <td class="p-0 ">
              <input v-model="item.posetive" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
            <td class="p-0">
              <input v-model="item.negative" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
          </tr>
        </tbody>
      </table>
      <button v-if="showWorstForm" class="btn btn-primary" @click="formSubmit">submit</button>
      <button v-else class="btn btn-primary" @click="onSubmit">submit</button>
    </div>

    <div v-show="type === 'medicore'">
      <div class="mb-2 pb-4 pt-2 bg-gray row mx-0 rounded">
        <div class="col-6">
          <p>where?</p>
          <input type="text" class="form-control" v-model="mediocre.where">
        </div>
        <div class="col-6">
          <p>when?</p>
          <input type="date" class="form-control" v-model="mediocre.when" />
        </div>
        <div class="col-12 mt-2">
          <p>why?</p>
          <textarea type="text" class="form-control" v-model="mediocre.why"></textarea>
        </div>
      </div>

      <table class="table table-bordered" v-if="showMediocreForm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Positive Points</th>
            <th scope="col">Negative Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in mediocreForm" :key="index">
            <th class="py-0">{{index + 1}}</th>
            <td class="p-0 ">
              <input v-model="item.posetive" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
            <td class="p-0">
              <input v-model="item.negative" type="text" class="w-100 form-control border-0 shadow-none" />
            </td>
          </tr>
        </tbody>
      </table>
      <button v-if="showMediocreForm" class="btn btn-primary" @click="formSubmit">submit</button>
      <button v-else class="btn btn-primary" @click="onSubmit">submit</button>
    </div>


    <!-- <div v-else>
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
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  layout: "tourist",

  async fetch(){
    const userInfo = await this.$axios.get("/api/usersmodel/user-info/");
    try {
      const test = await this.$axios.get("/api/psychologicalTesting/descriptive-questions/");
      let res = test.data.results
      res.forEach(item => {
        if(item.type === 'best'){
          this.best.where = item.where
          this.best.why = item.why
          this.best.when = item.when
          if(item.RowsResult){
            this.showBestForm = true
            this.bestForm = item.RowsResult
          }
          this.bestForm.push({
            posetive: '',
            negative: ''
          })
          this.bestRow = item.id
        }

        if(item.type === 'worst'){
          this.worst.where = item.where
          this.worst.why = item.why
          this.worst.when = item.when
          if(item.RowsResult){
            this.showWorstForm = true
            this.worstForm = item.RowsResult
          }
          this.worstForm.push({
            posetive: '',
            negative: ''
          })
          this.worstRow = item.id
        }

        if(item.type === 'medicore'){
          this.mediocre.where = item.where
          this.mediocre.why = item.why
          this.mediocre.when = item.when
          if(item.RowsResult){
            this.showMediocreForm = true
            this.mediocreForm = item.RowsResult
          }
          this.mediocreForm.push({
            posetive: '',
            negative: ''
          })
          this.mediocreRow = item.id
        }
      })
      this.userInfo = userInfo?.data?.results?.[0]
    } catch (error) {
      console.log(error)
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
      let formData = {
        "type": this.type,
        "where": this.type === 'best' ? this.best.where : this.type === 'worst' ? this.worst.where : this.mediocre.where,
        "why": this.type === 'best' ? this.best.why : this.type === 'worst' ? this.worst.why : this.mediocre.why,
        "when": this.type === 'best' ? this.best.when : this.type === 'worst' ? this.worst.when : this.mediocre.when,
        "user": this.userInfo?.id,
      }

      try {
        const res = await this.$axios.post(
          "/api/psychologicalTesting/descriptive-questions-create/", formData
        );
        console.log(res)
        // this.$nuxt.refresh()
      } catch (error) {
        console.log(error);
      }
    },

    async formSubmit(){
      let formData = {
        "posetive": this.type === 'best' ? this.bestForm[this.bestForm.length - 1].posetive : this.type === 'worst' ? this.worstForm[this.worstForm.length - 1].posetive : this.mediocreForm[this.mediocreForm.length - 1].posetive,
        "negative": this.type === 'best' ? this.bestForm[this.bestForm.length - 1].negative : this.type === 'worst' ? this.worstForm[this.worstForm.length - 1].negative : this.mediocreForm[this.mediocreForm.length - 1].negative,
        "row": this.type === 'best' ? this.bestRow : this.type === 'worst' ? this.worstRow : this.mediocreRow,
        "user": this.userInfo?.id,
      }

      try {
        const res = await this.$axios.post(
          "/api/psychologicalTesting/descriptive-questions-posetives-and-negative-points-create/", formData
        )
        if(this.type === 'best'){
          this.bestRow = res.data.created
          this.showBestForm = true
          this.bestForm.push({
            posetive: '',
            negative: ''
          })
        }
        if(this.type === 'worst'){
          this.worstRow = res.data.created
          this.showWorstForm = true
          this.worstForm.push({
            posetive: '',
            negative: ''
          })
        }
        if(this.type === 'medicore'){
          this.mediocreRow = res.data.created
          this.showMediocreForm = true
          this.mediocreForm.push({
            posetive: '',
            negative: ''
          })
        }
        // this.$nuxt.refresh()
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
      userInfo: {},

      type: 'best',

      showBestForm: false,
      bestRow: null,
      bestForm: [{
        posetive: '',
        negative: ''
      }],

      showWorstForm: false,
      worstRow: null,
      worstForm: [{
        posetive: '',
        negative: ''
      }],

      showMediocreForm: false,
      mediocreRow: null,
      mediocreForm: [{
        posetive: '',
        negative: ''
      }],

      best: {
        where: null,
        when: null,
        why: null
      },
      worst: {
        where: null,
        when: null,
        why: null
      },
      mediocre: {
        where: null,
        when: null,
        why: null
      },
      formData: {
        "type": null,
        "where": null,
        "why": null,
        "when": null,
        "user": 0,
      },
    };
  },
};
</script>

<style>
.nested-enter-active,
.nested-leave-active {
	transition: all 0.2s ease-in-out;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
