<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "mainLayout",
  middleware: ["luck"],
};
</script>

<style></style>
