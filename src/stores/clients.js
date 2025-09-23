import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useClientStore = defineStore('clients', () => {
    const clients = ref([
        { id: 1, username: 'admin', email: 'admin@mail.com', password: '1234' }
    ]);

    const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || null);

    const search = ref('');
    const itemsPerPage = ref(6);
    const page = ref(1);

    watch(currentUser, (val) => {
        if (val) {
            localStorage.setItem('currentUser', JSON.stringify(val));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, { deep: true });

    const clientesFiltrados = computed(() =>
        clients.value.filter((cliente) =>
            cliente.username.toLowerCase().includes(search.value.toLowerCase()) ||
            cliente.email.toLowerCase().includes(search.value.toLowerCase())
        )
    );

    const paginatedClients = computed(() => {
        const start = (page.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return clientesFiltrados.value.slice(start, end);
    });

    const register = (username, email, password) => {
        const exists = clients.value.some(
            c => c.username === username || c.email === email
        );
        if (exists) {
            alert("El usuario o el email ya existen");
            return false;
        }
        const newUser = {
            id: Date.now(),
            username,
            email,
            password
        };
        clients.value.push(newUser);
        return true;
    };

    const login = (identifier, password) => {
        const user = clients.value.find(
            c => (c.username === identifier || c.email === identifier) && c.password === password
        );
        if (user) {
            currentUser.value = user; 
            return true;
        }
        return false;
    };

    const logout = () => {
        currentUser.value = null; 
    };

    const removeClient = (clientId) => {
        clients.value = clients.value.filter(client => client.id !== clientId);
    };

    const getClients = computed(() => clients.value);
    const isAuthenticated = computed(() => currentUser.value !== null);

    return { 
        clients, 
        search, 
        itemsPerPage, 
        page, 
        clientesFiltrados, 
        paginatedClients,
        register, 
        login, 
        logout, 
        currentUser, 
        isAuthenticated,
        removeClient,
        getClients
    };
});
