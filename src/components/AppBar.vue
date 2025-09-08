<template>
    <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
        <v-toolbar-title @click="$router.push('/products')" align="center">Mi Tienda</v-toolbar-title>
        <v-btn icon @click="$emit('toggle-cart')">
            <v-icon>mdi-cart</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup>

</script>