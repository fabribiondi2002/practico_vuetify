import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useClientStore = defineStore('clients', () => {
    const clients = ref([]);
    const addClient = (client) => {
        clients.value.push(client);
    };
    const removeClient = (clientId) => {
        clients.value = clients.value.filter(client => client.id !== clientId);
    };
    const getClients = computed(() => clients.value);
    return { clients, addClient, removeClient, getClients };
});