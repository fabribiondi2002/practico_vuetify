<template>
    <v-app >
        <!-- App Bar -->
        <AppBar/>
        <v-divider></v-divider>

        <!-- Contenido de la página -->
        <v-main>
            <v-container fluid >
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
</script>
