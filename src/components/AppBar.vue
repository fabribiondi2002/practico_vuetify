<template>
    <v-app-bar color="primary">
                <v-toolbar-title class="white--text">Mi tienda</v-toolbar-title>    
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : 'right'" temporary
                width="400">
                <v-card width="100%">
                    <v-list>
                        <v-list-item :to="'/products'">
                            <p>Productos</p>
                        </v-list-item>
                        
                        <v-list-item :to="'/clients'">
                            <p>Clientes</p>
                        </v-list-item>
                        <v-list-item :to="'/accounts'">
                            <p>Mi cuenta</p>
                        </v-list-item>
                        
                    </v-list>
                </v-card>
            </v-navigation-drawer>
</template>
<script setup>
import { ref } from 'vue';

const drawer = ref(false);

</script>