<template>
  <header id="header" class="header fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Ajustado: el logo tambien cierra el menu movil al volver al inicio. -->
      <RouterLink :to="{ name: 'home' }"  class="logo d-flex align-items-center" @click="closeMenu">
        <img src="/logoletrasblancoSitiMas.webp" class="logo-img" alt="Siti Mas">
      </RouterLink>

      <nav id="navmenu" class="navmenu">
        <!-- Ajustado: Vue controla esta clase para mostrar/ocultar el panel movil. -->
        <ul :class="{ 'mobile-active': menuOpen }">
          <li>
            <RouterLink :to="{ name: 'home' }" @click="closeMenu">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink to="/servicios" @click="closeMenu">Servicios</RouterLink>
          </li>
          <li>
            <RouterLink to="/nosotros" @click="closeMenu">Nosotros</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacto" @click="closeMenu">Contacto</RouterLink>
          </li>
          <li>
            <RouterLink to="/onpay" class="btn-onepay" @click="closeMenu">Pagos OnePay</RouterLink>
          </li>
        </ul>

        <!-- Ajustado: boton real para evitar conflictos con el JS global del template. -->
        <button class="mobile-nav-toggle d-xl-none" type="button" :aria-expanded="menuOpen" aria-label="Abrir menu"
          @click="toggleMenu">
          <i class="bi" :class="menuOpen ? 'bi-x' : 'bi-list'"></i>
        </button>
      </nav>

      <div class="header-social-links">
        <a href="https://www.facebook.com/sitirural" aria-label="Facebook" target="_blank"><i
            class="bi bi-facebook"></i></a>
        <!-- <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a> -->
        <a :href="urlWhatsApp" target="_blank" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
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
/* Consolidado en src/assets/css/main.css: estilos activos de header, nav, logo, redes, menu movil y estado .scrolled. */
</style>
