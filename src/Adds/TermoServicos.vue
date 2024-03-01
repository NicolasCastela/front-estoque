<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="800">
      <template v-slot:activator="{ props }">
        <h4 class="text-red underline" color="primary" v-bind="props">
          Termos
        </h4>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Aceita os Termos de Serviço e a Política de Privacidade do Google?
        </v-card-title>
        <v-card-text>
          Ao clicar em "Aceitar", você concorda com os Termos de Serviço e a
          Política de Privacidade do Google. Seu nome e foto do perfil serão
          visíveis para outras pessoas que usam o Google. Seus contatos poderão
          ver seu e-mail e número de telefone, mesmo que você tenha escolhido
          manter essas informações privadas.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Fechar
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TermoServicos",
  data() {
    return {
      dialog: false,
    };
  },
});
</script>

<style scoped>
.underline {
  text-decoration: underline; /* Adiciona um sublinhado ao texto */
}
</style>
