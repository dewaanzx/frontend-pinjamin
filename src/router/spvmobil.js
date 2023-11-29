import SpvMobilPinjamin from "../views/spv-mobil/index.vue";


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
  }
];

