<template>
  <div class="main">
    <Header class="head"/>
    <Nuxt class="content"/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "mainLayout",
  middleware: ["luck"],
};
</script>

<style>
.main {
  position: relative;
}
.head {
  position: sticky;
  top: 0;
  z-index: 2
}
.content {
}
</style>
