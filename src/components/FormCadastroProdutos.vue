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
        <v-card class="text-center" title="Quantidade e Valor do Produto" flat>
          <v-sheet>
            <div class="d-flex flex-wrap">
              <v-form class="w-100" fast-fail @submit.prevent>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Quantidade"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Preço"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </div>
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
