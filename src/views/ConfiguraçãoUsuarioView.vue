<template>
  <AppBar />
  <h1>
    Criação de Interface para usuario alterar senha, solicitar troca de senha
    futuramente, Troca de dados, tanto email e tals
  </h1>

  <v-card class="">
    <v-card-title>Segurança e privacidade</v-card-title>
    <v-btn>Alterar senha</v-btn><br />
    <v-btn>Ver seus Dados</v-btn> <br />
    <v-btn>Alterar outros dados</v-btn> <br />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
  name: "ConfigUser",
  data() {
    return {
      //
    };
  },
  components: {
    AppBar,
  },
});
</script>
