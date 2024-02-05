<template>
  <AppBar />
  <div v-for="(usuarios, index) in allUsers" :key="index">
    <h1>{{ usuarios.email }}</h1>
    <h1>{{ usuarios.password }}</h1>
    <h1>{{ usuarios.name }}</h1>
    <v-divider />
    <v-divider />
    <v-divider />
    <v-divider />
    <v-divider />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";
import { User as UserServiceUser, getUsers } from "@/services/usuarios.service";

export default defineComponent({
  name: "RelatorioView",
  data() {
    return {
      allUsers: [] as UserServiceUser[],
    };
  },
  components: {
    AppBar,
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.allUsers = await getUsers();
    },
  },
});
</script>
