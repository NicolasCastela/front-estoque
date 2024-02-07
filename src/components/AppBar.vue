<template v-slot:activator="{ props }">
  <v-container>
    <v-app-bar>
      <v-app-bar-nav-icon
        class="mr-10"
        @click="toggleDrawer()"
      ></v-app-bar-nav-icon>

      <router-link to="/">
        <v-img
          :width="100"
          height="60"
          cover
          src="../assets/png-logo-vue.png"
        ></v-img>
      </router-link>

      <template v-slot:append>
        <h4>{{ name }}</h4>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawerzin" class="">
      <v-list-item title="Empresa tal" subtitle="Sistema"></v-list-item>
      <v-divider />
      <v-list-item to="/Produtos" link title="Produtos"></v-list-item>
      <v-divider />
      <v-list-item to="/Relatorio" link title="Relatório"></v-list-item>
      <v-divider />
      <v-list-item link title="Vendas"></v-list-item>
      <v-divider />
      <v-list-item
        to="/cadastroProdutos"
        link
        title="Cadastro de Produtos"
      ></v-list-item>
      <v-divider />
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoginResponse, loginUser } from "@/services/usuarios.service";
export default defineComponent({
  name: "AppBar",
  data() {
    return {
      drawerzin: false,
      name: "ola",
    };
  },
  mounted() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      this.name = userName;
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerzin = !this.drawerzin;
    },
  },
});
</script>
