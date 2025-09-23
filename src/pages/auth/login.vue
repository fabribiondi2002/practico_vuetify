<route lang="yaml">
name: login
meta:
  layout: default
</route>

<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtZXJjYWRvfGVufDB8fDB8fHww"
    height="1000">
    <v-card class="mx-auto mt-10" max-width="400">
      <v-card-title class="text-h6 text-center">
        Inicio de sesión
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-container>
          <v-text-field v-model="identifier" color="primary" label="Usuario o Email" variant="underlined" required />
          <v-text-field v-model="password" color="primary" label="Contraseña" type="password" variant="underlined"
            required />
        </v-container>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="handleLogin">
          Ingresar
          <v-icon icon="mdi-chevron-right" end />
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-p>
          ¿No tienes una cuenta?
          <strong class="cursor-pointer text-primary" @click="$router.push({ name: 'signin' })">
            Regístrate
          </strong>
        </v-p>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="400">
      <v-card v-if="exist">
        <v-toolbar color="primary" title="Inicio de sesión exitoso" dark />
        <v-card-text class="pa-6">
          ¡Bienvenido {{ clientStore.currentUser?.username }}!
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn :to="{ name: 'products' }" color="primary" @click="dialog = false">
            Ir a productos
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-toolbar color="primary" title="Error de inicio de sesión" dark />
        <v-card-text class="pa-6">
          Los datos que ha ingresado no coiciden. Verifique usuario/email y contraseña.
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

const identifier = ref("");
const password = ref("");
const dialog = ref(false);
const exist = ref(false);

const clientStore = useClientStore();

const handleLogin = () => {
  const ok = clientStore.login(identifier.value, password.value);
  exist.value = ok;
  dialog.value = true;
};
</script>
