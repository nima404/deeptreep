<template>
  <div>
    <div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form action="#" @submit.prevent="handleSubmit(create)">
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>country:</div>
            <input type="text" class="col-12" v-model="tour.country_en" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>city:</div>
            <input type="text" class="col-12" v-model="tour.city_en" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>transportation:</div>
            <select v-model="tour.transportation_en" class="col-12">
              <option value="by-air">by air</option>
              <option value="terrestrial">terrestrial</option>
              <option value="marine">marine</option>
            </select>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <div>Level:</div>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <select v-model="tour.level_en" class="col-12">
              <option value="silver">silver</option>
              <option value="gold">gold</option>
              <option value="diamond">diamond</option>
            </select>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>pay with:</div>
            <select v-model="tour.pay_with" class="col-12">
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="OUNS">OUNS</option>
            </select>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>main test type :</div>
            <select v-model="tour.main_test_type" class="col-12">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
            </select>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>departure date:</div>
            <input type="date" class="col-12" v-model="tour.departureـdate" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions en:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_en"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions gr:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_gr"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions fa:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_fa"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions ch:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_ch"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions sp:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_sp"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>descriptions ar:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.descriptions_ar"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>services:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.services_en"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>required documents:</div>
            <textarea
              id=""
              cols="30"
              rows="5"
              class="col-12"
              v-model="tour.required_documents_en"
            >
            </textarea>
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>capacity:</div>
            <input type="number" class="col-12" v-model="tour.capacity" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>duration:</div>
            <input type="number" class="col-12" v-model="tour.duration" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>price:</div>
            <input type="number" class="col-12" v-model="tour.price" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>leaders:</div>
            <input type="number" class="col-12" v-model="tour.leaders" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>

          <div>image:</div>
          <input type="file" ref="image" class="col-12 p-0" />

          <button class="btn btn-success mt-3">create</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: "createTour",
  layout: "admin",
  data() {
    return {
      tour: {
        descriptions_en: "",
        descriptions_gr: "",
        descriptions_fa: "",
        descriptions_ch: "",
        descriptions_sp: "",
        descriptions_ar: "",
        transportation_en: "by-air",
        level_en: "silver",
        pay_with: "GBP",
        services_en: "",
        required_documents_en: "",
        capacity: 0,
        duration: 0,
        price: 0,
        country_en: "",
        city_en: "",
        departureـdate: "",
        main_test_type: "A1",
      },
    };
  },
  methods: {
    async create() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.tour) {
          bodyFormData.append(property, this.tour[property]);
        }
        bodyFormData.append("city_ch", this.tour.city_en);
        bodyFormData.append("city_ar", this.tour.city_en);
        bodyFormData.append("city_fa", this.tour.city_en);
        bodyFormData.append("city_gr", this.tour.city_en);
        bodyFormData.append("city_sp", this.tour.city_en);

        if (this.tour.level_en == "silver") {
          bodyFormData.append("level_ch", "银");
          bodyFormData.append("level_ar", "فضة");
          bodyFormData.append("level_fa", "نقره");
          bodyFormData.append("level_gr", "silber");
          bodyFormData.append("level_sp", "plata");
        } else if (this.tour.level_en == "gold") {
          bodyFormData.append("level_ch", "金的");
          bodyFormData.append("level_ar", "ذهبي");
          bodyFormData.append("level_fa", "طلایی");
          bodyFormData.append("level_gr", "gold");
          bodyFormData.append("level_sp", "dorado");
        } else if (this.tour.level_en == "diamond") {
          bodyFormData.append("level_ch", "钻石");
          bodyFormData.append("level_ar", "الماس");
          bodyFormData.append("level_fa", "الماسی");
          bodyFormData.append("level_gr", "diamant");
          bodyFormData.append("level_sp", "diamante");
        }

        bodyFormData.append("country_ch", this.tour.country_en);
        bodyFormData.append("country_ar", this.tour.country_en);
        bodyFormData.append("country_fa", this.tour.country_en);
        bodyFormData.append("country_gr", this.tour.country_en);
        bodyFormData.append("country_sp", this.tour.country_en);

        if (this.tour.transportation_en == "by-air") {
          bodyFormData.append("transportation_ch", "空运");
          bodyFormData.append("transportation_ar", "عن-طريق-الجو");
          bodyFormData.append("transportation_fa", "هوایی");
          bodyFormData.append("transportation_gr", "flug");
          bodyFormData.append("transportation_sp", "por-aire");
        } else if (this.tour.transportation_en == "terrestrial") {
          bodyFormData.append("transportation_ch", "陆地的");
          bodyFormData.append("transportation_ar", "ساكن-الأرض");
          bodyFormData.append("transportation_fa", "زمینی");
          bodyFormData.append("transportation_gr", "terrestrisch");
          bodyFormData.append("transportation_sp", "terrestre");
        } else if (this.tour.transportation_en == "marine") {
          bodyFormData.append("transportation_ch", "海洋");
          bodyFormData.append("transportation_ar", "البحرية");
          bodyFormData.append("transportation_fa", "دریایی");
          bodyFormData.append("transportation_gr", "marine");
          bodyFormData.append("transportation_sp", "marine");
        }

        bodyFormData.append(
          "required_documents_ch",
          this.tour.required_documents_en
        );
        bodyFormData.append(
          "required_documents_ar",
          this.tour.required_documents_en
        );
        bodyFormData.append(
          "required_documents_fa",
          this.tour.required_documents_en
        );
        bodyFormData.append(
          "required_documents_gr",
          this.tour.required_documents_en
        );
        bodyFormData.append(
          "required_documents_sp",
          this.tour.required_documents_en
        );

        bodyFormData.append("services_ch", this.tour.services_en);
        bodyFormData.append("services_ar", this.tour.services_en);
        bodyFormData.append("services_fa", this.tour.services_en);
        bodyFormData.append("services_gr", this.tour.services_en);
        bodyFormData.append("services_sp", this.tour.services_en);

        bodyFormData.append("image", this.$refs.image.files[0]);
        const res = await this.$axios.$post(
          "/api/leadersTourManagers/tour-create/",
          bodyFormData
        );
        this.$router.push("/panel/admin/tours");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
