<template>
  <!-- bagian main halaman -->
  <div class="w-[80%] mx-auto flex flex-col gap-8">
    <!-- section breadcrumb -->
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      ini bagian breadcumb
    </div>
    <!-- section profile & setting profile -->
    <div class="flex flex-col md:flex-row md:gap-8 gap-8 justify-center">
      <Div
        class="flex flex-col md:w-[40%] items-center md:gap-5 gap-3 border border-[#D9D9D9] rounded-xl p-5 shadow-sm"
      >
        <!-- foto profile -->
        <div
          class="bg-transparent rounded-full md:shadow-lg w-[10vmax] h-[10vmax] md:w-[7vmax] md:h-[7vmax] flex justify-center items-center"
        >
          <img
            src="../../../assets/profile.png"
            class="rounded-full w-[8vmax] h-[8vmax] md:w-[7vmax] md:h-[7vmax]"
            style="object-fit: cover"
            alt=""
          />
        </div>
        <!-- Biodata -->
        <div class="flex flex-col gap-1 items-center">
          <P
            class="font-medium text-[16px] lg:text-[20px]"
            style="line-height: 1.2em"
            >Irfan Jauhari</P
          >
          <p class="text-[12px] lg:text-[13px] text-gray-500">
            Digital Marketing
          </p>
          <p class="text-[12px] lg:text-[13px] text-gray-500">
            Irfanjauh@email.com
          </p>
          <p class="text-[12px] lg:text-[13px] text-gray-500">08989898</p>
        </div>
      </Div>

      <!-- secction setting profile -->
      <div
        class="border shadow-sm border-[#D9D9D9] rounded-xl px-2 py-3 md:px-3 md:py-11 flex flex-col gap-2 md:gap-6 md:w-[20%]"
      >
        <!-- button akun -->
        <button
          @click="$router.push('/users/edit-profile')"
          class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md"
        >
          <img
            src="../../../assets/akun.svg"
            class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            alt=""
          />Edit profile
        </button>

        <!-- ganti password -->
        <button
          class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md"
          @click="$router.push('/users/ganti-password')"
        >
          <img
            src="../../../assets/password.svg"
            class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            alt=""
          />Ubah password
        </button>

        <!-- informasi -->
        <button
          class="bg-[#2B9FDC] text-[12px] hover:bg-sky-600 md:text-[16px] md:p-2 text-white justify-start w-[100%] flex flex-row p-1 gap-2 rounded-md"
        >
          <img
            src="../../../assets/informasi.svg"
            class="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
            alt=""
          />Informasi
        </button>
      </div>
    </div>
  </div>
</template>
<script></script>
