<template>
  <AppBar />
  <FormCadastroProdutos />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "../components/AppBar.vue";
import FormCadastroProdutos from "../components/FormCadastroProdutos.vue";
export default defineComponent({
  name: "CadastroProdutos",
  components: {
    AppBar,
    FormCadastroProdutos,
  },
});
</script>
