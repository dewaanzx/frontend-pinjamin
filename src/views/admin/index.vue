<template>
	<!-- ini pembungkus -->
	<div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
	  <!-- Card Informasi -->
	  <div class="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
		<!-- bagian status pinjam mobil -->
		<div class="md:w-[35vw]">
		  <div>
			<span class="text-[18px] md:text-[24px]" style="line-height: 2em"
			  >Mobil</span
			>
			<!-- cardnya -->
			<div
			  class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
			>
			  <div class="bg-orange-50 flex justify-between items-center">
				<div class="flex flex-col bg-red-100">
				  <Span
					class="text-[18px] md:text-[27px] font-semibold pb-3"
					style="line-height: 1.2em"
					>Sekolah Vokasi UNS Surakarta
				  </Span>
				  <Span
					class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
				  >
					<img
					  src="../../assets/calender.png "
					  class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
					  alt=""
					/>
					231313123</Span
				  >
				  <Span
					class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
				  >
					<img
					  src="../../assets/time-line.png "
					  class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
					  alt=""
					/>
					231313123</Span
				  >
				</div>
				<div>
				  <button
					class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg"
				  >
					Diterima
				  </button>
				</div>
			  </div>
			  <!-- rectangle -->
			  <div class="h-[2px] bg-[#D9D9D9]"></div>
			  <!-- tombol ambil -->
			  <div class="h-[5vmin] flex flex-row justify-between items-center">
				<span
				  class="text-[11px] md:text-[12px]"
				  style="line-height: 1.2em"
				  >Pinjaman diterima, ayo ambil mobil</span
				>
				<button
				  class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md"
				>
				  Ambil Mobil
				</button>
			  </div>
			</div>
		  </div>
		  <!-- akhir card mobil -->
		</div>
  
		<!-- bagian status pinjam ruangan -->
		<div class="md:w-[35vw]">
		  <div>
			<span class="text-[18px] md:text-[24px]" style="line-height: 2em"
			  >Ruangan</span
			>
			<!-- cardnya -->
			<div
			  class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
			>
			  <div class="bg-orange-50 flex justify-between items-center">
				<div class="flex flex-col bg-red-100">
				  <Span
					class="text-[18px] md:text-[27px] font-semibold pb-3"
					style="line-height: 1.2em"
					>Sekolah Vokasi UNS Surakarta
				  </Span>
				  <Span
					class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
				  >
					<img
					  src="../../assets/calender.png "
					  class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
					  alt=""
					/>
					231313123</Span
				  >
				  <Span
					class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
				  >
					<img
					  src="../../assets/time-line.png "
					  class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
					  alt=""
					/>
					231313123</Span
				  >
				</div>
				<div>
				  <button
					class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg"
				  >
					Diterima
				  </button>
				</div>
			  </div>
			  <!-- rectangle -->
			  <div class="h-[2px] bg-[#D9D9D9]"></div>
			  <!-- tombol ambil -->
			  <div class="h-[5vmin] flex flex-row justify-between items-center">
				<span
				  class="text-[11px] md:text-[12px]"
				  style="line-height: 1.2em"
				  >Pinjaman ruangan disetujui</span
				>
			  </div>
			</div>
		  </div>
		</div>
		<!-- akhir card ruangan -->
		<!-- akhir informasi -->
	  </div>
	  <!-- fitur -->
	  <div
		class="grid grid-cols-2 md:grid-cols-4 gap-10 bg-red-200 border border-[#404040] rounded-[18px] p-10"
	  >
		<!-- pinjam mobil -->
		<button
		  class="w-[25vw] md:w-[15vw] bg-[#C1E9FF] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
		  @click="$router.push('/users/pengajuanmobil')"
		>
		  <div
			class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center"
		  >
			<img src="../../assets/plus.svg" alt="" />
		  </div>
		  <div class="w-[20vw] md:w-[10vw] h-[4vh] bg-slate-300">
			<p for="" class="text-[12px] md:text-[20px] leading-tight">
			  Pinjam Mobil
			</p>
		  </div>
		</button>
		<!-- rwiayat pinjam mobil -->
		<button
		  class="w-[25vw] md:w-[15vw] bg-[#C1E9FF] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
		  @click="$router.push('/users/riwayatpinjammobil')"
		>
		  <div
			class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center"
		  >
			<img src="../../assets/car-side.svg" alt="" />
		  </div>
		  <div class="w-[20vw] h-[4vh] md:w-[10vw] bg-slate-300">
			<p for="" class="text-[12px] md:text-[20px] leading-tight">
			  Riwayat Pinjam Mobil
			</p>
		  </div>
		</button>
		<!-- pinjam ruangan -->
		<button
		  class="w-[25vw] md:w-[15vw] bg-[#FDEDCA] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-orange-300"
		>
		  <div
			class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#E26B00] rounded-full flex justify-center items-center"
		  >
			<img src="../../assets/plus.svg" alt="" />
		  </div>
		  <div class="w-[20vw] md:w-[10vw] h-[4vh] bg-slate-300">
			<p for="" class="text-[12px] md:text-[20px] leading-tight">
			  Pinjam Ruangan
			</p>
		  </div>
		</button>
		<!-- Riwayat pinjam ruangan -->
		<button
		  class="w-[25vw] md:w-[15vw] bg-[#FDEDCA] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-orange-300"
		>
		  <div
			class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#E26B00] rounded-full flex justify-center items-center"
		  >
			<img src="../../assets/Group.svg" alt="" />
		  </div>
		  <div class="w-[20vw] h-[4vh] md:w-[10vw] bg-slate-300">
			<p for="" class="text-[12px] md:text-[20px] leading-tight">
			  Riwayat Pinjam Mobil
			</p>
		  </div>
		</button>
	  </div>
	</div>
  </template>
  <script></script>
  