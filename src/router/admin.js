import AdminPinjamin from "../views/admin/index.vue";

//Layout
import SidebarPinjamin from "../layouts/Sidebar.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
	{
	  path: "/admin",
	  name: "admin",
	  component: AdminPinjamin,
	  meta: {
		title: "AdminPinjamin",
		layout: SidebarPinjamin,
		middleware: [AuthMiddleware],
	  },
	}
  ];
  