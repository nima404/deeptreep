<template>
  <div
    class="col-12 d-flex justify-content-center align-items-center bgmain py-5"
    :style="{ height: myHeight }"
  >
    <div class="col-md-4 col-10 border rounded shadow bg-light p-5 my-5">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }" v-if="!message">
        <form action="#" @submit.prevent="handleSubmit(register)">
          <h3 class="text-center">DEEP TREEP</h3>
          <h5 class="text-center">register</h5>
          <!-- <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required"
            v-if="step == 3"
          >
            <div>gender:</div>
            <select
              v-model="formdata.gender"
              class="col-12"
              style="height: 38px"
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
            <div class="col-12 px-0 mt-3 d-flex justify-content-between">
              <div
                class="btn btn-info col-3"
                v-if="formdata.gender != ''"
                @click="step--"
              >
                prev
              </div>
              <div
                class="btn btn-info col-3"
                v-if="formdata.gender != ''"
                @click="step++"
              >
                next
              </div>
            </div>
          </ValidationProvider> -->
          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required"
            v-if="step == 1"
          >
            <div>role:</div>
            <select v-model="formdata.role" class="col-12" style="height: 38px">
              <option value="tourist">tourist</option>
              <option value="tour-leader">tour leader</option>
              <option value="leader-tour-manager">leader tour manager</option>
              <option value="service">service</option>
            </select>
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
            <div class="col-12 px-0 mt-3 d-flex justify-content-end">
              <div
                class="btn btn-info col-3"
                v-if="formdata.role != ''"
                @click="step++"
              >
                next
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required|email"
            v-if="step == 2"
          >
            <div>email:</div>
            <input type="email" v-model="formdata.email" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
            <div class="col-12 px-0 mt-3 d-flex justify-content-between">
              <div
                class="btn btn-info col-3"
                v-if="formdata.email != ''"
                @click="step--"
              >
                prev
              </div>
              <div
                class="btn btn-info col-3"
                v-if="formdata.email != ''"
                @click="step++"
              >
                next
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required"
            v-if="step == 3"
          >
            <div>password:</div>
            <input type="password" v-model="formdata.password" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
            <div class="col-12 px-0 mt-3 d-flex justify-content-between">
              <div
                class="btn btn-info col-3"
                v-if="formdata.password != '' && formdata.role == 'tour-leader'"
                @click="step--"
              >
                prev
              </div>
              <div
                class="btn btn-info col-3"
                v-if="formdata.password != '' && formdata.role == 'tour-leader'"
                @click="step++"
              >
                next
              </div>
              <div
                class="col-12 d-flex justify-content-between mt-3 px-0"
                v-if="formdata.password != '' && formdata.role != 'tour-leader'"
              >
                <button class="btn btn-success col-12">sign up</button>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required"
            v-if="step == 4"
          >
            <div>address:</div>
            <textarea
              class="col-12"
              cols="30"
              rows="4"
              v-model="formdata.address"
            ></textarea>
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
            <div class="col-12 d-flex justify-content-between mt-3 px-0">
              <button
                class="btn btn-success col-12"
                v-if="formdata.address != '' && step == 4"
              >
                sign up
              </button>
            </div>
          </ValidationProvider>
        </form>
      </ValidationObserver>
      <div class="text-center text-success" v-if="message">
        we send an email for you pls confirm your email
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      message: false,
      step: 1,
      myHeight: window.innerHeight + "px",
      formdata: {
        email: "",
        password: "",
        // gender: "",
        address: "",
        role: "",
      },
    };
  },

  created() {
    window.addEventListener("resize", this.myEventHandler);
  },

  methods: {
    myEventHandler(e) {
      this.myHeight = window.innerHeight + "px";
    },
    async register() {
      try {
        const bodyFormData = new FormData();
        for (const property in this.formdata) {
          bodyFormData.append(property, this.formdata[property]);
        }
        const res = await this.$axios.$post(
          "/api/usersmodel/register/",
          bodyFormData
        );
        console.log(res);
        this.message = true;
        const res2 = await this.$axios.post(
          "api/usersmodel/send-authentication-email/",
          {
            email: this.formdata.email,
          }
        );
        console.log(res2);
        setTimeout(() => {
          this.$router.push("/panel/confirmemail");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
