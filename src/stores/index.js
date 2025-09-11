// Utilities
import { createPinia } from 'pinia'
export const useStore = defineStore('index', () => {
    const drawer = ref(false);
    const toggleDrawer = () => {
        drawer.value = !drawer.value;
    };
    return {toggleDrawer, drawer}
});
export default createPinia()
