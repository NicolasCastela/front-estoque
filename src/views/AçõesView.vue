<template>
  <AppBar/>
  <v-container class="d-flex justify-center align-center flex-column">
<h2>Vender</h2>
<h4>codigo do produto que será vendido</h4>
<v-text-field outlined class="w-25 mt-10" label="codigo do produto"></v-text-field>
<v-text-field type="value"  outlined class="w-25 mt-10" label="codigo do produto"></v-text-field>
<v-btn class="mt-10 w-25" color="red">Confirmar Venda</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBar from '@/components/AppBar.vue'

export default defineComponent({
  name: 'Ações',
  components: {
    AppBar
  }

})
</script>
