<template>
  <nav class="container w-screen py-5 px-5 h-[80px] bg-[#2B9FDC]">
    <div class="flex justify-between items-center">
      <img src="../assets/logo.svg " class="h-[50px]" alt="" />
      <button
        @click="toggleOpen"
        class="bg-[#2b9fdc] hover:bg-sky-400 w-9 h-9 rounded-md flex items-center justify-center animate-pulse animate-infinite"
      >
        <img src="../assets/more.png" class="h-[30px] w-[30px]" alt="" />
      </button>
    </div>
    <div
      v-show="open"
      class="fixed bottom-0 right-0 left-0 p-6 rounded-t-full bg-[#2B9FDC] animate-fade-up"
    >
      <ul class="grid gap-4">
        <li class="flex justify-center items-center">
          <div class="flex justify-center flex-col items-center gap-1">
            <img
              src="../assets/profile.png"
              class="h-[60px] w-[60px] rounded-full"
              alt=""
            />
            <span class="text-base font-semibold text-white"
              >Irfannudin Hakim</span
            >
          </div>
        </li>
        <li class="flex justify-center items-center rounded-full">
          <button
            href=""
            class="flex justify-center flex-col items-center text-base gap-1 w-11 h-11 bg-sky-600 hover:bg-sky-700 rounded-full"
          >
            <img
              src="../assets/bell.svg"
              class="h-[25px] w-[25px] rounded-full text-2xl"
              alt=""
            />
          </button>
        </li>
        <li class="flex justify-center items-center pt-6">
          <button
            href=""
            class="flex justify-center flex-col items-center text-base gap-1"
          >
            <Button
              @click="authStore.logout()"
              class="flex justify-center items-center text-base text-white font-semibold w-[130px] h-[40px] rounded-full bg-red-500 hover:bg-red-700"
            >
              <img
                src="../assets/keluar.png"
                class="w-[20px] h-[20px]"
                alt=""
              />
              Keluar</Button
            >
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <div class="p-5">
    <slot />
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.store.js";
import { ref } from "vue";

export default {
  name: "ExampleLayout",
  data() {
    const open = ref(false);

    const toggleOpen = () => {
      open.value = !open.value;
    };

    return {
      authStore: useAuthStore(),
      open,
      toggleOpen,
    };
  },
};
</script>

<style>
.link {
  @apply px-2 cursor-pointer hover:text-red-400;
}
</style>
