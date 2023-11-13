<template>
	<div class="p-10 bg-white flex items-center justify-center">
	  <div class="bg-white shadow-lg overflow-hidden rounded-xl w-full md:w-1/2 lg:w-1/2 xl:w-1/3 h-auto z-50">
		<div class="flex flex-col md:flex-row">
		  <div class="image-container w-full md:w-1/2 m-auto">
			<!-- Ubah gambar background sesuai kebutuhan -->
			<img src="../../../assets/loginreg.png" alt="Background" class="w-full h-full object-cover" />
		  </div>
		  <div class="w-full md:w-1/2 sm:w-full px-4 py-6">
			<!-- Logo -->
			<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
			  <img src="../../../assets/logobiru.png" alt="Logo" style="width: 100px; height: auto;" />
			</div>
			<div>
			  <b class="text-lg text-gray-800">Login</b>
			</div>
			<br>
			<form action="" @submit.prevent="login">
			  <div class="flex flex-col">
				<label for="email" class="font-medium text-[12px] mb-2">
				  <i class="fa fa-user-circle-o"></i> Email
				</label>
				<input v-model="formData.email" type="email" id="email" placeholder="Masukkan email anda"
				  class="p-3 rounded-lg border border-gray-300 w-full" />
			  </div>
			  <br>
			  <div class="flex flex-col">
				<label for="password" class="font-medium text-[12px] mb-2">
				  <i class="fa fa-key"></i> Password
				</label>
				<input v-model="formData.password" type="password" id="password" placeholder="Masukkan password anda"
				  class="p-3 rounded-lg border border-gray-300 w-full" />
			  </div>
			  <br>
			  <button :type="'submit'"
				class="transition p-3 w-full bg-yellow-500 hover:bg-blue-600 text-white rounded-lg mb-4">
				Masuk <i class="fa fa-send"></i>
			  </button>
			</form>
			<div class="text-left">
			  <a href="#" class="text-[12px] text-blue-500 hover:text-blue-700">
				<b>Lupa Password?</b>
			  </a>
			</div>
			<hr style="border: 1px solid #ccc; margin: 10px 0;">
			<div class="text-center mb-3">
			  <span class="text-[12px] text-gray-600">Belum punya akun?
				<button @click="$router.push('/register')" class="text-[12px] text-blue-500 hover:text-blue-700 font-bold">
				  Daftar
				</button>
			  </span>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <style>
  .image-container {
	background-image: url(../../../assets/loginreg.png);
	background-position: center;
	background-size: cover;
	height: calc(3.2 * 10em);
  }
  
  /* Tambahkan CSS untuk resolusi layar kurang dari 768px */
  @media (max-width: 768px) {
	.image-container {
	  height: auto;
	}
  }
  </style>
  
  <script>
  import {
	useAuthStore
  } from "@/stores/auth.store.js"
  
  export default {
	data() {
	  return {
		authStore: useAuthStore(),
		formData: {
		  email: "",
		  password: "",
		}
	  }
	},
	methods: {
	  login() {
		this.authStore.login(this.formData)
	  }
	}
  }
  </script>
  