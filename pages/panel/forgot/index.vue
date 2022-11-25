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
          <div class="col-12 text-center">
            <button class="btn btn-success col-3 mt-3">send code</button>
          </div>
        </form>
      </ValidationObserver>
      <div class="text-center text-success" v-if="message">sended</div>
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
        const res = await this.$axios.post("api/usersmodel/forgot-password/", {
          email: this.email,
        });
        if (res.data.messages == "Email Send") {
          this.$router.push("/panel/forgot/code");
        }
        console.log(res);
        this.message = true;
        setTimeout(() => {
          this.$router.push("/panel/forgot/code");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
