<route lang="yaml">
name: signin
meta:
  layout: default
</route>

<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtZXJjYWRvfGVufDB8fDB8fHww"
    height="1000">
    <v-card class="mx-auto mt-10" max-width="400">
      <v-card-title class="text-h6 text-center">
        Registro de Usuario
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-container>
          <v-text-field v-model="username" color="primary" label="Usuario" variant="underlined" required />
          <v-text-field v-model="email" color="primary" label="Email" type="email" variant="underlined" required />
          <v-text-field v-model="password" color="primary" label="Contraseña" type="password" variant="underlined"
            required />
        </v-container>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="handleRegister">
          Registrarse
          <v-icon icon="mdi-chevron-right" end />
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <p>
          ¿Ya tienes una cuenta?
          <strong class="cursor-pointer text-primary" @click="$router.push({ name: 'login' })">
            Inicie sesión
          </strong>
        </p>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="400">
      <v-card v-if="success">
        <v-toolbar color="primary" title="Registro Exitoso" dark />
        <v-card-text class="pa-6">
          ¡Bienvenido {{ username }}! Tu registro fue completado.
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn :to="{ name: 'login' }" color="primary" @click="dialog = false">
            Ingresar
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-else>
        <v-toolbar color="primary" title="Error de Registro" dark />
        <v-card-text class="pa-6">
          {{ errorMessage }}
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

const username = ref("");
const email = ref("");
const password = ref("");
const dialog = ref(false);
const success = ref(false);
const errorMessage = ref("");

const clientStore = useClientStore();

const handleRegister = () => {
  if (username.value.length < 3) {
    errorMessage.value = "El usuario debe tener al menos 3 caracteres.";
    success.value = false;
    dialog.value = true;
    return;
  }
  if (!email.value.includes("@")) {
    errorMessage.value = "Debe ingresar un email válido.";
    success.value = false;
    dialog.value = true;
    return;
  }
  if (password.value.length < 4) {
    errorMessage.value = "La contraseña debe tener al menos 4 caracteres.";
    success.value = false;
    dialog.value = true;
    return;
  }

  const ok = clientStore.register(username.value, email.value, password.value);
  if (ok) {
    success.value = true;
  } else {
    success.value = false;
    errorMessage.value = "El usuario o email ya existen.";
  }
  dialog.value = true;
};
</script>
