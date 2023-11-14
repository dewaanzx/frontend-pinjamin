<template>
	<div class="bg-white overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
	  <div class="login-container container w-full lg:w-full lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
		<div class="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
		  <div class="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
		  </div>
		  <div class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
			<img src="../../../assets/logreg.png" alt="product">
			<!-- product image -->
		  </div>
		  <div class="hidden lg:block w-1/3 bg-white ml-auto"></div>
		</div>
		<div class="w-full lg:w-1/2 order-1 lg:order-2">
		  <div class="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
			<div class="w-full space-y-5">
			  <!-- Logo -->
			<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
			  <img src="../../../assets/logobiru.png" alt="Logo" style="width: 100px; height: auto;" />
			</div>
			<div>
			  <b class="text-lg text-gray-800">Login</b>
			</div>
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
			  <div class="text-left">
			  <a href="#" class="text-[12px] text-blue-500 hover:text-blue-700">
				<b>Lupa Password?</b>
			  </a>
			</div>
			  <br>
			  <button :type="'submit'"
				class="transition p-3 w-full bg-orange-500 hover:bg-blue-600 text-white rounded-lg mb-4">
				Masuk <i class="fa fa-send"></i>
			  </button>
			</form>	  
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
	</div>
  </template>
  
  <style>
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
  