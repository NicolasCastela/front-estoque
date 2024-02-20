<template>
  <v-app :theme="cor">
    <v-main>
      <v-btn @click="toggleTheme()" icon="mdi-brightness-6"> </v-btn>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "./components/AppBar.vue";
export default defineComponent({
  name: "App",

  data() {
    return {
      cor: "dark",
    };
  },
  components: {
    AppBar,
  },
  methods: {
    toggleTheme() {
      if (this.cor === "dark") {
        return (this.cor = "white");
      } else if (this.cor === "white") {
        return (this.cor = "dark");
      }
    },
  },
});
</script>
