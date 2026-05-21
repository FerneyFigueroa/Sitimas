<script setup>
const numero = "573104038984"
const mensaje = "Hola, quiero instalar internet"

const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

</script>

<template>
  <footer class="footer-pro">
    <div class="container">
      <div class="row">

        <!-- LOGO + DESCRIPCIÓN -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h4 class="footer-logo">Siti Más</h4>
          <p class="footer-text">
            Conectamos la ruralidad con tecnología de calidad, llevando internet
            confiable a hogares y empresas en el Cauca.
          </p>

          <div class="social-icons">
            <a href="https://www.facebook.com/sitirural" target="_blank"><i class="bi bi-facebook"></i></a>
            <!-- <a href="#"><i class="bi bi-instagram"></i></a> -->
            <a :href="urlWhatsApp" target="_blank"><i class="bi bi-whatsapp"></i></a>

          </div>
        </div>

        <!-- SERVICIOS -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h5>Servicios</h5>
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/servicios">Servicios</RouterLink></li>
            <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
            <li><RouterLink to="/contacto">Contacto</RouterLink></li>
          </ul>
        </div>

        <!-- ATENCIÓN -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Siti Más</h5>
          <ul>
            <li><RouterLink to="/pqr">PQRS</RouterLink></li>
             <li><RouterLink to="/cobertura">Cobertura</RouterLink></li>
            <li><RouterLink to="/atencion">Centro de Atención</RouterLink></li>
            <li><RouterLink to="/recoleccion">Recolección Equipos</RouterLink></li>
            <li><RouterLink to="/tdt">Televisión TDT</RouterLink></li>
             <li><RouterLink to="/terminoscondiciones">Términos y Condiciones</RouterLink></li>
            <li><RouterLink to="/politicaprivacidad">Política de Privacidad</RouterLink></li>
          </ul>
        </div>

        <!-- REGULACIÓN -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5>Regulación</h5>
          <ul>
            <li><RouterLink to="/calidad">Calidad</RouterLink></li>
            <li><RouterLink to="/habeas-data">Habeas Data</RouterLink></li>
            <li><RouterLink to="/politica-datos">Política de Datos</RouterLink></li>
            <li><RouterLink to="/internet-sano">Internet Sano</RouterLink></li>
            <li><RouterLink to="/proteccion-usuario">Protección Usuario</RouterLink></li>
            <li><RouterLink to="/actualizacion">Actualización/Retiro Centrales de Riesgo</RouterLink></li>
            <li><RouterLink to="/regimenproteccion">Régimen Protección</RouterLink></li>
            <li><RouterLink to="/enteregulador">Ente Regulador</RouterLink></li>
           

          </ul>
        </div>
        

      </div>

      <!-- LINEA -->
      <hr>

      <!-- COPY -->
      <div class="footer-bottom text-center">
        <p>© {{ new Date().getFullYear() }} Siti Más Telecomunicaciones - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-pro {
  background: #0b0f1a;
  color: #ccc;
  padding: 60px 0 20px;
}

.footer-logo {
  font-size: 26px;
  font-weight: 800;
  color: #39ff14;
}

.footer-text {
  font-size: 14px;
  line-height: 1.6;
  margin: 15px 0;
}

.footer-pro h5 {
  color: #fff;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-pro ul {
  list-style: none;
  padding: 0;
}

.footer-pro ul li {
  margin-bottom: 10px;
}

.footer-pro ul li a {
  color: #aaa;
  text-decoration: none;
  transition: all 0.3s;
}

.footer-pro ul li a:hover {
  color: #39ff14;
  padding-left: 5px;
}

.social-icons a {
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  color: #aaa;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #39ff14;
  transform: scale(1.2);
}

.footer-pro hr {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 30px 0;
}

.footer-bottom p {
  font-size: 13px;
  color: #777;
}
</style>