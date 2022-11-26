<template>
  <div v-if="loading" class="loading-page">
    <div class="loading">
      <div class="d-flex align-items-center logo-container">
        <img src="/logo.png" alt="logo" class="search-logo mr-5" />
        <i class="fa fa-plane"></i>
      </div>
    </div>
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
  color: #17a2b8;
  text-align: center;
  font-size: 6rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  animation: spin 2s ease-in-out infinite;
  position: fixed;
  left: 0%;
  top: 45%;
}

.search-logo {
  width: 70px;
  height: 70px;
}

.logo-container {
  position: relative;
}
.logo-container::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 80%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.315);
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
