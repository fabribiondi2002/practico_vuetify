<template>
  <v-app-bar color="primary" dark>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>

    <!-- Título centrado absoluto -->
    <v-toolbar-title class="title-center" @click="$router.push('/products')">
      Mi Tienda
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-chip v-if="clientStore.currentUser" variant="elevated" class="mr-4">
      {{ clientStore.currentUser.email }}
    </v-chip>

    <v-btn icon @click="$emit('toggle-cart')">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useClientStore } from '@/stores/clients.js';
const clientStore = useClientStore();
</script>

<style>
.title-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
