<template>
	<swiper
	  :slidesPerView="1"
	  :spaceBetween="30"
	  :keyboard="{
		enabled: true,
	  }"
	  :pagination="{
		clickable: true,
	  }"
	  :navigation="true"
	  :modules="modules"
	  class="mySwiper"
	>
	  <swiper-slide>Slide 1
		<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
						<div class="bg-orange-50 flex justify-between items-center">
							<div class="flex flex-col bg-red-100">
								<Span class="text-[18px] md:text-[27px] font-semibold pb-3" style="line-height: 1.2em">PTUN
									Yogyakarta
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
							<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima, ayo ambil
								mobil</span>
							<button
								class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md">
								Ambil Mobil
							</button>
						</div>
					</div>
	  </swiper-slide>
	  <swiper-slide>Slide 2
		<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
						<div class="bg-orange-50 flex justify-between items-center">
							<div class="flex flex-col bg-red-100">
								<Span class="text-[18px] md:text-[27px] font-semibold pb-3" style="line-height: 1.2em">PTUN
									Yogyakarta
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
							<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima, ayo ambil
								mobil</span>
							<button
								class="w-[20vw] md:w-[10vw] md:h-[5vh] bg-orange-400 hover:bg-orange-500 text-[11px] md:text-[14px] text-white rounded-md">
								Ambil Mobil
							</button>
						</div>
					</div>
	  </swiper-slide><swiper-slide>Slide 3
		<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
						<div class="bg-orange-50 flex justify-between items-center">
							<div class="flex flex-col bg-red-100">
								<Span class="text-[18px] md:text-[27px] font-semibold pb-3" style="line-height: 1.2em">PTUN
									Yogyakarta
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
							<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pinjaman diterima, ayo ambil
								mobil</span>
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
  </template>
  <script>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from 'swiper/vue';
  
	// Import Swiper styles
	import 'swiper/css';
  
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
  
	import './style.css';
  
	// import required modules
	import { Keyboard, Pagination, Navigation } from 'swiper/modules';
  
	export default {
	  components: {
		Swiper,
		SwiperSlide,
	  },
	  setup() {
		return {
		  modules: [Keyboard, Pagination, Navigation],
		};
	  },
	};
  </script>