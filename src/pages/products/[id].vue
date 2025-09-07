<template>
  <home>
    <v-card style="width: 100%; height: 100vh;">
      <v-layout>
        <v-app-bar color="primary">
          <v-toolbar-title class="white--text">Detalle del producto</v-toolbar-title>
        </v-app-bar>
        <v-main>
          <v-container class="pa-4">
            <v-card outlined v-if="product">
              <v-card-title>{{ product.nombre }}</v-card-title>
              <v-card-text>
                <p><strong>Precio:</strong> ${{ product.precio }}</p>
                <p><strong>Stock:</strong> {{ product.stock }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :to="'/products'">Volver a productos</v-btn>
              </v-card-actions>
            </v-card>
            <v-alert v-else type="error">Producto no encontrado</v-alert>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </home>
</template>

<script setup>
import { ref, computed } from "vue";
import home from "@/layouts/home.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = Number(route.params.id); // Convertimos a número

const products = ref([
  { id: 1, nombre: "Jabon", precio: 100, stock: 10 }, { id: 2, nombre: "Papel higienico", precio: 200, stock: 5 }, { id: 3, nombre: "Pasta dental", precio: 300, stock: 0 }, { id: 4, nombre: "Shampoo", precio: 450, stock: 8 }, { id: 5, nombre: "Acondicionador", precio: 400, stock: 6 }, { id: 6, nombre: "Cepillo de dientes", precio: 150, stock: 12 }, { id: 7, nombre: "Desodorante", precio: 350, stock: 7 }, { id: 8, nombre: "Toallas sanitarias", precio: 250, stock: 15 }, { id: 9, nombre: "Jabon liquido", precio: 180, stock: 9 }, { id: 10, nombre: "Cotonetes", precio: 80, stock: 20 }, { id: 11, nombre: "Crema humectante", precio: 500, stock: 4 }, { id: 12, nombre: "Pasta de manos", precio: 220, stock: 10 }, { id: 13, nombre: "Alcohol en gel", precio: 300, stock: 5 }, { id: 14, nombre: "Limpiador facial", precio: 350, stock: 6 }, { id: 15, nombre: "Jabon exfoliante", precio: 200, stock: 8 }
]);

const product = computed(() =>
  products.value.find((p) => p.id === productId)
);
</script>
