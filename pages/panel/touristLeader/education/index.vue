<template>
  <div class="row g-3">
    <div class="col-6">
      <div class="card mb-3" v-for="item in videos" :key="item.id">
        <video controls class="card-img-top">
          <source :src="item.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="card-body">
          <h5 class="card-title text-center">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "touristeducation",
  layout: "touristLeader",
  async asyncData({ $axios }) {
    let videos = {};
    try {
      videos = await $axios.get("/api/toursLeaders/educational-videos/");
    } catch {}
    return {
      videos: videos?.data?.results || [],
    };
  },
};
</script>

<style></style>
