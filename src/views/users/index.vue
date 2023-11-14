<template>
  <!-- DIV Mobil & Ruangan -->
  <div class="lg:w-[82%] xl:w-[1240px] mx-auto">
    <div class="flex flex-col gap-5 lg:flex-row justify-around">
      <div>
        <span class="text-[17px] xl:text-[27px]">Ruangan</span>
        <div
          class="w-80% bg-white rounded-[22px] border border-black-200 lg:w-[390px] xl:w-[608px]"
        >
          <div
            class="m-5 flex justify-between items-center pb-5 border-b-2 border-black-200"
          >
            <div class="flex flex-col gap-3">
              <Span class="text-[16px] font-semibold xl:text-[24px]"
                >PTUN Yogyakarta</Span
              >
              <div>
                <div class="flex flex-row gap-2 items-center">
                  <img
                    src="../../assets/calender.png"
                    class="h-5 xl:h-7"
                    alt=""
                  />
                  <span class="text-[13px] xl:text-[18px]">32-2-2003</span>
                </div>
                <div class="flex flex-row gap-2 items-center">
                  <img
                    src="../../assets/time-line.png"
                    class="h-5 xl:h-7"
                    alt=""
                  />
                  <span class="text-[13px] xl:text-[18px]">32-2-2003</span>
                </div>
              </div>
            </div>
            <div
              class="w-[76px] h-[20px] rounded-[12px] text-[13px] text-[#008000] bg-[#EEFFEE] flex items-center justify-center"
            >
              Diterima
            </div>
          </div>
          <div
            class="m-5 text-[12px] flex flex-1 items-center justify-between lg:h-[40px]"
          >
            <span class="lg:text-[13px]"
              >Pinjaman diterima, ayo ambil mobil</span
            >
            <button
              class="bg-[#E26B00] text-white w-[90px] h-[20px] rounded-[12px] hover:bg-orange-700 xl:w-[117px] xl:h-[44px] text-[11px] xl:text-[12px]"
            >
              Ambil mobil
            </button>
          </div>
        </div>
      </div>

      <!--  -->
      <div>
        <span class="text-[17px] xl:text-[27px]">Ruangan</span>
        <div
          class="w-80% bg-white rounded-[22px] border border-black-200 lg:w-[390px] xl:w-[608px]"
        >
          <div
            class="m-5 flex justify-between items-center pb-5 border-b-2 border-black-200"
          >
            <div class="flex flex-col gap-3">
              <Span class="text-[16px] font-semibold xl:text-[24px]"
                >PTUN Yogyakarta</Span
              >
              <div>
                <div class="flex flex-row gap-2 items-center">
                  <img
                    src="../../assets/calender.png"
                    class="h-5 xl:h-7"
                    alt=""
                  />
                  <span class="text-[13px] xl:text-[18px]">32-2-2003</span>
                </div>
                <div class="flex flex-row gap-2 items-center">
                  <img
                    src="../../assets/time-line.png"
                    class="h-5 xl:h-7"
                    alt=""
                  />
                  <span class="text-[13px] xl:text-[18px]">32-2-2003</span>
                </div>
              </div>
            </div>
            <div
              class="w-[76px] h-[20px] rounded-[12px] text-[13px] text-[#008000] bg-[#EEFFEE] flex items-center justify-center"
            >
              Diterima
            </div>
          </div>
          <div
            class="m-5 text-[12px] flex flex-1 items-center justify-between lg:h-[40px]"
          >
            <span class="lg:text-[13px]"
              >Pinjaman diterima, ayo ambil mobil</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pinjam Mobil Pinjam Ruangan -->
  <div
    class="w-[100%] mx-auto border border-black-200 mt-20 rounded-[22px] p-5 flex flex-col items-center lg:w-[82%]"
  >
    <div
      class="flex flex-wrap justify-around gap-5 md:gap-[75px] md:place-items-stretch"
    >
      <Button
        class="h-[103px] w-[103px] xl:h-[233px] xl:w-[233px] bg-[#C1E9FF] flex flex-col justify-center items-center gap-2 rounded-[17px] hover:bg-blue-300"
      >
        <img
          src="../../assets/+.png"
          class="h-[36px] w-[36px] md:h-[46px] md:w-[46px] xl:h-[76px] xl:w-[76px]"
          alt=""
        />
        <span class="text-[10px] lg:text-[12px] xl:text-[23px]"
          >Pinjam Mobil
        </span></Button
      >
      <Button
        class="h-[103px] w-[103px] xl:h-[233px] xl:w-[233px] bg-[#C1E9FF] flex flex-col justify-center items-center gap-2 rounded-[17px] hover:bg-blue-300"
      >
        <img
          src="../../assets/riwayatpinjammobil.png"
          class="h-[36px] w-[36px] md:h-[46px] md:w-[46px] xl:h-[76px] xl:w-[76px]"
          alt=""
        />
        <span class="text-[10px] lg:text-[12px] xl:text-[23px]"
          >Riwayat Pinjam Mobil
        </span></Button
      >
      <Button
        class="h-[103px] w-[103px] xl:h-[233px] xl:w-[233px] bg-[#FDEDCA] flex flex-col justify-center items-center gap-2 rounded-[17px] hover:bg-orange-300"
      >
        <img
          src="../../assets/+lagi.png"
          class="h-[36px] w-[36px] md:h-[46px] md:w-[46px] xl:h-[76px] xl:w-[76px]"
          alt=""
        />
        <span class="text-[10px] lg:text-[12px] xl:text-[23px]"
          >Pinjam Ruang
        </span></Button
      >
      <Button
        class="h-[103px] w-[103px] xl:h-[233px] xl:w-[233px] bg-[#FDEDCA] flex flex-col justify-center items-center gap-2 rounded-[17px] hover:bg-orange-300"
      >
        <img
          src="../../assets/pinjamruang.png"
          class="h-[36px] w-[36px] md:h-[46px] md:w-[46px] xl:h-[76px] xl:w-[76px]"
          alt=""
        />
        <span class="text-[10px] lg:text-[12px] xl:text-[23px]"
          >Riwayat Pinjam Ruangan
        </span></Button
      >
    </div>
  </div>
</template>
<script></script>

<style>
center {
  margin: 0 auto;
}
</style>
