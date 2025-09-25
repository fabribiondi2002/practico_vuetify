<route lang="yaml">
name: product-details
meta:
  layout: home
  requiresAuth: true
</route>
<template>
  <v-toolbar-title class="white--text">Detalle del producto</v-toolbar-title>
  <v-container class="pa-4">
    <v-card outlined v-if="product">
      <v-card-title>{{ product.nombre }}</v-card-title>
      <v-card-text>
        <p><strong>Precio:</strong> ${{ product.precio }}</p>
        <p><strong>Stock:</strong> {{ product.stock }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="product.stock === 0" color="primary" style="margin: 0;"
          @click="productStore.agregarAlCarrito(product)">
          Agregar al carrito
        </v-btn>
        <v-btn color="primary" :to="'/products'">Volver a productos</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-else type="error">Producto no encontrado</v-alert>
  </v-container>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useProductStore } from '@/stores/products.js';
const route = useRoute();
const productId = Number(route.params.id);
const productStore = useProductStore();
const products = productStore.products;
const product = computed(() =>
  products.find((p) => p.id === productId)
);
</script>
