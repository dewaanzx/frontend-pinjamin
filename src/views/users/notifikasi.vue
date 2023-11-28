<template>
  <SECtion class="w-[80%] mx-auto flex flex-col gap-8">
    <!-- bagian breadcrum -->
    <header class="bg-red-200">Ini Breadcumb</header>
    <!-- ini bagian notifikasi -->
    <article class="flex flex-col gap-3">
      <div
        class="bg-[#ECF8FF] p-4 md:p-9 rounded-xl text-[11px] flex flex-row gap-4 md:gap-9 shadow-sm hover:bg-blue-100"
        v-for="notification in notificationStore.notifications"
      >
        <div
          class="bg-[#0C6898] rounded-full p-3 flex justify-center items-center"
          v-if="notification.type == `Car`"
        >
          <img src="../../assets/car-side.svg" alt="" class="w-[2vmax]" />
        </div>
        <div
          class="bg-[#a21fa7] rounded-full p-3 flex justify-center items-center"
          v-if="notification.type == `Room`"
        >
          <img src="../../assets/car-side.svg" alt="" class="w-[2vmax]" />
        </div>
        <div class="flex flex-col gap-1 no-wrap">
          <P style="line-height: 1.2em" class="md:text-[16px]">{{
            notification.notification
          }}</P>
          <p class="text-[9px] md:text-[14px] text-[#404040]">
            2 jam yang lalu
          </p>
        </div>
      </div>
    </article>
  </SECtion>
</template>
<script>
import { useNotificationStore } from "../../stores/notification.store";

export default {
  data() {
    return {
      notificationStore: useNotificationStore(),
    };
  },
  methods: {},
  mounted() {
    this.notificationStore.fetch();
  },
};
</script>
