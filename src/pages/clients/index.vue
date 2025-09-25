<route lang="yaml">
name: clients
meta:
  layout: home
  requiresAuth: true
</route>
<template>
    <v-card class="d-flex flex-column">
        <v-card-text class="d-flex justify-start">
            <v-text-field v-model="clientStore.search" @update:model-value="clientStore.page = 1"
                append-inner-icon="mdi-magnify" density="compact" label="Buscar cliente" variant="solo" hide-details
                single-line style="width: 100%;" />
        </v-card-text>
        <v-list width="100%" style="overflow-y: auto; min-height: calc(100vh - 495.41px );">
            <v-list-item v-for="cliente in clientStore.paginatedClients" :key="cliente.id">
                <v-hover>
                    <v-card outlined class="pa-2 mb-2" :color="isHovering ? 'primary-lighten-3' : undefined">
                        <v-row align="center" justify="space-between">
                            <v-col cols="auto">
                                <v-list-item-title>{{ cliente.username }}</v-list-item-title>
                                <v-list-item-subtitle>
                                    Email: {{ cliente.email }}
                                </v-list-item-subtitle>

                            </v-col>
                            <v-col cols="auto">
                                <v-btn variant="tonal" @click="clientStore.removeClient(cliente)"
                                    color="red">Eliminar</v-btn>

                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-list-item>
            <v-list-item v-if="clientStore.clientesFiltrados.length === 0">
                <v-list-item-title>No se encontraron clientes</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <div class="text-center">
            <v-container>
                <v-row justify="center">
                    <v-col cols="8">
                        <v-container style="padding: 0;">
                            <v-pagination v-model="clientStore.page"
                                :length="Math.ceil(clientStore.clientesFiltrados.length / clientStore.itemsPerPage)"
                                class="my-4"></v-pagination>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-card>
</template>
<script setup>
import { useClientStore } from '@/stores/clients';
const clientStore = useClientStore();
console.log(clientStore.clients);
</script>