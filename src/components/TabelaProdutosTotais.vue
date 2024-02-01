<template>
  <v-sheet border>
    <v-table>
      <thead>
        <tr>
          <th>Description</th>
          <th class="text-end">Quantity</th>
          <th class="text-end">Price</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td class="text-end"></td>
          <td class="text-end"></td>
        </tr>

        <tr>
          <th>Total</th>
          <th></th>
          <th class="text-end">SubTotal</th>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
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
