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
            <v-btn @click="consumirApi()">Ola</v-btn>
            <v-text-field v-model="nome" label="Nome do Produto"></v-text-field>
            <v-text-field v-model="marca" label="Marca"></v-text-field>
            <v-text-field v-model="categoria" label="Categoria"></v-text-field>
          </v-card>
          <!--Separar para ficar mais nitido-->
          <v-card
            class="mx-auto"
            width="400"
            title="Informações adicionais"
            flat
          >
            <v-text-field
              v-model="autor"
              label="Autor"
              class="h-10 mt-9"
            ></v-text-field>
            <v-text-field
              v-model="cod_prod"
              label="Codigo do Produto"
              class="h-10"
            ></v-text-field>
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
                    <v-text-field
                      v-model="quantidade"
                      label="Quantidade"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="valor" label="Preço"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Confira as informações colocadas" flat>
          <h3>Nome do Produto: {{ nome }}</h3>
          <h3>Marca: {{ marca }}</h3>
          <h3>Categoria: {{ categoria }}</h3>
          <h3>Autor: {{ autor }}</h3>
          <h3>Quantidade {{ quantidade }}</h3>
          <h3>Valor: {{ valor }}</h3>
          <h4>{{ cod_prod }}</h4>
        </v-card>
        <div class="d-flex justify-end">
          <v-btn @click="CreateProduto()" color="primary">Finalizar</v-btn>
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
      nome: "",
      quantidade: "",
      valor: "",
      marca: "",
      categoria: "",
      cod_prod: "",
      autor: "",
    };
  },

  methods: {
    async consumirApi() {
      try {
        const consumo = await fetch("http://localhost:3000/produtos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!consumo.ok) {
          return console.log("erro");
        } else {
          const respostaConsumo = await consumo.json();
          console.log(respostaConsumo);
          return respostaConsumo;
        }
      } catch (error) {
        console.error("Erro de rede ao criar produto", error);

        throw Error("sexoasdasdasdasdasd");
      }
    },

    async CreateProduto() {
      try {
        const cod_prod = parseInt(this.cod_prod);
        const quantidade = parseInt(this.quantidade);
        const valor = parseInt(this.valor);
        const res = await fetch("http://localhost:3000/produtos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: this.nome,
            marca: this.marca,
            categoria: this.categoria,
            quantidade,
            valor,
            cod_prod,
            autor: this.autor,
          }),
        });
        if (!res.ok) {
          return console.error("Erro linha 131");
        } else {
          const req = res.json();
          return req;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});
</script>

<style></style>
