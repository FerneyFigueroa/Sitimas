<template>
  <div class="index-page">
    

    <NavbarPage />
    <main class="main">

      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>

    <FooterPage />

    <a :href="urlWhatsApp" target="_blank" class="whatsapp-float">
      <i class="bi bi-whatsapp"></i>
    </a>
    <!-- Scroll Top -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'
import { initTemplate } from './assets/js/main.js'

import NavbarPage from './modules/landing/pages/NavbarPage.vue';
import FooterPage from './modules/landing/pages/FooterPage.vue';





onMounted(() => {
  initTemplate()
})
const numero = "573104038984"
const mensaje = "Hola, quiero instalar internet"

const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

const menuOpen = ref(false)

// Ajustado: abre/cierra el menu hamburguesa desde Vue.
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Ajustado: cierra el menu cuando el usuario toca una opcion.
const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
/* Consolidado en src/assets/css/main.css: transicion fade, .main, .whatsapp-float y sitimasWhatsappPulse. */
</style>
