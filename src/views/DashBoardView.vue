<template>
  <div class="about">
    <AppBar />
    TODO Criação de Componentes na interface inicial. ---
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
