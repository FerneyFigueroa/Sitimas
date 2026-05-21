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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.30s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.whatsapp-float {
  position: fixed;
  bottom: 80px;
  right: 12px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  z-index: 9999;
  text-decoration: none;

  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
  animation: pulse 2s infinite;
  transition: all 0.3s ease;
}

/* Hover PRO */
.whatsapp-float:hover {
  transform: scale(1.15);
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.9);
}

.main {
  padding-top: 85px;
}

@media (max-width: 768px) {
  .main {
    padding-top: 10px;
  }
}

/* Animación pulso */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>