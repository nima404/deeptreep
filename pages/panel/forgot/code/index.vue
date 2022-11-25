<template>
  <div
    class="col-12 d-flex justify-content-center align-items-center"
    :style="{ height: myHeight }"
  >
    <div class="col-md-4 col-10 border rounded shadow bg-light p-4">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }" v-if="!message">
        <form action="#" @submit.prevent="handleSubmit(recovery)">
          <h3 class="text-center">DEEP TREEP</h3>
          <h5 class="text-center">recovery password</h5>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>Email:</div>
            <input type="email" v-model="email" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>code:</div>
            <input type="text" v-model="code" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>new password:</div>
            <input type="password" v-model="password" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="col-12 text-center">
            <button class="btn btn-success col-3 mt-3">save</button>
          </div>
        </form>
      </ValidationObserver>
      <div class="text-center text-success" v-if="message">changed</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgot",
  layout: "auth",
  data() {
    return {
      myHeight: window.innerHeight + "px",
      email: "",
      code: "",
      password: "",
      message: false,
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.myHeight = window.innerHeight + "px";
    },
    async recovery() {
      try {
        const res = await this.$axios.post(
          "api/usersmodel/password-confirmation/",
          {
            email: this.email,
            code: this.code,
            password: this.password,
          }
        );
        this.message = true;
        setTimeout(() => {
          this.$router.push("/panel");
        }, 2000);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
