<template>
  <div>
    <div
      class="navbar navbar-light fixed-top navbar-expand-md d-md-flex d-none col-12 pt-3 px-5 nav"
      :class="{ 'scrolled-header': scrolled }"
    >
      <div
        class="d-none justify-content-center text-light thirdNav d-md-flex"
        ref="show"
      >
        <nuxt-link class="navbar-brand" to="/">
          <img src="/logo.png" alt="deep treep" width="70" height="70" />
        </nuxt-link>

        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item d-flex align-items-center">
            <nuxt-link to="/" class="navbar-brand navbar-brand-style"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link to="/tor" class="navbar-brand navbar-brand-style"
              >Tours</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link
              to="/service-category"
              class="navbar-brand navbar-brand-style"
              >Service categories</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link
              to="/top-attractions"
              class="navbar-brand navbar-brand-style"
              >Top attractions</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link to="/galery" class="navbar-brand navbar-brand-style"
              >Gallery</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link to="/news" class="navbar-brand navbar-brand-style"
              >News</nuxt-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <nuxt-link to="/about" class="navbar-brand navbar-brand-style"
              >About us</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div
        class="d-none flex-column flex-sm-row justify-content-between d-md-flex flex-wrap ml-auto"
        ref="show"
      >
        <div class="d-flex align-items-center mt-3 mt-sm-0 flex-row">
          <select
            v-model="lang"
            class="border rounded px-2 mx-2 pointer form-control form-control-sm"
          >
            <option value="en">En</option>
            <option value="gr">Ge</option>
            <option value="fa">Pe</option>
            <option value="ch">Ch</option>
            <option value="sp">Sp</option>
            <option value="ar">Ar</option>
          </select>
          <a href="https://instagram.com/deep_treep">
            <i class="fa-brands fa-instagram textorange mx-1"></i>
          </a>
          <a href="https://twitter.com/@deep_treep">
            <i class="fa-brands fa-twitter textorange mx-1"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-skype textorange mx-1"></i>
          </a>
          <a href="https://pin.it/Uvu8GjP">
            <i class="fa-brands fa-pinterest-p textorange mx-1"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin-in textorange mx-1 mr-2"></i>
          </a>
          <!-- <div v-if="$auth.strategy.token.status().valid() == false">
            <i class="fa-solid fa-user textorange ml-2"></i>
            <nuxt-link to="/panel/signup" class="text-light">sign up</nuxt-link>
          </div> -->
          <div class="ml-2" v-if="!$auth.loggedIn">
            <nuxt-link
              to="/panel"
              class="text-light ml-2 btn bgorange d-flex justify-content-center align-items-center py-1 login-link"
            >
              <i class="fa fa-lock mr-2"></i>
              <span class="ms-2">login</span></nuxt-link
            >
          </div>
          <nuxt-link
            to="/panel/tourist"
            class="btn bgorange text-light"
            v-if="$auth.loggedIn && userInfo.role == 'tourist'"
            >panel</nuxt-link
          >
          <nuxt-link
            to="/panel/touristLeader"
            class="btn bgorange text-light"
            v-if="$auth.loggedIn == true && userInfo.role == 'tour-leader'"
            >panel</nuxt-link
          >
          <nuxt-link
            to="/panel/admin"
            class="btn bgorange text-light"
            v-if="$auth.loggedIn && userInfo.role == 'leader-tour-manager'"
            >panel</nuxt-link
          >
          <nuxt-link
            to="/panel/service"
            class="btn bgorange text-light"
            v-if="$auth.loggedIn && userInfo.role == 'service'"
            >panel</nuxt-link
          >
        </div>
        <!-- <div class="d-flex text-light" style="font-size: 13px !important">
          <div class="mr-4"><i class="fa fa-phone mr-2"></i>09121992129</div>
          <div><i class="fa fa-envelope mr-2"></i>dotweb@info.com</div>
        </div> -->
      </div>
    </div>
    <!--secmenu-->
    <div class="d-md-none" :class="{ nav3: showMenu }">
      <div
        class="col-12 nav2 navbar-light py-1 d-flex mx-0 __next-auth-theme-lightd-flex justify-content-between"
        :class="{ 'scrolled-header': scrolled }"
        v-if="!showMenu"
      >
        <div class="col-6 d-flex d-md-non align-items-center">
          <i
            class="fa fa-bars text-light pointer"
            @click="showMenu = true"
            style="font-size: 2rem"
          ></i>
        </div>
        <nuxt-link class="navbar-brand" to="/">
          <img src="/logo.png" alt="deep treep" width="70" height="70" />
        </nuxt-link>
      </div>
      <div
        class="d-flex flex-column flex-sm-row justify-content-between col-12 d-md-none"
        v-if="showMenu"
      >
        <div class="col-12 d-flex d-md-none mb-2 mt-3">
          <span
            class="text-light pointer"
            @click="showMenu = false"
            style="font-size: 2rem"
            >X</span
          >
        </div>
        <div class="d-flex my-3 flex-column">
          <select
            v-model="lang"
            class="border rounded px-2 mr-2 pointer form-control form-control-sm"
          >
            <option value="en">En</option>
            <option value="gr">Ge</option>
            <option value="fa">Pe</option>
            <option value="ch">Ch</option>
            <option value="sp">Sp</option>
            <option value="ar">Ar</option>
          </select>

          <div class="d-flex my-3 justify-content-between pr-2">
            <div v-if="!$auth.loggedIn">
              <i class="fa-solid fa-user textorange ml-2"></i>
              <nuxt-link to="/panel/signup" class="text-light"
                >sign up</nuxt-link
              >
            </div>
            <div class="ml-4 login-link" v-if="!$auth.loggedIn">
              <i class="fa fa-lock textorange ml-2"></i>
              <nuxt-link to="/panel" class="text-light">login</nuxt-link>
            </div>
            <nuxt-link
              to="/panel/tourist"
              class="btn bgorange text-light"
              v-if="$auth.loggedIn && userInfo.role == 'tourist'"
              >panel</nuxt-link
            >
            <nuxt-link
              to="/panel/touristLeader"
              class="btn bgorange text-light"
              v-if="$auth.loggedIn && userInfo.role == 'tour-leader'"
              >panel</nuxt-link
            >
            <nuxt-link
              to="/panel/admin"
              class="btn btn-info"
              v-if="$auth.loggedIn && userInfo.role == 'leader-tour-manager'"
              >panel</nuxt-link
            >
            <nuxt-link
              to="/panel/service"
              class="btn bgorange text-light"
              v-if="$auth.loggedIn && userInfo.role == 'service'"
              >panel</nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="/" class="px-2 pb-3 mobile-navbar">Home</nuxt-link>
        <nuxt-link to="/tor" class="px-2 pb-3 mobile-navbar">Tours</nuxt-link>
        <nuxt-link to="/service-category" class="px-2 pb-3 mobile-navbar"
          >Service categories</nuxt-link
        >
        <nuxt-link to="/top-attractions" class="px-2 pb-3 mobile-navbar"
          >Top attractions</nuxt-link
        >
        <nuxt-link to="/galery" class="px-2 pb-3 mobile-navbar"
          >Gallery</nuxt-link
        >
        <nuxt-link to="/news" class="px-2 pb-3 mb-3 mobile-navbar"
          >News</nuxt-link
        >
        <nuxt-link to="/about" class="px-2 pb-3 mb-3 mobile-navbar"
          >About us</nuxt-link
        >
        <div class="d-flex text-light justify-content-between">
          <div class="mr-4"><i class="fa fa-phone mr-2"></i>+989126660041</div>
          <div><i class="fa fa-envelope mr-2"></i>Deeptreeps@gmail.com</div>
          <!-- <div>
            <i class="fa fa-envelope mr-2"></i>Deeptreep.service@gmail.com
          </div> -->
        </div>
        <div class="d-flex justify-content-between mt-3">
          <a href="https://instagram.com/deep_treep">
            <i class="fa-brands fa-instagram textorange mx-2"></i>
          </a>
          <a href="https://twitter.com/@deep_treep">
            <i class="fa-brands fa-twitter textorange mx-2"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-skype textorange mx-2"></i>
          </a>
          <a href="https://pin.it/Uvu8GjP">
            <i class="fa-brands fa-pinterest-p textorange mx-2"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin-in textorange mx-2 mr-4"></i>
          </a>
        </div>
      </div>
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
      cateMenu: false,
      categories: {},
      scrolled: false,
    };
  },
  async mounted() {
    console.log(this.$auth.loggedIn);
    // scroll event
    window.addEventListener("scroll", (e) => {
      const value = window.scrollY;
      this.scrolled = value >= 500;
    });
    // auth
    if (this.$auth.loggedIn) {
      const userInfo = await this.$axios.get("api/usersmodel/user-info/");
      this.userInfo = userInfo.data.results[0];
    }
    const categories = await this.$axios.get("api/home/services-catgories/");
    this.categories = categories.data.results;
  },

  watch: {
    $route() {
      this.showMenu = false;
    },
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
  methods: {
    push(name) {
      this.$router.push(`/services?category=${name}`);
    },
  },
};
</script>

<style scoped>
.nav {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 2;
  max-height: 112px;
  transition: 0.3s ease background;
}

.nuxt-link-exact-active:not(.login-link) {
  color: rgb(255, 123, 0) !important;
}

.navbar-brand-style {
  position: relative;
}

.navbar-brand-style::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  background-color: rgb(255, 123, 0) !important;
  height: 2px;
  transition: 0.3s ease width;
}

.navbar-brand-style:hover::after {
  width: 110%;
}

.mobile-navbar {
  color: white;
}
.nav2 {
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s ease background;

  position: fixed;
  z-index: 2;
}
.nav3 {
  background: #555;
  position: fixed;
  z-index: 2;
  width: 80%;
  height: 100%;
}

.scrolled-header {
  background-color: #eee !important;
  border-bottom: 1px solid #999;
}

.thirdNav div {
  cursor: pointer;
}
.active {
  border-bottom: 3px solid rgb(255, 123, 0);
  cursor: default !important;
}
::-webkit-scrollbar {
  width: 2px;
}

.cateMenu {
  max-height: 200px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 16px;
}
.cateMenu2 {
  max-height: 200px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}
.cateI:hover {
  background: rgba(0, 0, 0, 0.6);
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
  .cateMenu {
    margin-top: 8px;
  }
  .cateMenu2 {
    margin-top: 3px;
  }
  .nav {
    max-height: 80px;
  }
}
@media only screen and (max-width: 700px) {
  .secNav {
    margin-left: 0%;
  }
  .cateMenu {
    margin-top: 14px;
  }
  .cateMenu2 {
    margin-top: 9px;
  }
}
@media only screen and (max-width: 700px) {
  .secNav i {
    top: 0;
    margin-top: 5px;
  }
}
@media only screen and (max-width: 590px) {
  .nav {
    max-height: 100px;
  }
  .cateMenu {
    margin-top: 34px;
  }
  .cateMenu2 {
    margin-top: 29px;
  }
}
@media only screen and (max-width: 589px) {
  .cateMenu {
    margin-top: 12px;
  }
}
@media only screen and (max-width: 575px) {
  .show {
    display: none !important;
  }
}
</style>
