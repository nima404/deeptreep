<template>
  <div>
    <Header />
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
};
</script>

<style scoped>
.footer-container {
  margin-top: -10vh;
}

.content {
}
</style>
