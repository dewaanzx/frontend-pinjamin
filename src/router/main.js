import HomeView from "@/views/home/index.vue";
import UserView from "@/views/user/index.vue";
import UserCreateView from "@/views/user/create.vue";
import UserUpdateView from "@/views/user/update.vue";
import UsersPinjamin from "../views/users/index.vue";
import AdminPinjamin from "../views/admin/index.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarPinjamin from "../layouts/Navbar.vue";
import SidebarPinjamin from "../layouts/Sidebar.vue";

// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    meta: {
      title: "User",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/create",
    name: "user.create",
    component: UserCreateView,
    meta: {
      title: "User Create",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/update",
    name: "user.update",
    component: UserUpdateView,
    meta: {
      title: "User Update",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users",
    name: "users",
    component: UsersPinjamin,
    meta: {
      title: "User Pinjamin",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPinjamin,
    meta: {
      title: "Admin Pinjamin",
      layout: SidebarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
];
