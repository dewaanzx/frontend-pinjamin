<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-2">
    <!-- bagian breadcrumb -->
    <div class="text-[20px] bg-slate-200" style="line-height: 1.2em">
      breadcrumb
    </div>

    <!-- bagian step section -->
    <div class="text-[20px] bg-slate-200 h-[20vh]" style="line-height: 1.2em">
      bagian step section
    </div>
    <!-- bagian form request -->
    <form
      action=""
      @submit.prevent="create"
      class="p-3 md:p-9 rounded-lg border border-[#D9D9D9] flex flex-col gap-5"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%]">Pinjaman</span>
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <input
                class="rounded-lg w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                required
                v-model="formData.destination"
                placeholder="Masukkan Tujuan Anda"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9]"
                required
                v-model="formData.description"
                cols="30"
                rows="10"
                placeholder="Deskripsi tujuan anda"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%]"
            >Tanggal & Jam</span
          >
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <input
                class="rounded-lg w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="date"
                required
                v-model="formData.date"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              <input
                class="rounded-lg w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="time"
                required
                v-model="formData.time"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-2 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <input
                  v-model="formData.passanger"
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  type="number"
                  required
                />
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <select
                  required
                  v-model="formData.driver"
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                >
                  <option value="1">Pakai</option>
                  <option value="0">Tidak Pakai</option>
                </select>
              </div>
            </div>
            <div class="text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9]"
                required
                v-model="formData.passanger_description"
                cols="30"
                rows="10"
                placeholder="Masukan catatan anda terkait penumpang dan sopir"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- rectangle -->
      <div class="h-[1px] bg-[#D9D9D9]"></div>
      <!-- button submit -->
      <div
        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
      >
        <button
          class="bg-red-300 hover:bg-red-400 w-[25%] rounded-md text-white md:w-[10%]"
        >
          Batal
        </button>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 w-[25%] rounded-md text-white md:w-[10%]"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { useCarTransactionStore } from "../../../stores/car_transaction.store";

export default {
  data() {
    return {
      carTransactionStore: useCarTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        driver: null,
      },
    };
  },
  methods: {
    async create() {
      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
};
</script>
