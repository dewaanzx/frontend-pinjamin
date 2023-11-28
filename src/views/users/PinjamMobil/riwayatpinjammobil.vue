<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-6 md:gap-8">
    <div class="bg-green-100">Area breadcrumb</div>
    <div>
      <div class="flex flex-col gap-4">
        <!-- search bar -->
        <form
          action=""
          class="md:w-[30%] border border-[#e5e5e5] rounded-full px-3 py-1 md:px-2 md:py-2 flex flex-row gap-3 shadow-sm"
        >
          <img src="../../assets/search-alt-2.svg" alt="" />
          <input
            type="text"
            placeholder="cari pinjaman "
            class="text-[12px] md:text-[16px] focus:outline-none w-[100%]"
          />
        </form>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Semua'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Semua')"
              :class="
                $route.params.status == 'Semua'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Semua
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Dicek'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Dicek')"
              :class="
                $route.params.status == 'Dicek'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Dicek
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Ditolak'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Ditolak')"
              :class="
                $route.params.status == 'Ditolak'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Ditolak
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Diterima'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Diterima')"
              :class="
                $route.params.status == 'Diterima'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Diterima
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Digunakan'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Digunakan')"
              :class="
                $route.params.status == 'Digunakan'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Digunakan
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-pinjam-mobil/Selesai'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Selesai')"
              :class="
                $route.params.status == 'Selesai'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Selesai
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Bagian List -->
    <div class="grid gap-4 md:gap-6 text-[14px] md:text-[18px]">
      <!-- card list -->
      <RouterLink
        class="w-full p-4 md:px-9 md:py-5 border border-[#e5e5e5] rounded-lg md:rounded-[24px] flex justify-between shadow-sm"
        v-for="car_transaction in carTransactionStore.car_transactions"
        :to="'/users/detail-pinjam-mobil/' + car_transaction.id"
      >
        <div class="w-[75%] flex flex-col gap-1">
          <p style="line-height: 1.2em">{{ car_transaction.destination }}</p>
          <span
            class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]"
            ><img
              src="../../../assets/calender.png"
              class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
              alt=""
            />{{ car_transaction.date_start }}</span
          >
          <span
            class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]"
            ><img
              src="../../../assets/time-line.png"
              class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
              alt=""
            />{{ car_transaction.time_start }}</span
          >
        </div>
        <div class="flex items-center">
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-full"
            v-if="car_transaction.status == `Diterima`"
          >
            Diterima
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#E5E5E5] text-[11px] md:text-[14px] text-[#404040] rounded-full"
            v-if="car_transaction.status == `Dicek`"
          >
            Dicek
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FFD1D1] text-[11px] md:text-[14px] text-[#d80000] rounded-full"
            v-if="car_transaction.status == `Ditolak`"
          >
            Ditolak
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FDEDCA] text-[10px] md:text-[14px] text-orange-500 rounded-full"
            v-if="car_transaction.status == `Digunakan`"
          >
            Digunakan
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#E5E5E5] text-[11px] md:text-[14px] text-[#404040] rounded-full"
            v-if="car_transaction.status == `Selesai`"
          >
            Selesai
          </button>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useCarTransactionStore } from "../../../stores/car_transaction.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      carTransactionStore: useCarTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
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
    fetchByStatus(status) {
      this.carTransactionStore.fetchByStatus(status);
    },
  },
  mounted() {
    const status = this.$route.params.status;
    this.carTransactionStore.fetchByStatus(status);
  },
};
</script>
