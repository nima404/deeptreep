<template>
  <div class="nav col-12 pt-3 px-5">
    <div class="col-12 d-flex d-sm-none mb-2">
      <i
        class="fa fa-bars text-light pointer"
        @click="showMenu = !showMenu"
      ></i>
    </div>
    <div
      class="d-none flex-column flex-sm-row justify-content-between col-12 d-sm-flex"
      ref="show"
    >
      <div class="d-flex align-items-center mt-3 mt-sm-0 flex-row">
        <select v-model="lang" class="border rounded px-2 mx-2 pointer">
          <option value="en">En</option>
          <option value="gr">Ge</option>
          <option value="fa">Pe</option>
          <option value="ch">Ch</option>
          <option value="sp">Sp</option>
          <option value="ar">Ar</option>
        </select>
        <nuxt-link to="/">
          <i class="fa-brands fa-instagram textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-twitter textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-skype textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-pinterest-p textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-linkedin-in textorange mx-2 mr-4"></i>
        </nuxt-link>
        <div v-if="$auth.strategy.token.status().valid() == false">
          <i class="fa-solid fa-user textorange ml-2"></i>
          <nuxt-link to="/panel/signup" class="text-light">sign up</nuxt-link>
        </div>
        <div class="ml-4" v-if="$auth.strategy.token.status().valid() == false">
          <i class="fa fa-lock textorange ml-2"></i>
          <nuxt-link to="/panel" class="text-light">login</nuxt-link>
        </div>
        <nuxt-link
          to="/panel/tourist"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'tourist'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/touristLeader"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'tour-leader'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/admin"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'leader-tour-manager'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/service"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'service'
          "
          >panel</nuxt-link
        >
      </div>
      <div class="d-flex text-light">
        <div class="mr-4"><i class="fa fa-phone mr-2"></i>09121992129</div>
        <div><i class="fa fa-envelope mr-2"></i>dotweb@info.com</div>
      </div>
    </div>

    <div
      class="col-12 d-none justify-content-center text-light thirdNav mt-3 d-sm-flex"
      ref="show"
    >
      <nuxt-link to="/" class="px-2 pb-3 text-light">Home</nuxt-link>
      <nuxt-link to="/tor" class="px-2 pb-3 text-light">Tours</nuxt-link>
      <!-- <nuxt-link to="/category" class="px-2 pb-3 text-light"
        >category</nuxt-link
      > -->
      <nuxt-link to="/galery" class="px-2 pb-3 text-light">Galery</nuxt-link>
      <!-- <nuxt-link to="/pricetable" class="px-2 pb-3 text-light"
        >pricetable</nuxt-link
      > -->
      <nuxt-link to="/services" class="px-2 pb-3 text-light"
        >Services</nuxt-link
      >
      <!-- <nuxt-link to="/weblog" class="px-2 pb-3 text-light">weblog</nuxt-link> -->
      <nuxt-link to="/about" class="px-2 pb-3 text-light">About</nuxt-link>
    </div>
    <!--secmenu-->
    <div
      class="d-flex flex-column flex-sm-row justify-content-between col-12 d-sm-none"
      v-if="showMenu"
    >
      <div class="d-flex align-items-center my-3 my-sm-0 flex-row">
        <select v-model="lang" class="border rounded px-2 mr-2 pointer">
          <option value="en">En</option>
          <option value="gr">Ge</option>
          <option value="fa">Pe</option>
          <option value="ch">Ch</option>
          <option value="sp">Sp</option>
          <option value="ar">Ar</option>
        </select>
        <nuxt-link to="/">
          <i class="fa-brands fa-instagram textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-twitter textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-skype textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-pinterest-p textorange mx-2"></i>
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fa-brands fa-linkedin-in textorange mx-2 mr-4"></i>
        </nuxt-link>
        <div v-if="$auth.strategy.token.status().valid() == false">
          <i class="fa-solid fa-user textorange ml-2"></i>
          <nuxt-link to="/panel/signup" class="text-light">sign up</nuxt-link>
        </div>
        <div class="ml-4" v-if="$auth.strategy.token.status().valid() == false">
          <i class="fa fa-lock textorange ml-2"></i>
          <nuxt-link to="/panel" class="text-light">login</nuxt-link>
        </div>
        <nuxt-link
          to="/panel/tourist"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'tourist'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/touristLeader"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'tour-leader'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/admin"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'leader-tour-manager'
          "
          >panel</nuxt-link
        >
        <nuxt-link
          to="/panel/service"
          class="btn btn-info"
          v-if="
            $auth.strategy.token.status().valid() == true &&
            userInfo.role == 'service'
          "
          >panel</nuxt-link
        >
      </div>
      <div class="d-flex text-light">
        <div class="mr-4"><i class="fa fa-phone mr-2"></i>09121992129</div>
        <div><i class="fa fa-envelope mr-2"></i>dotweb@info.com</div>
      </div>
    </div>

    <div
      class="col-12 d-flex justify-content-center text-light thirdNav mt-3 d-sm-none"
      v-if="showMenu"
    >
      <nuxt-link to="/" class="px-2 pb-3 text-light">Home</nuxt-link>
      <nuxt-link to="/tor" class="px-2 pb-3 text-light">Tours</nuxt-link>
      <!-- <nuxt-link to="/category" class="px-2 pb-3 text-light"
        >category</nuxt-link
      > -->
      <nuxt-link to="/galery" class="px-2 pb-3 text-light">Galery</nuxt-link>
      <!-- <nuxt-link to="/pricetable" class="px-2 pb-3 text-light"
        >pricetable</nuxt-link
      > -->
      <nuxt-link to="/services" class="px-2 pb-3 text-light"
        >Services</nuxt-link
      >
      <!-- <nuxt-link to="/weblog" class="px-2 pb-3 text-light">weblog</nuxt-link> -->
      <nuxt-link to="/about" class="px-2 pb-3 text-light">About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      index: 1,
      lang: "en",
      showMenu: false,
      userInfo: {},
    };
  },

  async mounted() {
    if (this.$auth.strategy.token.status().valid() == true) {
      const userInfo = await this.$axios.get("api/usersmodel/user-info/");
      this.userInfo = userInfo.data.results[0];
    }
  },

  watch: {
    lang() {
      if (this.lang == "en") {
        this.$store.commit("lang/English");
      }
      if (this.lang == "gr") {
        this.$store.commit("lang/German");
      }
      if (this.lang == "fa") {
        this.$store.commit("lang/Farsi");
      }
      if (this.lang == "ch") {
        this.$store.commit("lang/Chines");
      }
      if (this.lang == "sp") {
        this.$store.commit("lang/Spanish");
      }
      if (this.lang == "ar") {
        this.$store.commit("lang/Arabic");
      }
    },
  },
};
</script>

<style scoped>
.nav {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2;
}

.thirdNav div {
  cursor: pointer;
}
.active {
  border-bottom: 3px solid rgb(255, 123, 0);
  cursor: default !important;
}
@media only screen and (max-width: 1300px) {
  .secNav {
    margin-left: 10%;
  }
}
@media only screen and (max-width: 1000px) {
  .secNav {
    margin-left: 5%;
  }
}
@media only screen and (max-width: 700px) {
  .secNav {
    margin-left: 0%;
  }
}
@media only screen and (max-width: 700px) {
  .secNav i {
    top: 0;
    margin-top: 5px;
  }
}
@media only screen and (max-width: 575px) {
  .show {
    display: none !important;
  }
}
</style>
