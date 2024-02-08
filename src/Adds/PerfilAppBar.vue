<template>
  <div class="text-center">
    <v-menu open-on-click>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" color="primary" v-bind="props"> </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>{{ name }}</v-list-item-title>

          <v-list-item-title> Configurações </v-list-item-title>
          <v-btn @click="logout()">Ola</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PerfilAppBar",
  data() {
    return {
      name: "SexoJunior",
    };
  },

  mounted() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      this.name = userName;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("userName");
      this.$router.push("/");
    },
  },
});
</script>
