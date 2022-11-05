<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>date</th>
          <th>sender</th>
          <th>text</th>
          <th>file</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="message in messages.results" :key="message.id">
          <td>{{ message.id }}</td>
          <td>{{ message.date.split("T")[0] }}</td>
          <td>{{ message.sender }}</td>
          <td>{{ message.text }}</td>
          <td v-if="message.file == null">-</td>
          <td v-else>
            <nuxt-link :to="`${message.file}`">file</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
    <textarea
      class="col-12"
      cols="30"
      rows="5"
      v-model="text"
      placeholder="text"
    ></textarea>
    <input type="file" class="col-12 p-0" ref="fileInput" />
    <button class="btn btn-success mt-3" @click="sendMessage">send</button>
  </div>
</template>

<script>
export default {
  name: "message",
  layout: "touristLeader",
  data() {
    return {
      text: "",
    };
  },
  async asyncData({ $axios, params }) {
    const messages = await $axios.$get(
      `/api/toursLeaders/messages/${params.tiketId}/`
    );
    return {
      messages,
    };
  },
  methods: {
    async sendMessage() {
      try {
        const bodyFormData = new FormData();
        bodyFormData.append("text", this.text);
        bodyFormData.append("tiket", this.$route.params.tiketId);
        bodyFormData.append("file", this.$refs.fileInput.files[0]);
        const res = await this.$axios.post(
          "api/toursLeaders/message/create/",
          bodyFormData
        );
        console.log(this.$refs.fileInput.files[0]);
        console.log(res);
        this.$router.push("/panel/touristLeader/tiket");
      } catch (error) {
        console.log(this.$refs.fileInput.files[0]);
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
