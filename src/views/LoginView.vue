<template>
  <v-container>
    <Login />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Login from "../components/Login.vue";

export default defineComponent({
  name: "LoginView",

  components: {
    Login,
  },
});
</script>
