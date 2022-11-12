<template>
  <div>
    <img class="col-3" :src="service.image" />
    <table class="table">
      <tr>
        <td class="col-12">title:</td>
        <td class="col-12">{{ service.title }}</td>
      </tr>
      <tr>
        <td class="col-12">price:</td>
        <td class="col-12">{{ service.price }}</td>
      </tr>
      <tr>
        <td class="col-12">inventory:</td>
        <td class="col-12">{{ service.inventory }}</td>
      </tr>
      <tr>
        <td class="col-12">country:</td>
        <td class="col-12">{{ service.country }}</td>
      </tr>
      <tr>
        <td class="col-12">city:</td>
        <td class="col-12">{{ service.city }}</td>
      </tr>
      <tr>
        <td class="col-12">category:</td>
        <td class="col-12">{{ service.category }}</td>
      </tr>
      <tr>
        <td class="col-12">descriptions:</td>
        <td class="col-12">{{ service.descriptions }}</td>
      </tr>
    </table>
    <div class="row mx-0 mt-5">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>user</th>
            <th>comment</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(comment, index) in comments.data.results"
            :key="comment.id"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ comment.user }}</td>
            <td>{{ comment.comment }}</td>
            <td>{{ comment.date.split("T")[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <textarea
      cols="30"
      rows="5"
      v-model="comment"
      class="col-12"
      required
    ></textarea>
    <button class="btn btn-success" @click="send">send</button>
  </div>
</template>

<script>
export default {
  name: "detail",
  layout: "service",

  async asyncData({ $axios, params }) {
    const service = await $axios.get(
      `api/services/service-detail/${params.serviceId}/`
    );
    const comments = await $axios.get(
      `api/services/comments/${params.serviceId}/`
    );
    return {
      service: service.data.results[0],
      comments,
    };
  },
  methods: {
    async send() {
      try {
        const res = await this.$axios.post(`api/services/comment-create/`, {
          comment: this.comment,
          service: this.$route.params.serviceId,
          status: true,
        });
        window.location.reload();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
