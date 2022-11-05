<template>
  <div>
    <div class="row m-0 g-0 min-vh-100">
      <aside class="col-2 col-sm-4 col-md-3 col-xl-2 p-0">
        <TouristLeaderSlidebar />
      </aside>
      <main class="col-10 col-sm-8 col-md-9 px-0 mx-0 col-xl-10 fade-animation">
        <AdminHeader />
        <div class="h-100 d-flex flex-column justify-content-between">
          <div class="p-4 mb-5">
            <Nuxt />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "touristLeaderLayout",
  middleware: ["auth"],
};
</script>

<style scoped>
.navbar {
  background-color: var(--bs-gray-200);
  border-color: var(--bs-gray-400) !important;
}
</style>
