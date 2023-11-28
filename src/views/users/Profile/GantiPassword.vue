<template>
  <section class="w-[80%] mx-auto flex flex-col gap-8">
    <!-- bagian breadcrum -->
    <header class="bg-red-200">Ini breadcrumb</header>

    <!-- bagian form edit data -->
    <article
      class="border border-[#D9D9D9] rounded-lg md:rounded-[36px] p-4 md:p-9"
    >
      <form action="" @submit.prevent="update">
        <div
          class="flex flex-col md:flex-row justify-start text-[12px] md:text-[16px] gap-4 md:gap-20"
        >
          <Span class="bg-blue-200 w-full md:w-[30%]"> Ganti password</Span>
          <div class="bg-blue-200 grid w-full gap-2 md:gap-4">
            <div class="flex flex-col gap-2">
              <label for="">Password Lama</label>
              <input
                type="Password"
                name=""
                id=""
                class="border border-[#D9D9D9] rounded-md md:rounded-[16px] md:px-5 md:py-3 p-1"
                v-model="formData.oldpassword"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="">Password Baru</label>
              <input
                type="Password"
                name=""
                id=""
                class="border border-[#D9D9D9] rounded-md md:rounded-[16px] md:px-5 md:py-3 p-1"
                v-model="formData.newpassword"
              />
            </div>
          </div>
        </div>
        <div class="mt-4 flex gap-4 justify-end">
          <Button
            class="bg-red-500 py-1 px-3 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-red-700"
            @click="$router.push('/users/profile')"
            >Batal</Button
          >
          <Button
            class="bg-[#E26B00] py-1 px-3 text-[11px] md:text-[16px] text-white rounded-lg hover:bg-orange-600"
            >Simpan</Button
          >
        </div>
      </form>
    </article>
  </section>
</template>
<script>
import { useUserStore } from "../../../stores/user.store";

export default {
  data() {
    return {
      userStore: useUserStore(),
      formData: {
        id: null,
        oldpassword: null,
        newpassword: null,
      },
    };
  },
  methods: {
    async update() {
      let user = await this.userStore.updatePassword(this.formData);

      if (user) {
        this.$router.push("/users/ganti-password");
      }
    },
  },
  mounted() {
    this.userStore.detail().then(() => {
      const user = this.userStore.users[0];

      this.formData.id = user.id;
    });
  },
};
</script>
