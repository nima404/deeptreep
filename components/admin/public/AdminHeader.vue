<template>
  <div
    class="col-12 header d-flex align-items-center px-4 justify-content-between"
  >
    <div class="d-flex align-items-center">
      <div class="profile ml-3 border px-0">
        <img :src="userInfo.image" alt="" class="col-12 px-0" />
      </div>
      <div>{{ userInfo.first_name + " " + userInfo.last_name }}</div>
    </div>
    <div class="d-flex">
      <select
        v-model="lang"
        class="border rounded px-2 mx-2 pointer"
        style="background-color: #f3f3f3"
      >
        <option value="en">English</option>
        <option value="gr">German</option>
        <option value="fa">Farsi</option>
        <option value="ch">Chines</option>
        <option value="sp">Spanish</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
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
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
