<template>
    <v-app>
        <!-- App Bar -->
        <v-app-bar color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Mi Tienda</v-toolbar-title>

        </v-app-bar>

        <!-- Drawer del carrito -->
        <v-navigation-drawer v-model="drawer" temporary right width="400">
            <v-card width="100%">
                <v-list>
                    <v-list-item :to="'/products'">
                        <p>Productos</p>
                    </v-list-item>

                    <v-list-item :to="'/clients'">
                        <p>Clientes</p>
                    </v-list-item>
                    <v-list-item :to="'/account'">
                        <p>Mi cuenta</p>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <!-- Contenido de la página -->
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

</script>
