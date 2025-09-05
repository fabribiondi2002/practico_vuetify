<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        
        <v-card-text class="d-flex justify-start">
          <v-text-field v-model="search" append-inner-icon="mdi-magnify" density="compact" label="Buscar productos"
            variant="solo" hide-details single-line style="width: 100%;" />
        </v-card-text>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
  v-model="drawer"
  :location="$vuetify.display.mobile ? 'bottom' : 'right'"
  temporary
  width="400"
>
  <v-card width="100%">
    <v-list>
      <v-list-item v-for="item in carrito" :key="item.id"  >
        <v-list-item-content>
          <v-row text-align="center" justify="space-between">
            <v-col cols="auto">
              <v-list-item-title>{{ item.nombre }}</v-list-item-title>
              <v-list-item-subtitle>
                Precio: ${{ item.precio }} - Cantidad: {{ item.cantidad }}
              </v-list-item-subtitle>
            </v-col>
            <v-col cols="auto">
              <v-number-input control-variant="split" v-model="item.cantidad" @update:model-value="(val) => actualizarCantidad(item, val)"></v-number-input>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="carrito.length === 0">
        <v-list-item-content>
          <v-list-item-title>El carrito está vacío</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</v-navigation-drawer>


      <v-main style="height: 500px;">

        <v-card class="d-flex" style="margin-left: 16px;" max-width="100%">
          <v-list width="100%">
            <v-list-item v-for="producto in productosFiltrados" :key="producto.id">
              <v-row align="center" justify="space-between">
                <!-- Texto a la izquierda -->
                <v-col cols="auto">
                  <v-list-item-title>{{ producto.nombre }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Precio: ${{ producto.precio }} - Stock: {{ producto.stock }}
                  </v-list-item-subtitle>
                </v-col>

                <!-- Botón a la derecha -->
                <v-col cols="auto">
                  <v-btn :disabled="producto.stock === 0" size="small" color="primary" style="margin: 0;"
                    @click="agregarAlCarrito(producto)">
                    Agregar al carrito
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item>


            <v-list-item v-if="productosFiltrados.length === 0">
              <v-list-item-content>
                <v-list-item-title>No se encontraron productos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

      </v-main>
    </v-layout>
  </v-card>
</template>


<script setup>
import { ref, computed, watch } from "vue";

const search = ref("");
const products = ref([
  { id: 1, nombre: "Jabon", precio: 100, stock: 10 },
  { id: 2, nombre: "Papel higienico", precio: 200, stock: 5 },
  { id: 3, nombre: "Pasta dental", precio: 300, stock: 0 },
]);
const carrito = ref([]);


const productosFiltrados = computed(() =>
  products.value.filter((producto) =>
    producto.nombre.toLowerCase().includes(search.value.toLowerCase())
  )
);
const agregarAlCarrito = (producto) => {
  if (producto.stock <= 0) {
    alert("No hay suficiente stock.");
    return;
  }

  const item = carrito.value.find(p => p.id === producto.id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.value.push({ ...producto, cantidad: 1 });
  }
  producto.stock--; // reducimos stock
};

const actualizarCantidad = (item, nuevaCantidad) => {
  const producto = products.value.find(p => p.id === item.id);
  if (!producto) return;

  const diferencia = item.cantidad - nuevaCantidad; // cantidad que se libera o se toma del stock
  producto.stock += diferencia; 
  item.cantidad = nuevaCantidad;

  if (item.cantidad <= 0) {
    carrito.value = carrito.value.filter(p => p.id !== item.id);
  }
};


const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})

</script>
