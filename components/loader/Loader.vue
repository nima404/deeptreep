<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"><i class="fa fa-plane"></i></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 2s ease-in-out infinite;
  position: fixed;
  left: 0%;
  top: 45%;
}
@keyframes spin {
  0% {
    left: 0%;
  }
  100% {
    left: 90%;
  }
}
</style>
