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
        <v-btn icon="mdi-brightness-6"> </v-btn>

        <PerfilAppBar />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawerzin" class="">
      <v-list-item title="Empresa tal" subtitle="Sistema"></v-list-item>
      <v-divider />
      <v-list-item to="/Produtos" link title="Produtos"></v-list-item>
      <v-divider />
      <v-list-item to="/Relatorio" link title="Relatório"></v-list-item>
      <v-divider />
      <v-list-item to="/Ações" link title="Ações"></v-list-item>
      <v-divider />
      <v-list-item to="/cadastroProdutos" link title="Cadastro de Produtos"></v-list-item>
      <v-divider />
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { LoginResponse, loginUser } from "@/services/usuarios.service";
import PerfilAppBar from "@/Adds/PerfilAppBar.vue";

export default defineComponent({
  name: "AppBar",
  data() {
    return {
      drawerzin: false,
    };
  },

  mounted() {
    const userName = localStorage.getItem("userName");
  },
  methods: {
    toggleDrawer() {
      this.drawerzin = !this.drawerzin;
    },
    logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("Token");
      this.$router.push("/");
    },
  },
  components: {
    PerfilAppBar,
  },
});
</script>
