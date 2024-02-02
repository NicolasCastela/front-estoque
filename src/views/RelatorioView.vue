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

interface User {
  email: string;
  password: string;
  name: string;
}

export default defineComponent({
  name: "RelatorioView",
  data() {
    return {
      allUsers: [] as User[],
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
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar usuários");
        } else {
          const data = await response.json();
          this.allUsers = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
