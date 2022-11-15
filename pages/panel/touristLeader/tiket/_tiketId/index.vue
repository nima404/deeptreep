<template>
  <div>
    <div class="rounded border p-3 mb-3">
      <div class="d-flex flex-column-reverse">
        <div v-for="message in messages.results" :key="message.id">
          <div
            class="col-12 d-flex justify-content-end px-0"
            v-if="message.sender == 'tourleader'"
          >
            <div class="bg-info text-light rounded border px-2 card-message me">
              {{ message.text }}
            </div>
          </div>
          <div class="col-12 px-0 d-flex" v-if="message.sender == 'tourist'">
            <div class="bg-light rounded border px-2 card-message other">
              {{ message.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="input-group input-group-lg mt-3">
        <label
          class="btn btn-secondary m-0 d-flex justify-content-center align-items-center"
          type="button"
          for="file-input"
          style="border-radius: 3px 0 0 3px !important"
        >
          <i class="fa fa-file"></i>
        </label>
        <input
          type="text"
          class="form-control"
          v-model="text"
          placeholder="text"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-primary"
          style="border-radius: 0 3px 3px 0 !important"
          type="button"
          @click="sendMessage"
          id="button-addon2"
        >
          send
        </button>
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
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.next)"
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous == null && messages.next == null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous != null && messages.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.previous)"
      >
        <i class="fa fa-chevron-left"></i>
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="messages.previous == null && messages.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(messages.next)"
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <input
      type="file"
      class="col-12 p-0 d-none"
      ref="fileInput"
      id="file-input"
    />
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
<style>
.card-message {
  width: 40%;
  min-height: 100px;
  position: relative;
}

.card-message.me::after {
  position: absolute;
  right: -10px;
  top: 20px;
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #17a2b8 !important;
  border-bottom: 5px solid transparent;
}

.card-message.other::after {
  position: absolute;
  left: -10px;
  top: 20px;
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 10px solid #eee !important;
  border-bottom: 5px solid transparent;
}
</style>
