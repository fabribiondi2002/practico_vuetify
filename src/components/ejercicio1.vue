<template>
  <v-parallax src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtZXJjYWRvfGVufDB8fDB8fHww" height="1000">

  <v-card class="mx-auto mt-10" max-width="400">
    <v-card-title class="text-h6 text-center">
      Registro de Usuario
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
      <v-btn color="success" @click="registrar">
        Registrarse
        <v-icon icon="mdi-chevron-right" end />
      </v-btn>
    </v-card-actions>
  </v-card>

  <!-- Diálogo -->
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="400">
    <v-card>
      <v-toolbar color="primary" :title="dialogTitle" dark />
      <v-card-text class="pa-6">
        {{content}}
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

const name = ref("");
const dialog = ref(false);
const content = ref("");
const dialogTitle = ref("");

function registrar() {
  if (name.value.trim() !== "") {
    dialogTitle.value = "Registro Exitoso";
    content.value = `¡Bienvenido ${name.value}! Tu registro fue completado.`;
    dialog.value = true;
  } else {
    dialogTitle.value = "Error de Registro";
    content.value = "Por favor, ingresa tu nombre.";
    dialog.value = true;
  }
}
</script>
