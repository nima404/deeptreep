<template>
  <div>
    <!-- <nuxt-link
      to="/panel/admin/notification/create"
      class="btn btn-success mb-3"
      >create notification</nuxt-link
    > -->
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>tour</th>
          <th>tourist</th>
          <th>tourist info</th>
          <th>date</th>
          <th>message</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="notification in notifications.data.results"
          :key="notification.id"
        >
          <td>
            {{ notification.id }}
          </td>
          <td>
            {{ notification.tour }}
          </td>
          <td>
            {{ notification.tourist }}
          </td>
          <td>
            {{ notification.tourist_info }}
          </td>
          <td>
            {{ notification.date.split("T")[0] }}
          </td>
          <td>
            {{ notification.message }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="notifications.previous != null && notifications.next != null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(notifications.previous)"
      >
        prev
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(notifications.next)"
      >
        next
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="notifications.previous == null && notifications.next == null"
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
      v-if="notifications.previous != null && notifications.next == null"
    >
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(notifications.previous)"
      >
        prev
      </button>
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <div
      class="row mx-0 col-12 justify-content-center my-3"
      v-if="notifications.previous == null && notifications.next != null"
    >
      <button class="bg-light mx-2 border rounded">
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        class="btn btn-info pointer mx-2"
        @click="nextprev(notifications.next)"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
  layout: "admin",

  async asyncData({ $axios }) {
    const notifications = await $axios.get(
      "api/leadersTourManagers/notifications-dissatisfaction/"
    );
    return {
      notifications,
    };
  },
  methods: {
    async nextprev(id) {
      try {
        const res = await this.axios.get(id);
        this.notifications = res;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
