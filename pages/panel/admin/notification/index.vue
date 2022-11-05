<template>
  <div>
    <nuxt-link to="create" class="btn btn-success mb-3"
      >create notification</nuxt-link
    >
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
};
</script>

<style></style>
