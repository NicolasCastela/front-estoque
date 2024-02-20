<template>
  <div class="about">
    <AppBar />
    TODO Criação de Componentes na interface inicial. --- TODO Criação da Tabela
    de Produtos e colocar estado nos itens no passo 3 para mostrar tudo que está
    sendo criado.
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "../components/AppBar.vue";
export default defineComponent({
  name: "DashBoardView",
  components: {
    AppBar,
  },
});
</script>
