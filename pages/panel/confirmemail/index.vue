<template>
  <div
    class="col-12 d-flex justify-content-center align-items-center"
    :style="{ height: myHeight }"
  >
    <div class="col-md-4 col-10 border rounded shadow bg-light p-4">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }" v-if="!ok">
        <form action="#" @submit.prevent="handleSubmit(confirm)">
          <h3 class="text-center">DEEP TREEP</h3>
          <h5 class="text-center">confirm Email</h5>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>Email:</div>
            <input type="email" v-model="email" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" vid="role" rules="required">
            <div>Code:</div>
            <input type="text" v-model="code" class="col-12" />
            <span class="text-xs text-danger col-12 p-0">{{ errors[0] }}</span>
          </ValidationProvider>
          <nuxt-link to="/panel">login</nuxt-link>
          <div class="col-12 text-center">
            <button class="btn btn-success col-3 mt-3">confirm</button>
          </div>
        </form>
      </ValidationObserver>
      <div class="text-success text-center" v-if="ok">email confirmed</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmemail",
  layout: "auth",
  data() {
    return {
      myHeight: window.innerHeight + "px",
      email: "",
      code: "",
      ok: false,
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.myHeight = window.innerHeight + "px";
    },
    async confirm() {
      try {
        const res = await this.$axios.post(
          "api/usersmodel/email-confirmation/",
          {
            email: this.email,
            code: this.code,
          }
        );
        this.ok = true;
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
