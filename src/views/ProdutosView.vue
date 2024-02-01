<template>
  <AppBar />
  <TabelaProdutosTotais />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";
import TabelaProdutosTotais from "@/components/TabelaProdutosTotais.vue";
export default defineComponent({
  name: "ProdutosView",
  components: {
    AppBar,
    TabelaProdutosTotais,
  },
});
</script>
