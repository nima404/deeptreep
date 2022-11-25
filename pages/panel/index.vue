<template>
  <div
    class="col-12 d-flex justify-content-center align-items-center bgmain"
    :style="{ height: myHeight }"
  >
    <div class="col-md-4 col-10 border rounded shadow bg-light p-4">
      <ValidationObserver v-if="!message" ref="form" v-slot="{ handleSubmit }">
        <form action="#" @submit.prevent="handleSubmit(login)">
          <h3 class="text-center">DEEP TREEP</h3>
          <h5 class="text-center">login</h5>
          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required|email"
          >
            <div>Email:</div>
            <input type="email" v-model="email" class="col-12" />
            <span class="text-xs text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            vid="role"
            rules="required|min:4"
            name="password"
          >
            <div>Password:</div>
            <input type="password" v-model="password" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>

          <div>
            <div ref="captcha"></div>
            <ValidationProvider
              v-slot="{ errors }"
              vid="role"
              :rules="`required|is:${captchaCode}`"
              name="captcha"
            >
              <input
                type="text"
                class="col-12"
                v-model="captchaInput"
                placeholder="captcha"
              />
              <span class="text-xs text-danger col-12 p-0">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
          <div class="p-0">
            <nuxt-link to="/panel/signup" class="col-12 p-0">sign up</nuxt-link>
          </div>
          <div class="col-12 p-0">
            <nuxt-link to="/panel/forgot" class="text-danger"
              >forgot password</nuxt-link
            >
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-success col-3 mt-3">login</button>
          </div>
        </form>
      </ValidationObserver>
      <div v-if="message" class="text-success text-center">
        we send an email for you pls confirm your email
      </div>
    </div>
  </div>
</template>

<script>
import { Captcha } from "simple-captcha-generator";
const captcha = new Captcha();
export default {
  layout: "auth",
  name: "login",
  data() {
    return {
      myHeight: window.innerHeight + "px",
      password: "",
      email: "",
      message: false,
      captchaCode: captcha.currentString,
      captchaInput: "",
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  async mounted() {
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(this.captchaCode, 0, 30);
    this.$refs.captcha.appendChild(canv);
  },

  methods: {
    myEventHandler(e) {
      this.myHeight = window.innerHeight + "px";
    },
    async login() {
      try {
        const res = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        console.log(res);
        const userRole = await this.$axios.get("api/usersmodel/user-info/");
        // console.log(userRole);
        if (userRole?.data?.results[0]?.role === "tourist") {
          this.$router.push("/panel/tourist");
        } else if (userRole?.data?.results[0]?.role === "tour-leader") {
          this.$router.push("/panel/touristLeader");
        } else if (userRole?.data?.results[0]?.role === "leader-tour-manager") {
          this.$router.push("/panel/admin");
        } else if (userRole?.data?.results[0]?.role === "service") {
          this.$router.push("/panel/service");
        }
      } catch (error) {
        console.log(error.response.data.message);
        if (error.response.data.message == "Your email authentication failed") {
          this.message = true;
          const res2 = await this.$axios.post(
            "api/usersmodel/send-authentication-email/",
            {
              email: this.email,
            }
          );
          setTimeout(() => {
            this.$router.push("/panel/confirmemail");
          }, 2000);
          console.log(res2);
        }
      }
    },
  },
};
</script>

<style></style>
