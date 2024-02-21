<template>
  <v-container>
    <v-sheet border>
      <v-table>
        <thead>
          <tr>
            <th class="bg-green">Nome</th>
            <th class="bg-green">Quantidade</th>
            <th class="bg-green">Preço</th>
            <th class="bg-green">Marca</th>
            <th class="bg-green">Categoria</th>
            <th class="bg-green">ID</th>
            <th class="bg-green">Codigo Produto</th>
          </tr>
        </thead>
        <tbody v-for="(produto, index) in allProdutos" :key="index">
          <tr>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.quantidade }}</td>
            <td>{{ produto.valor }}</td>
            <td>{{ produto.marca }}</td>
            <td>{{ produto.categoria }}</td>
            <td>{{ index }}</td>
            <td>{{ produto.cod_prod }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Produtos as ProdutoService,
  fetchConsumirApi,
} from "@/services/produtos.service";
export default defineComponent({
  name: "TabelaProdutosTotais",
  components: {
    //
  },
  data() {
    return {
      allProdutos: [] as ProdutoService[],
    };
  },
  mounted() {
    this.fetchConsumirApi();
  },
  methods: {
    async fetchConsumirApi() {
      this.allProdutos = await fetchConsumirApi();
    },
  },
});
</script>
