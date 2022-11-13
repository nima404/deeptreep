<template>
  <div>
    <div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form action="#" @submit.prevent="handleSubmit(create)">
          <div
            v-for="(item, i) in [
              'country_en',
              'country_gr',
              'country_fa',
              'country_ch',
              'country_sp',
              'country_ar',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <input type="text" class="col-12" v-model="tour[item]" />
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div
            v-for="(item, i) in [
              'city_en',
              'city_gr',
              'city_fa',
              'city_ch',
              'city_sp',
              'city_ar',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <input type="text" class="col-12" v-model="tour[item]" />
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div
            v-for="(item, i) in [
              'transportation_en',
              'transportation_gr',
              'transportation_fa',
              'transportation_ch',
              'transportation_sp',
              'transportation_ar',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <select v-model="tour[item]" class="col-12">
                <option value="by-air">by air</option>
                <option value="terrestrial">terrestrial</option>
                <option value="marine">marine</option>
              </select>
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div
            v-for="(item, i) in [
              'level_en',
              'level_fa',
              'level_ar',
              'level_gr',
              'level_ch',
              'level_sp',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <select v-model="tour[item]" class="col-12">
                <option value="silver">silver</option>
                <option value="gold">gold</option>
                <option value="diamond">diamond</option>
              </select>
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div
            v-for="(item, i) in [
              'services_en',
              'services_fa',
              'services_ar',
              'services_gr',
              'services_ch',
              'services_sp',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <textarea
                id=""
                cols="30"
                rows="5"
                class="col-12"
                v-model="tour[item]"
              >
              </textarea>
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div
            v-for="(item, i) in [
              'required_documents_en',
              'required_documents_fa',
              'required_documents_ar',
              'required_documents_gr',
              'required_documents_ch',
              'required_documents_sp',
            ]"
            :key="i"
          >
            <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
              <div>{{ item }}:</div>
              <textarea
                id=""
                cols="30"
                rows="5"
                class="col-12"
                v-model="tour[item]"
              >
              </textarea>
              <span class="text-xs text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

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
        city_en: "",
        city_gr: "",
        city_fa: "",
        city_ch: "",
        city_sp: "",
        city_ar: "",
        transportation_en: "by-air",
        transportation_gr: "by-air",
        transportation_fa: "by-air",
        transportation_ch: "by-air",
        transportation_sp: "by-air",
        transportation_ar: "by-air",
        level_en: "silver",
        level_gr: "silber",
        level_fa: "نقره",
        level_ch: "银",
        level_sp: "plata",
        level_ar: "فضة",
        pay_with: "GBP",
        services_en: "",
        services_gr: "",
        services_fa: "",
        services_ch: "",
        services_sp: "",
        services_ar: "",
        required_documents_en: "",
        required_documents_gr: "",
        required_documents_fa: "",
        required_documents_ch: "",
        required_documents_sp: "",
        required_documents_ar: "",
        capacity: 0,
        duration: 0,
        price: 0,
        country_en: "",
        country_gr: "",
        country_fa: "",
        country_ch: "",
        country_sp: "",
        country_ar: "",
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
