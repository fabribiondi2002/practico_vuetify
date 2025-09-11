<route lang="yaml">
name: login
meta:
  layout: default
</route>
<template>
  <v-parallax src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtZXJjYWRvfGVufDB8fDB8fHww" height="1000">

  <v-card class="mx-auto mt-10" max-width="400">
    <v-card-title class="text-h6 text-center">
      Inicio de sesion
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      <v-container>
        <v-text-field
          v-model="name"
          color="primary"
          label="Nombre"
          variant="underlined"
        />
      </v-container>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="dialog = true, login()">
        Ingresar
        <v-icon icon="mdi-chevron-right" end />
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="400" >
    <v-card v-if="exist" >
      <v-toolbar color="primary" title="Inicio de sesion exitoso" dark />
      <v-card-text class="pa-6">
        ¡Bienvenido {{name}}!
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn :to="{ name: 'products' }" color="primary" @click="dialog = false">Ir a productos</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else>
      <v-toolbar color="primary" title="Error de inicio de sesion" dark />
      <v-card-text class="pa-6">
        El usuario {{name}} no existe.
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
  </v-parallax>
</template>

<script setup>
import { ref } from "vue";
import { useClientStore } from "@/stores/clients";
const name = ref("");
const dialog = ref(false);
let exist;
const clientStore = useClientStore();
const login = () => {
  exist = clientStore.login(name.value);
};
</script>
