<template>
	<!-- ini pembungkus -->
	<div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
		<!-- Card Informasi -->
		<div class="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
			<!-- bagian status pinjam mobil -->
			<div class="md:w-[80vw]">
				<div>
					<span class="text-[18px] md:text-[24px]" style="line-height: 2em">Mobil</span>
					<!-- cardnya -->
					<swiper :slidesPerView="1" :spaceBetween="30" :keyboard="{
						enabled: true,
					}" :pagination="{
	clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
						<swiper-slide>
							<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
								<div class="bg-orange-50 flex justify-between items-center">
									<div class="flex flex-col bg-red-100">
										<Span class="text-[18px] md:text-[27px] font-semibold pb-3"
											style="line-height: 1.2em">PTUN Yogyakarta
										</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/calender.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/time-line.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
									</div>
									<div>
										<button
											class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg">
											Diterima
										</button>
									</div>
								</div>
								<!-- rectangle -->
								<div class="h-[2px] bg-[#D9D9D9]"></div>
								<!-- tombol ambil -->
								<div class="h-[5vmin] flex flex-row justify-between items-center">
									<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima,
										ayo ambil mobil</span>
									<button
										class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md">
										Ambil Mobil
									</button>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
								<div class="bg-orange-50 flex justify-between items-center">
									<div class="flex flex-col bg-red-100">
										<Span class="text-[18px] md:text-[27px] font-semibold pb-3"
											style="line-height: 1.2em">PTUN Yogyakarta
										</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/calender.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/time-line.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
									</div>
									<div>
										<button
											class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg">
											Diterima
										</button>
									</div>
								</div>
								<!-- rectangle -->
								<div class="h-[2px] bg-[#D9D9D9]"></div>
								<!-- tombol ambil -->
								<div class="h-[5vmin] flex flex-row justify-between items-center">
									<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima,
										ayo ambil mobil</span>
									<button
										class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md">
										Ambil Mobil
									</button>
								</div>
							</div>
						</swiper-slide><swiper-slide>
							<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
								<div class="bg-orange-50 flex justify-between items-center">
									<div class="flex flex-col bg-red-100">
										<Span class="text-[18px] md:text-[27px] font-semibold pb-3"
											style="line-height: 1.2em">PTUN Yogyakarta
										</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/calender.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
										<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
											<img src="../../assets/time-line.png "
												class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
											231313123</Span>
									</div>
									<div>
										<button
											class="w-[15.5vmin] md:w-[15.5vmin] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg">
											Diterima
										</button>
									</div>
								</div>
								<!-- rectangle -->
								<div class="h-[2px] bg-[#D9D9D9]"></div>
								<!-- tombol ambil -->
								<div class="h-[5vmin] flex flex-row justify-between items-center">
									<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima,
										ayo ambil mobil</span>
									<button
										class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md">
										Ambil Mobil
									</button>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
						<swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
						<swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
					</swiper>
				</div>
				<!-- akhir card mobil -->
			</div>
			<!-- akhir informasi -->
		</div>
		<!-- fitur -->
		<div class="flex flex-col items-center justify-center gap-10 md:flex md:flex-row md:gap-10 rounded-[18px] p-10">
			<!-- konfirmasi mobil -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
				@click="$router.push('/users/pengajuanmobil')">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/plus.svg" alt="" />
				</div>
				<div class="w-[20vw] md:w-[10vw] h-[4vh]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Konfirmasi Mobil
					</p>
				</div>
			</button>
			<!-- rwiayat pinjam mobil -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
				@click="$router.push('/users/riwayatpinjammobil')">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/car-side.svg" alt="" />
				</div>
				<div class="w-[20vw] h-[4vh] md:w-[10vw]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Riwayat Pinjam Mobil
					</p>
				</div>
			</button>
			<!-- pinjam ruangan -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/plus.svg" alt="" />
				</div>
				<div class="w-[20vw] md:w-[10vw] h-[4vh]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Pinjam Ruangan
					</p>
				</div>
			</button>
		</div>

		<!-- Harian Mingguan Bulanan -->
		<div
			class="grid grid-cols-2 md:grid-cols-1 gap-10 bg-red-200 border border-[#404040] rounded-[18px] p-10 justify-center">
			<swiper :pagination="pagination" :modules="modules" class="mySwiper">
				<swiper-slide>Slide 1
					<div
						class="w-[25vw] md:w-[15vw] bg-[#FDEDCA] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-orange-300">
						<div class="w-[20vw] md:w-[10vw] h-[4vh] bg-slate-300">
							<p for="" class="text-[12px] md:text-[20px] leading-tight">
								Pinjam Ruangan
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div> Slide
					</div>
					<div
						class="w-[25vw] md:w-[15vw] bg-[#FDEDCA] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-orange-300">
						<div class="w-[20vw] md:w-[10vw] h-[4vh] bg-slate-300">
							<p for="" class="text-[12px] md:text-[20px] leading-tight">
								Pinjam Ruangan
							</p>
						</div>
					</div>
				</swiper-slide><swiper-slide>Slide 3
					<div
						class="w-[25vw] md:w-[15vw] bg-[#FDEDCA] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-orange-300">
						<div class="w-[20vw] md:w-[10vw] h-[4vh] bg-slate-300">
							<p for="" class="text-[12px] md:text-[20px] leading-tight">
								Pinjam Ruangan
							</p>
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<style>
#app {
	height: 100%;
}

html,
body {
	position: relative;
	height: 100%;
}

body {
	background: #eee;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #000;
	margin: 0;
	padding: 0;
}

.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;

	/* Center slide text vertically */
	display: flex;
	justify-content: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 5%;
	height: 5%;
	object-fit: cover;
}

.button {
	width: 100%;
	padding: 1rem;
	text-align: center;
	margin-bottom: 1rem;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Keyboard, Pagination, Navigation],
			pagination: {
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
			modules: [Pagination],
		};
	},
};
</script>
