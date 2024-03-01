<template>
  <v-container>
    <div class="text-center">
      <h4>Buscar produto</h4>
      <v-text-field
        v-model="search"
        label="Search "
        class="pa-2"
        @input="filterProdutos"
      ></v-text-field>
    </div>
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
        <tbody>
          <tr v-for="(produto, index) in displayedProdutos" :key="index">
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
      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :total-visible="7"
        :length="totalPages"
      ></v-pagination>
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
      currentPage: 1,
      perPage: 10,
      search: "",
    };
  },
  computed: {
    displayedProdutos(): ProdutoService[] {
      let produtos = this.allProdutos;
      if (this.search.trim() !== "") {
        const searchTerm = this.search.toLowerCase();
        produtos = produtos.filter((produto) =>
          produto.nome.toLowerCase().includes(searchTerm)
        );
      }

      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return produtos.slice(startIndex, endIndex);
    },
    totalPages(): number {
      return Math.ceil(this.allProdutos.length / this.perPage);
    },
  },
  mounted() {
    this.fetchConsumirApi();
  },
  methods: {
    async fetchConsumirApi() {
      this.allProdutos = await fetchConsumirApi();
    },
    filterProdutos() {
      this.currentPage = 1;
    },
  },
});
</script>
