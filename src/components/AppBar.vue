<template>
    <v-app-bar color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Mi Tienda</v-toolbar-title>
            <v-btn icon @click.stop="cart = !cart">
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
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
        <v-navigation-drawer v-model="cart" :location="$vuetify.display.mobile ? 'bottom' : 'right'" temporary
                    width="400">
                    <!-- <v-card width="100%">
                        <v-list>
                            <v-list-item v-for="item in carrito" :key="item.id">
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
                                            @update:model-value="() => actualizarStock(item)"></v-number-input>

                                    </v-col>
                                </v-row>
                            </v-list-item>

                            <v-list-item v-if="carrito.length === 0">
                                <v-list-item-title>El carrito está vacío</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card> -->
                </v-navigation-drawer>
</template>
<script setup>
import { computed } from 'vue';
import { ref } from 'vue';

const drawer = ref(false);
const cart = ref(false);
const carrito = ref([]);
</script>