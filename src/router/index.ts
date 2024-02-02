import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ControleEstoqueView from "@/views/CadastroProdutosView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashborad",

    component: () => import("../views/DashBoardView.vue"),
  },
  {
    path: "/cadastroProdutos",
    name: "cadastroProdutos",
    component: ControleEstoqueView,
  },
  {
    path: "/Produtos",
    name: "Produtos",
    component: () => import("../views/ProdutosView.vue"),
  },
  {
    path: "/Relatorio",
    name: "Relatorio",
    component: () => import("../views/RelatorioView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
