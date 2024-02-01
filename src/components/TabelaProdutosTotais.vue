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
        <tbody>
          <tr>
            <td>Nome Inicial</td>
            <td>Quantidade Inicial</td>
            <td>Preço Inicial</td>
            <td>Marca Inicial</td>
            <td>Categoria Inicial</td>
            <td>Id Inicial</td>
            <td>Codigo do Produto</td>
          </tr>
          <tr>
            <td>Nome Inicial</td>
            <td>Quantidade Inicial</td>
            <td>Preço Inicial</td>
            <td>Marca Inicial</td>
            <td>Categoria Inicial</td>
            <td>Id Inicial</td>
            <td>Codigo do Produto</td>
          </tr>
          <tr>
            <td>Nome Inicial</td>
            <td>Quantidade Inicial</td>
            <td>Preço Inicial</td>
            <td>Marca Inicial</td>
            <td>Categoria Inicial</td>
            <td>Id Inicial</td>
            <td>Codigo do Produto</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabelaProdutosTotais",
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
});
</script>
