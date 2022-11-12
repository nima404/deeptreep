<template>
  <div>
    <div class="rounded border p-3 mb-3 d-flex flex-column-reverse">
      <div v-for="message in messages.results" :key="message.id">
        <div
          class="col-12 d-flex justify-content-end px-0"
          v-if="message.sender == 'tourist'"
        >
          <div
            class="bg-info text-light rounded border px-2"
            style="max-width: 50%"
          >
            {{ message.text }}
          </div>
        </div>
        <div class="col-12 px-0 d-flex" v-if="message.sender == 'tourleader'">
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
  layout: "tourist",
  data() {
    return {
      text: "",
    };
  },
  async asyncData({ $axios, params }) {
    const messages = await $axios.$get(
      `/api/tourists/messages/${params.tiketId}/`
    );
    return {
      messages,
    };
  },
  methods: {
    async sendMessage() {
      try {
        const res = await this.$axios.post("api/tourists/message/create/", {
          text: this.text,
          tiket: this.$route.params.tiketId,
          file: this.$refs.fileInput.files[0],
        });
        window.location.reload();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.messages = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
