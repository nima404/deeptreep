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
        <input type="text" class="col-12" v-model="tour.country_gr" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_gr" />
        <div>transportation:</div>
        <select v-model="tour.transportation_gr" class="col-12">
          <option value="flug">flug</option>
          <option value="terrestrisch">terrestrisch</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_gr" class="col-12">
          <option value="silber">silber</option>
          <option value="gold">gold</option>
          <option value="diamant">diamant</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_gr"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_gr"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_gr"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Farsi'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_fa" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_fa" />
        <div>transportation:</div>
        <select v-model="tour.transportation_fa" class="col-12">
          <option value="هوایی">هوایی</option>
          <option value="زمینی">زمینی</option>
          <option value="دریایی">دریایی</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_fa" class="col-12">
          <option value="نقره">نقره</option>
          <option value="طلایی">طلایی</option>
          <option value="الماسی">الماسی</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_fa"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_fa"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_fa"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Chines'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_ch" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_ch" />
        <div>transportation:</div>
        <select v-model="tour.transportation_ch" class="col-12">
          <option value="空运">空运</option>
          <option value="陆地的">陆地的</option>
          <option value="海洋">海洋</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_ch" class="col-12">
          <option value="银">银</option>
          <option value="金的">金的</option>
          <option value="钻石">钻石</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_ch"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_ch"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_ch"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Spanish'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_sp" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_sp" />
        <div>transportation:</div>
        <select v-model="tour.transportation_sp" class="col-12">
          <option value="por-aire">por-aire</option>
          <option value="terrestre">terrestre</option>
          <option value="marine">marine</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_sp" class="col-12">
          <option value="plata">plata</option>
          <option value="dorado">dorado</option>
          <option value="diamante">diamante</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_sp"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_sp"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_sp"
        >
        </textarea>
      </div>
      <div v-if="$store.state.lang.lang == 'Arabic'">
        <div>country:</div>
        <input type="text" class="col-12" v-model="tour.country_ar" />
        <div>city:</div>
        <input type="text" class="col-12" v-model="tour.city_ar" />
        <div>transportation:</div>
        <select v-model="tour.transportation_ar" class="col-12">
          <option value="عن-طريق-الجو">عن-طريق-الجو</option>
          <option value="ساكن-الأرض">ساكن-الأرض</option>
          <option value="البحرية">البحرية</option>
        </select>
        <div>Level:</div>
        <select v-model="tour.level_ar" class="col-12">
          <option value="فضة">فضة</option>
          <option value="ذهبي">ذهبي</option>
          <option value="الماس">الماس</option>
        </select>
        <div>descriptions:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.descriptions_ar"
        >
        </textarea>

        <div>services:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.services_ar"
        >
        </textarea>
        <div>required documents:</div>
        <textarea
          id=""
          cols="30"
          rows="5"
          class="col-12"
          v-model="tour.required_documents_ar"
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
      <div class="form-check form-switch d-flex align-items-center mt-2">
        <input
          class="form-check-input pointer"
          type="checkbox"
          id="flexSwitchCheckDefault"
          v-model="tour.status"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Status</label
        >
      </div>
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
        bodyFormData.append("country_en", this.detail.results[0].country_en);
        bodyFormData.append("country_gr", this.detail.results[0].country_gr);
        bodyFormData.append("country_fa", this.detail.results[0].country_fa);
        bodyFormData.append("country_sp", this.detail.results[0].country_sp);
        bodyFormData.append("country_ar", this.detail.results[0].country_ar);
        bodyFormData.append("country_ch", this.detail.results[0].country_ch);

        bodyFormData.append("city_en", this.detail.results[0].city_en);
        bodyFormData.append("city_gr", this.detail.results[0].city_gr);
        bodyFormData.append("city_fa", this.detail.results[0].city_fa);
        bodyFormData.append("city_sp", this.detail.results[0].city_sp);
        bodyFormData.append("city_ar", this.detail.results[0].city_ar);
        bodyFormData.append("city_ch", this.detail.results[0].city_ch);

        bodyFormData.append(
          "transportation_en",
          this.detail.results[0].transportation_en
        );
        bodyFormData.append(
          "transportation_gr",
          this.detail.results[0].transportation_gr
        );
        bodyFormData.append(
          "transportation_fa",
          this.detail.results[0].transportation_fa
        );
        bodyFormData.append(
          "transportation_sp",
          this.detail.results[0].transportation_sp
        );
        bodyFormData.append(
          "transportation_ar",
          this.detail.results[0].transportation_ar
        );
        bodyFormData.append(
          "transportation_ch",
          this.detail.results[0].transportation_ch
        );

        bodyFormData.append("level_en", this.detail.results[0].level_en);
        bodyFormData.append("level_gr", this.detail.results[0].level_gr);
        bodyFormData.append("level_fa", this.detail.results[0].level_fa);
        bodyFormData.append("level_sp", this.detail.results[0].level_sp);
        bodyFormData.append("level_ar", this.detail.results[0].level_ar);
        bodyFormData.append("level_ch", this.detail.results[0].level_ch);

        bodyFormData.append(
          "descriptions_en",
          this.detail.results[0].descriptions_en
        );
        bodyFormData.append(
          "descriptions_gr",
          this.detail.results[0].descriptions_gr
        );
        bodyFormData.append(
          "descriptions_fa",
          this.detail.results[0].descriptions_fa
        );
        bodyFormData.append(
          "descriptions_sp",
          this.detail.results[0].descriptions_sp
        );
        bodyFormData.append(
          "descriptions_ar",
          this.detail.results[0].descriptions_ar
        );
        bodyFormData.append(
          "descriptions_ch",
          this.detail.results[0].descriptions_ch
        );

        bodyFormData.append("services_en", this.detail.results[0].services_en);
        bodyFormData.append("services_gr", this.detail.results[0].services_gr);
        bodyFormData.append("services_fa", this.detail.results[0].services_fa);
        bodyFormData.append("services_sp", this.detail.results[0].services_sp);
        bodyFormData.append("services_ar", this.detail.results[0].services_ar);
        bodyFormData.append("services_ch", this.detail.results[0].services_ch);

        bodyFormData.append(
          "required_documents_en",
          this.detail.results[0].required_documents_en
        );
        bodyFormData.append(
          "required_documents_gr",
          this.detail.results[0].required_documents_gr
        );
        bodyFormData.append(
          "required_documents_fa",
          this.detail.results[0].required_documents_fa
        );
        bodyFormData.append(
          "required_documents_sp",
          this.detail.results[0].required_documents_sp
        );
        bodyFormData.append(
          "required_documents_ar",
          this.detail.results[0].required_documents_ar
        );
        bodyFormData.append(
          "required_documents_ch",
          this.detail.results[0].required_documents_ch
        );

        bodyFormData.append("pay_with", this.detail.results[0].pay_with);
        bodyFormData.append("status", this.detail.results[0].status);

        const res = await this.$axios.$put(
          `/api/leadersTourManagers/tour-update/${this.$route.params.tourId}/`,
          bodyFormData
        );
        console.log(res);
        this.$router.push(`/panel/admin/tours/${this.$route.params.tourId}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
