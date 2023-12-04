import HomeView from "@/views/home/index.vue";
import UserView from "@/views/user/index.vue";
import UserCreateView from "@/views/user/create.vue";
import UserUpdateView from "@/views/user/update.vue";
import UsersPinjamin from "../views/users/index.vue";
import UsersPengajuanMobil from "../views/users/PinjamMobil/pengajuanmobil.vue";
import UsersDetailPengajuanMobil from "../views/users/PinjamMobil/detailpengajuanmobil.vue";
import UsersRiwayatMobil from "../views/users/PinjamMobil/riwayatpinjammobil.vue";
import UsersDetailPinjamMobil from "../views/users/PinjamMobil/detailpinjammobil.vue";
import UsersProfile from "../views/users/Profile/profile.vue";
import UsersEditProfile from "../views/users/Profile/EditProfile.vue";
import UsersGantiPassword from "../views/users/Profile/GantiPassword.vue";
import UsersNotifikasi from "../views/users/notifikasi.vue";
import UsersAmbilMobil from "../views/users/PinjamMobil/ambilmobil.vue";

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
    path: "/users/detailpengajuanmobil/:id",
    name: "users.detailpengajuanmobil",
    component: UsersDetailPengajuanMobil,
    meta: {
      title: "Detail Pengajuan Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-mobil/:status",
    name: "users.riwayatpinjammobil",
    component: UsersRiwayatMobil,
    meta: {
      title: "Riwayat Pinjam  Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/detail-pinjam-mobil/:id",
    name: "users.detail-pinjam-mobil",
    component: UsersDetailPinjamMobil,
    meta: {
      title: "Detail Pinjam Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: UsersProfile,
    meta: {
      title: "Profile",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/edit-profile",
    name: "users.editprofil",
    component: UsersEditProfile,
    meta: {
      title: "Edit Profil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ganti-password",
    name: "users.gantipassword",
    component: UsersGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/notifikasi",
    name: "users.notifikasi",
    component: UsersNotifikasi,
    meta: {
      title: "Notifikasi",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ambil-mobil",
    name: "users.ambil.mobil",
    component: UsersAmbilMobil,
    meta: {
      title: "Ambil Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
];
