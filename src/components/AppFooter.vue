<!-- <template>
  <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
    <v-btn
      v-for="link in links"
      :to="link.to"
      :text="link.text"
      variant="text"
      rounded
    ></v-btn>

    <div class="flex-1-0-100 text-center mt-2">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const links = [ {
    text: 'Home',
    to: '/products'
  },
  {
    text: 'About Us',
    to: '/products'
  },
  {
    text: 'Team',
    to: '/products'
  },
  {
    text: 'Services',
    to: '/products'
  },
  {
    text: 'Blog',
    to: '/products'
  }
  ]
</script> -->
<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="primary">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Esta es una pagina creada con el fin de practicar la implementacion de Vuetify en la materia de  Ingenieria Web III.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Leandro Biondi</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>