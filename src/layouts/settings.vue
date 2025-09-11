<template>
    <v-app>
        <AppBarNoCart @toggle-drawer="store.toggleDrawer" />

        <v-navigation-drawer v-model="store.drawer" temporary right width="400">
            <v-card width="100%">
                <v-list>
                    <v-list-item :to="{ name: 'products' }">
                        <p>Productos</p>
                    </v-list-item>
                    <v-list-item :to="{ name: 'clients' }">
                        <p>Clientes</p>
                    </v-list-item>
                    <v-list-item :to="{ name: 'accounts' }">
                        <p>Mi cuenta</p>
                    </v-list-item>
                    <v-list-item :to="{ name: 'settings' }">
                        <p>Configuracion</p>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <v-navigation-drawer permanent :width="400" :location="'right'">
            <v-card width="100%">
                <v-list>
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>
        <v-main>
            <v-divider></v-divider>
            <v-container fluid style=" min-height: calc(100vh - 64px - 205px);">
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import AppBarNoCart from "@/components/AppBarNoCart.vue";
import { useStore } from '@/stores/index.js';
const store = useStore();

</script>