<template>
  <section class="w-[80%] mx-auto flex flex-col gap-8">
    <header class="bg-red-200">Ini Breadcumb</header>

    <article
      class="border border-[#D9D9D9] rounded-lg md:rounded-[36px] p-5 md:p-[36px] text-[12px] md:text-[16px]"
    >
      <form action="" class="flex flex-col gap-4 md:gap-20 md:flex-row">
        <span class="md:w-[15%]">Bukti Ambil Mobil</span>
        <div class="md:w-[80%] flex flex-col md:gap-9 gap-2">
          <div class="flex flex-row gap-5">
            <div class="flex flex-col gap-1">
              <Label>Tanggal</Label>
              <input
                type="date"
                class="rounded-md p-1 md:rounded-[16px] text-[10px] md:p-3 md:text-[12px] hover:bg-slate-100 border border-[#D9D9D9]"
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label>Jam</Label>
              <input
                type="time"
                class="rounded-md p-1 md:rounded-[16px] md:p-3 text-[10px] md:text-[12px] hover:bg-slate-100 border border-[#D9D9D9]"
              />
            </div>
          </div>
          <!-- upload foto -->
          <div>
            <label for="">Upload Foto</label>
            <label
              for="imageinput"
              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5"
            >
              <div class="grid justify-items-center space-y-2">
                <img src="../../../assets/camera.svg" alt="" />
              </div>
              <input
                type="file"
                class="file:hidden w-[45%] text-[11px] md:w-[11%]"
                id="imageinput"
                @change="handleFileChange"
                accept=".jpg, .jpeg, .png"
              />
            </label>
          </div>
          <!-- upload foto -->
          <div>
            <label for="">Upload SIM</label>
            <label
              for="imageinputSIM"
              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5"
            >
              <div class="grid justify-items-center space-y-2">
                <img src="../../../assets/camera.svg" alt="" />
              </div>
              <input
                type="file"
                class="file:hidden w-[45%] text-[11px] md:w-[11%]"
                id="imageinputSIM"
                @change="handleFileChange"
                accept=".jpg, .jpeg, .png"
              />
            </label>
          </div>
        </div>
      </form>

      <!-- rectangle -->
      <div class="bg-[#D9D9D9] h-[1px] my-[20px] md:my-[36px]"></div>

      <div class="flex flex-row gap-3 justify-end">
        <button
          class="bg-gray-400 hover:bg-slate-500 md:px-8 md:py-[10px] md:rounded-[16px] text-white p-1 rounded-md"
        >
          Batal
        </button>
        <button
          class="bg-[#E26B00] md:hover:bg-orange-600 md:px-8 md:py-[10px] md:rounded-[16px] text-white p-1 rounded-md"
        >
          Konfirmasi
        </button>
      </div>
    </article>
  </section>
</template>
<script></script>
