import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useClientStore = defineStore('clients', () => {
    const clients = ref([]);
    const addClient = (client) => {
        const exists = clients.value.some(c => c === client);
        if (!exists) {
            clients.value.push(client);
            console.log(clients.value);
        }else{
            alert("El cliente ya existe");
        }
    };
    const removeClient = (clientId) => {
        clients.value = clients.value.filter(client => client.id !== clientId);
    };
    const getClients = computed(() => clients.value);

    const login = (client) => {
        const exists = clients.value.some(c => c === client);
        if (exists) {
            return true;
        }else{
            return false
        }
    };

    return { clients, addClient, removeClient, getClients, login };
});