import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductStore = defineStore('products', () => {
    const search = ref('');
    const cart = ref(false); 
    const products = ref([
        { id: 1, nombre: "Jabon", precio: 100, stock: 10 }, { id: 2, nombre: "Papel higienico", precio: 200, stock: 5 }, { id: 3, nombre: "Pasta dental", precio: 300, stock: 0 }, { id: 4, nombre: "Shampoo", precio: 450, stock: 8 }, { id: 5, nombre: "Acondicionador", precio: 400, stock: 6 }, { id: 6, nombre: "Cepillo de dientes", precio: 150, stock: 12 }, { id: 7, nombre: "Desodorante", precio: 350, stock: 7 }, { id: 8, nombre: "Toallas sanitarias", precio: 250, stock: 15 }, { id: 9, nombre: "Jabon liquido", precio: 180, stock: 9 }, { id: 10, nombre: "Cotonetes", precio: 80, stock: 20 }, { id: 11, nombre: "Crema humectante", precio: 500, stock: 4 }, { id: 12, nombre: "Pasta de manos", precio: 220, stock: 10 }, { id: 13, nombre: "Alcohol en gel", precio: 300, stock: 5 }, { id: 14, nombre: "Limpiador facial", precio: 350, stock: 6 }, { id: 15, nombre: "Jabon exfoliante", precio: 200, stock: 8 }
    ]);
    const carrito = ref([]);
    const itemsPerPage = ref(6);
    const page = ref(1);

    const productosFiltrados = computed(() =>
        products.value.filter((producto) =>
            producto.nombre.toLowerCase().includes(search.value.toLowerCase())
        )
    );

    const paginatedProducts = computed(() => {
        const start = (page.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return productosFiltrados.value.slice(start, end);
    });

    

    const toggleCart = () => {
        cart.value = !cart.value;
    };

    const agregarAlCarrito = (producto) => {
        if (producto.stock <= 0) {
            alert("No hay suficiente stock.");
            return;
        }
        const item = carrito.value.find(p => p.id === producto.id);
        if (item) {
            item.cantidad++;
        } else {
            carrito.value.push({ ...producto, cantidad: 1, cantAnt: 1 });
        }
        producto.stock--;
    };

    const actualizarStock = (item) => {
        const producto = products.value.find(p => p.id === item.id);
        if (!producto) return;

        const diferencia = item.cantidad - item.cantAnt;

        if (diferencia > 0) {
            if (producto.stock >= diferencia) {
                producto.stock -= diferencia;
            } else {
                alert("No hay suficiente stock.");
                item.cantidad = item.cantAnt;
                return;
            }
        } else if (diferencia < 0) {
            producto.stock += Math.abs(diferencia);
            if (item.cantidad <= 0) {
                carrito.value = carrito.value.filter(p => p.id !== item.id);
            }
        }
        item.cantAnt = item.cantidad;
    };

    return { search, cart, products,productosFiltrados, carrito, itemsPerPage, paginatedProducts, page,agregarAlCarrito, actualizarStock, toggleCart };
});