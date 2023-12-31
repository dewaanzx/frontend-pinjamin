import SpvMobilPinjamin from "../views/spv-mobil/index.vue";
import SpvMobilKonfirmasiMobil from "../views/spv-mobil/KonfirmasiMobil/konfirmasi-mobil.vue";
import SpvMobilDetailKonfirmasiMobil from "../views/spv-mobil/KonfirmasiMobil/detail-konfirmasi-mobil.vue";


//Layout
import NavbarPinjamin from "../layouts/Navbar.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
{
	path: "/spv-mobil",
	name: "spv-mobil",
	component: SpvMobilPinjamin,
	meta: {
	  title: "SpvMobilPinjamin",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/konfirmasi-mobil",
	name: "konfirmasi-mobil",
	component: SpvMobilKonfirmasiMobil,
	meta: {
	  title: "SpvMobilKonfirmasiMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/detail-konfirmasi-mobil",
	name: "detail-konfirmasi-mobil",
	component: SpvMobilDetailKonfirmasiMobil,
	meta: {
	  title: "SpvMobilDetailKonfirmasiMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  }
];

