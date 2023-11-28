<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-8">
    <!-- bagian breadcrumb -->
    <div class="text-[20px] bg-slate-200" style="line-height: 1.2em">
      breadcrumb
    </div>

    <!-- bagian form request -->
    <form
      action=""
      class="p-3 md:p-9 rounded-lg border border-[#D9D9D9] flex flex-col gap-5"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ carTransactionStore.car_transactions.destination }}
              </p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">
                {{ carTransactionStore.car_transactions.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div>
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Tanggal & Jam</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Tanggal</label>
                <p class="md:text-[14px]">
                  {{ carTransactionStore.car_transactions.date_start }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam</label>
                <p class="md:text-[14px]">
                  {{ carTransactionStore.car_transactions.time_start }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <p class="md:text-[14px]">
                  {{ carTransactionStore.car_transactions.passanger }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p
                  class="md:text-[14px]"
                  v-if="carTransactionStore.car_transactions.driver == 1"
                >
                  Ya
                </p>
                <p
                  class="md:text-[14px]"
                  v-if="carTransactionStore.car_transactions.driver == 0"
                >
                  Tidak
                </p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Deskripsi </label>
              <p class="md:text-[14px]">
                {{ carTransactionStore.car_transactions.passanger_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Status -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Status</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <p class="font-semibold md:text-[14px]">
                <a
                  :class="
                    carTransactionStore.car_transactions.status == 'Diterima'
                      ? 'text-green-600'
                      : carTransactionStore.car_transactions.status == 'Ditolak'
                      ? 'text-red-600'
                      : carTransactionStore.car_transactions.status == 'Dicek'
                      ? 'text-gray-600'
                      : carTransactionStore.car_transactions.status == 'Selesai'
                      ? 'text-gray-600'
                      : carTransactionStore.car_transactions.status ==
                        'Digunakan'
                      ? 'text-orange-400'
                      : ''
                  "
                >
                  {{ carTransactionStore.car_transactions.status }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- box alert -->
    <div
      class="rounded-lg border border-[#D9D9D9] p-4 text-[11px] md:text-[16px] flex justify-center"
    >
      <p>
        Data mobil akan muncul jika permintaan peminjaman
        <span class="text-green-500 font-semibold">Diterima</span>
      </p>
    </div>

    <!-- box mobil -->
    <div
      class="rounded-lg border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row gap-3 md:gap-6"
    >
      <div
        class="bg-red-200 w-[50%] md:w-[25%] h-[12vmax] rounded-sm m-auto md:m-0"
      >
        <img
          src="../../../assets/car.png"
          class="h-[12vmax] rounded-md"
          style="object-fit: cover"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-2 bg-red-100 md:w-full md:gap-2">
        <!-- Merk dan tipe mobil -->
        <div class="flex flex-col gap-2">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            Toyota Avanza G 1.3 2015
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odio dicta aliquam, placeat magnam velit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequuntur odio dicta
            aliquam, placeat magnam velit.
          </p>
        </div>
        <!-- Kapasitas -->
        <div class="flex flex-col">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            Kapasitas
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            7 orang
          </p>
        </div>
        <!-- Nomor kendaraan -->
        <div class="flex flex-col">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            Nomor kendaraan
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            AB 1111 XX
          </p>
        </div>
      </div>
    </div>
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
  mounted() {
    const id = this.$route.params.id;
    this.carTransactionStore.show(id);
  },
};
</script>
