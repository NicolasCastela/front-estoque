<template>
  <div class="text-center">
    <v-menu open-on-click>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" color="primary" v-bind="props"> </v-btn>
      </template>

      <v-list class="pa-0 ma-0">
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
          :title="name"
        ></v-list-item>

        <v-divider></v-divider>
        <v-list-item width="100%" class="pa-0 ma-0">
          <v-btn width="100%" variant="plain" @click="logout()"
            >Configurações
          </v-btn>
        </v-list-item>
        <v-list-item width="100%" class="pa-0 ma-0">
          <v-btn width="100%" variant="plain" @click="logout()">Conta </v-btn>
        </v-list-item>
        <v-list-item width="100%" class="pa-0 ma-0">
          <v-btn width="100%" color="red" variant="plain" @click="logout()">
            Sair
          </v-btn>
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
