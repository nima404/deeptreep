<template>
  <div>
    <div v-for="tour in detail.results" :key="tour.id">
      <div v-if="$store.state.lang.lang == 'English'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'German'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Farsi'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Chines'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Spanish'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Arabic'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_en" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_en" />
        <div>transportation:</div>
        <select v-model="tour.transportation_en" class="col-12">
          <option value="by-air">by air</option>
          <option value="terrestrial">terrestrial</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_en" class="col-12">
          <option value="silver">silver</option>
          <option value="gold">gold</option>
          <option value="diamond">diamond</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_en"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_en"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_en"
        >
        </textarea>
      </div>
      <div>pay with:</div>
      <select v-model="tour.pay_with" class="col-12">
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="OUNS">OUNS</option>
      </select>
      <button class="btn btn-warning mt-3" @click="change">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  layout: "admin",
  async asyncData({ $axios, params }) {
    const detail = await $axios.$get(
      `/api/leadersTourManagers/tour-detail/${params.tourId}/`
    );
    return {
      detail,
    };
  },
  methods: {
    async change() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.detail.results) {
          bodyFormData.append(property, this.detail.results[property]);
        }
        const res = await this.$axios.$patch(
          `/api/leadersTourManagers/tour-update/${this.$route.params.tourId}/`
        );
        console.log(res);
        this.$router.push("/panel/admin/tours");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
