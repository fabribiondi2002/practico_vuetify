<route lang="yaml">
name: products
meta:
  layout: home
  requiresAuth: true
</route>
<template>
    <v-card class="d-flex flex-column">
        <v-card-text class="d-flex justify-start">
            <v-text-field v-model="productStore.search" @update:model-value="productStore.page = 1"
                append-inner-icon="mdi-magnify" density="compact" label="Buscar productos" variant="solo" hide-details
                single-line style="width: 100%;" />
        </v-card-text>
        <v-list width="100%" style="overflow-y: auto; min-height: calc(100vh - 495.41px );">
            <v-list-item v-for="producto in productStore.paginatedProducts" :key="producto.id">
                <v-card outlined class="pa-2 mb-2" :to="{ name: 'product-details', params: { id: producto.id } }"
                    style="cursor: pointer">
                    <v-row align="center" justify="space-between">
                        <v-col cols="auto">
                            <v-list-item-title>{{ producto.nombre }}</v-list-item-title>
                            <v-list-item-subtitle>
                                Precio: ${{ producto.precio }} - Stock: {{ producto.stock }}
                            </v-list-item-subtitle>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn block :disabled="producto.stock === 0" size="small" color="primary"
                                @click.prevent.stop="productStore.agregarAlCarrito(producto)">
                                Agregar al carrito
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-list-item>

            <v-list-item v-if="productStore.productosFiltrados.length === 0">
                <v-list-item-title>No se encontraron productos</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <div class="text-center">
            <v-container>
                <v-row justify="center">
                    <v-col cols="8">
                        <v-container style="padding: 0;">
                            <v-pagination v-model="productStore.page"
                                :length="Math.ceil(productStore.productosFiltrados.length / productStore.itemsPerPage)"
                                class="my-4"></v-pagination>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-card>
</template>

<script setup>
import { useProductStore } from '@/stores/products.js';
const productStore = useProductStore();
</script>
