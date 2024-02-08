<template>
  <v-app theme="white">
    <v-main>
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
      //
    };
  },
  components: {
    AppBar,
  },
});
</script>
