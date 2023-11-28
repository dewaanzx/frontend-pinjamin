<template>
  <section class="w-[80%] mx-auto flex flex-col gap-8">
    <!-- bagian breadcrum -->
    <header class="bg-red-200">Ini Breadcumb</header>

    <!-- bagian form edit data -->
    <article class="border border-[#D9D9D9] rounded-lg p-4 md:p-9">
      <div
        class="flex flex-col md:flex-row justify-start text-[12px] md:text-[16px] gap-4 md:gap-20"
      >
        <Span class="bg-blue-200 w-full md:w-[30%]"> Informasi Akun</Span>
        <form action="" @submit.prevent="update">
          <div
            class="bg-blue-200 flex flex-wrap md:grid gap-2 md:grid-cols-2 md:gap-4"
            v-for="user in userStore.users"
          >
            <div class="flex flex-col">
              <label for="">Nama</label>
              <input
                type="text"
                name=""
                id=""
                class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
                v-model="formData.name"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Email</label>
              <input
                type="Email"
                name=""
                id=""
                class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
                v-model="formData.email"
              />
            </div>
            <div class="flex flex-col">
              <label for="">No.Handphone</label>
              <input
                type="number"
                name=""
                id=""
                class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
                v-model="formData.phone"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Divisi</label>
              <select
                name=""
                id=""
                class="border border-[#D9D9D9] text-[10px] md:text-[14px] rounded-md p-1"
                v-model="formData.division"
              >
                <option :value="formData.division">
                  {{ formData.division }}
                </option>
                <option
                  v-for="division in divisionStore.divisions"
                  :value="division.name"
                >
                  {{ division.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col gap-1">
              <label for="">Foto</label>
              <label
                for="imageinput"
                class="bg-red-200 w-[7vmax] h-[7vmax] rounded-full"
                ><img
                  :src="'http://localhost:8080/uploads/users/' + user.picture"
                  alt=""
                  style="object-fit: cover"
                  class="w-[7vmax] h-[7vmax] rounded-full"
              /></label>
              <input
                type="file"
                class="file:hidden"
                id="imageinput"
                @change="handleFileChange"
                accept=".jpg, .jpeg, .png"
              />
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
      </div>
    </article>
  </section>
</template>
<script>
import { useDivisionStore } from "../../../stores/division.store";
import { useUserStore } from "../../../stores/user.store";

export default {
  data() {
    return {
      divisionStore: useDivisionStore(),
      userStore: useUserStore(),
      formData: {
        id: null,
        name: null,
        email: null,
        phone: null,
        division: null,
        role: null,
        picture: null,
      },
    };
  },
  methods: {
    handleFileChange(e) {
      const picture = e.target.files[0];
      this.formData.picture = picture;
    },
    async create() {
      let user = await this.userStore.add(this.formData);

      if (user) {
        this.$router.push("/users");
      }
    },
    async update() {
      let user = await this.userStore.updateProfile(this.formData);

      if (user) {
        this.userStore.detail();
      }
    },
  },
  mounted() {
    this.userStore.detail().then(() => {
      const user = this.userStore.users[0];

      this.formData.id = user.id;
      this.formData.name = user.name;
      this.formData.email = user.email;
      this.formData.phone = user.phone;
      this.formData.division = user.division;
      this.formData.role = user.role;

      this.divisionStore.nonSelected(user.division);
    });
  },
};
</script>
