<template>
  <v-card class="mx-auto" color="surface-light" height="100%">
    <v-card-text>
      <v-text-field
        v-model="search"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Buscar productos"
        variant="solo"
        hide-details
        single-line
      />
    </v-card-text>

    <v-card class="mx-auto mt-4" max-width="600">
      <v-list>
        <v-list-item
          v-for="producto in productosFiltrados"
          :key="producto.id"
        >
          <v-list-item-content>
            <v-list-item-title>{{ producto.nombre }}</v-list-item-title>
            <v-list-item-subtitle>
              Precio: ${{ producto.precio }} - Stock: {{ producto.stock }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="productosFiltrados.length === 0">
          <v-list-item-content>
            <v-list-item-title>No se encontraron productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';

const search = ref("");
const products = ref([
  { id: 1, nombre: "Jabon", precio: 100, stock: 10 },
  { id: 2, nombre: "Papel higienico", precio: 200, stock: 5 },
  { id: 3, nombre: "Pasta dental", precio: 300, stock: 0 },
]);

const productosFiltrados = computed(() => {
  return products.value.filter(producto =>
    producto.nombre.toLowerCase().includes(search.value.toLowerCase())
  );
});

</script>
