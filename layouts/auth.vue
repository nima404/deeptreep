<template>
  <div class="auth">
    <Header class="head" />
    <div class="content">
      <Nuxt />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "authLayout",
  middleware: ["luck"],
};
</script>

<style scoped>
.auth {
  position: relative;
}
.head {
  position: sticky;
  top: 0;
  z-index: 2
}

.content {
  padding-top: 10vh;
  padding-bottom: 10vh;
}
</style>
