<template>
  <div>
    <div class="rounded border p-3 mb-3 d-flex flex-column-reverse">
      <div v-for="message in messages.results" :key="message.id">
        <div
          class="col-12 d-flex justify-content-end px-0"
          v-if="message.sender == 'tourleader'"
        >
          <div
            class="bg-info text-light rounded border px-2"
            style="max-width: 50%"
          >
            {{ message.text }}
          </div>
        </div>
        <div class="col-12 px-0 d-flex" v-if="message.sender == 'tourist'">
          <div class="bg-light rounded border px-2" style="max-width: 50%">
            {{ message.text }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous != null && messages.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.previous)"
      >
        prev
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.next)"
      >
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous == null && messages.next == null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous != null && messages.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">next</button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous == null && messages.next != null"
    >
      <button class="bg-light mx-2 border rounded">prev</button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.next)"
      >
        next
      </button>
    </div>
    <textarea
      class="col-12"
      cols="30"
      rows="2"
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
        if (this.$refs.fileInput.files[0] != undefined) {
          bodyFormData.append("file", this.$refs.fileInput.files[0]);
        }
        const res = await this.$axios.post(
          "api/toursLeaders/message/create/",
          bodyFormData
        );
        console.log(this.$refs.fileInput.files[0]);
        console.log(res);
        window.location.reload();
      } catch (error) {
        console.log(this.$refs.fileInput.files[0]);
        console.log(error);
      }
    },
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.tours = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
