<template>
  <header id="header" class="header fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Ajustado: el logo tambien cierra el menu movil al volver al inicio. -->
      <RouterLink :to="{ name: 'home' }"  class="logo d-flex align-items-center" @click="closeMenu">
        <img src="@/assets/img/logoletrasblancoSitiMas.webp" class="logo-img" alt="Siti Mas">
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
.header {
  background: linear-gradient(90deg, #2faa0a, #39ff14);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  z-index: 9999;
}

.logo-img {
  height: 75px;
}

.navmenu {
  display: flex;
  align-items: center;
}

.navmenu ul {
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navmenu a {
  color: white;
  display: inline-flex;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: 0.3s;
}

.navmenu a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: white;
  transition: 0.3s;
}

.navmenu a:hover::after,
.navmenu a.active::after {
  width: 100%;
}

.btn-onepay {
  background: white;
  color: #2faa0a !important;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
}

.btn-onepay:hover {
  background: #0b0f1a;
  color: white !important;
}

.header-social-links a {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 8px;
  transition: 0.3s;
}

.header-social-links a:hover {
  background: white;
  color: #2faa0a;
  transform: scale(1.1);
}

.mobile-nav-toggle {
  display: none;
}

/* Ajustado: estilos especificos para que el menu movil sea un panel completo. */
@media (max-width: 1199px) {
  .header {
    padding: 6px 0;
  }

  .logo-img {
    height: 72px;
  }

  .navmenu {
    margin-left: auto;
  }

  .mobile-nav-toggle {
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 1;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  .mobile-nav-toggle:hover {
    background: white;
    color: #2faa0a;
  }

  .navmenu>ul {
    flex-direction: column;
    gap: 0;
    background: #0b0f1a;
    position: fixed;
    top: 70px;
    left: 16px;
    right: 16px;
    width: auto;
    max-height: calc(100vh - 90px);
    padding: 12px;
    display: none;
    overflow-y: auto;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
  }

  .navmenu>ul.mobile-active {
    display: flex;
    animation: fadeIn 0.3s ease;
  }

  .navmenu>ul li {
    width: 100%;
  }

  .navmenu>ul a {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 14px;
    border-radius: 10px;
    color: white;
  }

  .navmenu>ul a:hover,
  .navmenu>ul a.active {
    background: rgba(57, 255, 20, 0.12);
  }

  .navmenu>ul a::after {
    display: none;
  }

  .navmenu>ul .btn-onepay {
    justify-content: center;
    margin-top: 8px;
    color: #2faa0a !important;
  }
}

@media (max-width: 576px) {
  .logo-img {
    height: 46px;
  }

  .header-social-links {
    display: none;
  }

  .navmenu>ul {
    top: 62px;
    left: 10px;
    right: 10px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header.scrolled {
  background: #ffffff;
}

.header.scrolled .navmenu a {
  color: #111;
}
</style>
