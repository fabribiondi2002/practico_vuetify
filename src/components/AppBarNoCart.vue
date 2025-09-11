<template>
    <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
        <v-toolbar-title :to="{ name: 'products' }" align="center">Mi Tienda</v-toolbar-title>
    </v-app-bar>
</template>

<script setup>

</script>