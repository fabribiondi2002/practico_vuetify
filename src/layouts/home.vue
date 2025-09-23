<template>
    <v-app>
        <AppBar @toggle-drawer="store.toggleDrawer" @toggle-cart="productStore.toggleCart" />

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
                    <v-list-item :to="{ name: 'settings'}">
                        <p>Configuracion</p>
                    </v-list-item>
                    <v-list-item :to="{ name: 'login'}" @click="clientStore.logout()">
                        <p>Cerrar sesion</p>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>
        
        <v-navigation-drawer v-model="productStore.cart" :location="'right'" temporary width="400">
            <v-card width="100%">
                <v-list>
                    <v-list-item v-for="item in productStore.carrito" :key="item.id">
                        <v-row text-align="center" justify="space-between">
                            <v-col cols="auto">
                                <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                                <v-list-item-subtitle>
                                    Precio: ${{ item.precio }} - Cantidad: {{ item.cantidad }}
                                </v-list-item-subtitle>
                            </v-col>
                            <v-col cols="auto">
                                <v-number-input control-variant="split" v-model="item.cantidad" :min="0"
                                    :max="products.find(p => p.id === item.id)?.stock + item.cantidad"
                                    @update:model-value="() => productStore.actualizarStock(item)">
                                </v-number-input>
                            </v-col>
                        </v-row>
                    </v-list-item>
                    <v-list-item v-if="productStore.carrito.length === 0">
                        <v-list-item-title>El carrito está vacío</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>
        
        <v-main>
            <v-divider></v-divider>
            <v-container fluid style=" min-height: calc(100vh - 64px - 205px);" >
                <router-view />
            </v-container>
        </v-main>

        <v-divider></v-divider>
        <AppFooter/>
    </v-app>
</template>

<script setup>
import AppBar from "@/components/AppBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import { useProductStore } from '@/stores/products.js';
import { useClientStore } from '@/stores/clients.js';
import { useStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const clientStore = useClientStore();
const store = useStore();
const { products } = storeToRefs(productStore);
</script>