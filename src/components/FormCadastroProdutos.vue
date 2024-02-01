<template>
  <v-container class="d-flex flex-row mb-6 justify-center">
    <v-stepper
      prev-text=" Anterior"
      :next-text="'Próximo'"
      class="w-100"
      editable
      :items="['Passo 1', 'Passo 2', 'Passo 3']"
    >
      <template v-slot:item.1>
        <v-sheet class="d-flex flex-row gap">
          <v-card
            class="mx-auto"
            width="400"
            title="Informaçõs do  Produto"
            flat
          >
            <v-text-field label="Nome do Produto"></v-text-field>
            <v-text-field label="Marca"></v-text-field>
            <v-select
              label="Categoria"
              :items="['Carro', 'Caminhão', 'Trator']"
            ></v-select>
          </v-card>
          <!--Separar para ficar mais nitido-->
          <v-card class="mx-auto" width="400" title="Descrição do Produto" flat>
            <v-text-field class="h-100"></v-text-field>
          </v-card>
        </v-sheet>
      </template>

      <template v-slot:item.2>
        <v-card title="Quantidade no Estoque" flat>
          <v-sheet class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-text-field label="Quantidade"></v-text-field>
            </v-form>
          </v-sheet>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Confira as informações colocadas" flat> </v-card>
        <div class="d-flex justify-end">
          <v-btn color="primary">Finalizar</v-btn>
        </div>
      </template>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormCadastroProdutos",
  data() {
    return {
      //
    };
  },
});
</script>

<style></style>
