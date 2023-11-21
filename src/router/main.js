import HomeView from "@/views/home/index.vue";
import UserView from "@/views/user/index.vue";
import UserCreateView from "@/views/user/create.vue";
import UserUpdateView from "@/views/user/update.vue";
import UsersPinjamin from "../views/users/index.vue";
import UsersPengajuanMobil from "../views/users/pengajuanmobil.vue";
import UsersDetailPengajuanMobil from "../views/users/detailpengajuanmobil.vue";
import UsersRiwayatMobil from "../views/users/riwayatpinjammobil.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarPinjamin from "../layouts/Navbar.vue";

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
    path: "/users/pengajuanmobil",
    name: "users.pengajuanmobil",
    component: UsersPengajuanMobil,
    meta: {
      title: "User Pengajuan Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/detailpengajuanmobil",
    name: "users.detailpengajuanmobil",
    component: UsersDetailPengajuanMobil,
    meta: {
      title: "Detail Pengajuan Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayatpinjammobil",
    name: "users.riwayatpinjammobil",
    component: UsersRiwayatMobil,
    meta: {
      title: "Riwayat Pinjam  Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
];
