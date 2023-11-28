<template>
  <nav
    class="py-5 px-5 lg:px-[140px] lg:py-[10px] h-[80px] bg-[#2B9FDC] xl:w-[100%]"
  >
    <div
      class="flex justify-between items-center"
      v-for="user in userStore.users"
    >
      <RouterLink :to="'/users'"
        ><img src="../assets/logo.svg " class="h-[50px]" alt=""
      /></RouterLink>

      <!-- toggle responsive -->
      <button
        @click="toggleOpen"
        class="w-9 h-9 rounded-md animate-bounce animate-infinite animate-alternate-reverse md:hidden block"
      >
        <img src="../assets/more.png" class="h-[30px] w-[30px]" alt="" />
      </button>
      <!-- Bagian md: -->
      <div class="hidden sm:block">
        <ul class="flex flex-row gap-6">
          <li class="flex justify-center items-center">
            <button
              href=""
              class="flex justify-center flex-col items-center text-base gap-1 w-11 h-11 bg-[#2B9FDC] hover:bg-sky-600 rounded-full"
              @click="$router.push('/users/notifikasi')"
            >
              <img
                src="../assets/bell.svg"
                class="h-[25px] w-[25px] rounded-full text-2xl"
                alt=""
              />
            </button>
          </li>
          <li class="flex justify-center items-center">
            <div class="flex justify-center items-center gap-3">
              <img
                :src="'http://localhost:8080/uploads/users/' + user.picture"
                style="object-fit: cover"
                class="h-[32px] w-[32px] rounded-full"
                alt=""
              />
              <span class="text-white">{{ user.name }}</span>
            </div>
          </li>
          <!-- <li class="flex justify-center items-center">
            <Button
              @click="authStore.logout()"
              class="flex justify-center items-center text-[12px] text-white font-semibold w-[40px] h-[28px] rounded-lg bg-red-500 hover:bg-red-700"
            >
              <img
                src="../assets/keluar.png"
                class="w-[15px] h-[15px]"
                alt=""
              />
            </Button>
          </li> -->
        </ul>
      </div>
    </div>
    <div
      v-show="open"
      class="fixed bottom-0 right-0 left-0 p-6 rounded-t-full bg-[#2B9FDC] animate-fade-up md:hidden block"
      v-for="user in userStore.users"
    >
      <ul class="grid gap-4">
        <li class="flex justify-center items-center">
          <div class="flex justify-center flex-col items-center gap-1">
            <img
              :src="'http://localhost:8080/uploads/users/' + user.picture"
              style="object-fit: cover"
              class="h-[40px] w-[40px] rounded-full"
              alt=""
            />
            <span class="text-[12px] font-semibold text-white">
              {{ user.name }}
            </span>
          </div>
        </li>
        <li class="flex justify-center items-center rounded-full">
          <button
            href=""
            @click="$router.push('/users/notifikasi')"
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
              class="flex justify-center items-center text-[15px] text-white font-semibold w-[120px] h-[30px] rounded-full bg-red-500 hover:bg-red-600"
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
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user.store";

export default {
  name: "Navbar",
  data() {
    const open = ref(false);
    const toggleOpen = () => {
      open.value = !open.value;
    };
    return {
      userStore: useUserStore(),
      authStore: useAuthStore(),
      open,
      toggleOpen,
    };
  },
  mounted() {
    this.userStore.detail();
  },
  components: { RouterLink },
};
</script>

<style>
.link {
  @apply px-2 cursor-pointer hover:text-red-400;
}
</style>
