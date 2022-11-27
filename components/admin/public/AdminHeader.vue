<template>
  <div
    class="col-12 header d-flex align-items-center px-4 justify-content-between"
  >
    <div class="d-flex align-items-center">
      <div class="profile ml-3 border px-0 position-relative">
        <img
          :src="userInfo.image || '/default.jpg'"
          alt=""
          class="col-12 px-0 rounded-circle"
        />

        <label
          class="position-absolute badge rounded-pill bg-info text-light pointer"
          style="bottom: 0; left: 0"
          for="file-input"
        >
          <i class="fa fa-pen"></i>
        </label>
      </div>
      <div>
        {{ (userInfo.first_name || "") + " " + (userInfo.last_name || "") }}
      </div>
    </div>
    <div class="d-flex align-items-center">
      <select
        v-model="lang"
        class="border rounded px-2 mx-2 pointer form-control form-control-sm"
        style="background-color: #f3f3f3"
      >
        <option value="en">English</option>
        <option value="gr">German</option>
        <option value="fa">Farsi</option>
        <option value="ch">Chines</option>
        <option value="sp">Spanish</option>
        <option value="ar">Arabic</option>
      </select>

      <nuxt-link class="" to="/">
        <img src="/logo.png" alt="deep treep" width="70" height="70" />
      </nuxt-link>
    </div>

    <!-- input -->
    <input
      type="file"
      class="col-12 p-0 d-none"
      @change="fileInputUpload"
      id="file-input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "en",
      userInfo: {},
    };
  },
  async mounted() {
    const userInfo = await this.$axios.get("api/usersmodel/user-info/");
    this.userInfo = userInfo.data.results[0];
    console.log(userInfo.data.results[0]);
  },
  methods: {
    async fileInputUpload(event) {
      const bodyFormData = new FormData();
      if (event.target.files[0] != undefined) {
        bodyFormData.append("image", event.target.files[0]);

        const res = await this.$axios.put(
          "api/usersmodel/user-update/",
          bodyFormData
        );
        console.log(res);
      }
    },
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
.header {
  background-color: #f3f3f3;
  box-shadow: 4px 0px 10px gray;
  direction: rtl;
  height: 74.59px;
}
.profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
}
</style>
