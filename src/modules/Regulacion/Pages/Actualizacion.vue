<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0 mb-5">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Actualización / Retiro Centrales de Riesgo 📊</h1>
      <p>Gestión de información en centrales de datos</p>
    </div>

    <div class="container legal-content">

      <!-- INTRO -->
      <div class="legal-card">
        <p>
          Usted podrá radicar las solicitudes de corrección, actualización o retiro de la información personal reportada por parte de Siti Más Telecomunicaciones SAS, a los operadores de DATOS Data-crédito de la siguiente manera:
        </p>
      </div>

      <!-- FORMAS -->
      <div class="legal-card">
        <h3>Formas de realizar la solicitud</h3>

        <ul class="legal-list">
          <li>Directamente con el operador de DATOS respectivo.</li>
          <li>
            A través de nuestros canales provistos para la recepción de PQRS:
            <ul>
              <li>a) Página web.</li>
              <li>b) Línea de atención.</li>
              <li>c) Oficinas de atención al usuario.</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- REGLAS -->
      <div class="legal-card">
        <h3>Reglas Generales</h3>

        <ul class="legal-list">
          <li>
            Radicada la Queja, Siti Más Telecomunicaciones SAS informará de ese hecho al operador Data-crédito dentro de los 2 días hábiles siguientes.
          </li>

          <li>
            Recibida la anterior información por el operador Data-crédito, este incluye dentro de los 2 días hábiles siguientes, la leyenda “reclamo en trámite” y su naturaleza en el registro individual.
          </li>

          <li>
            Para dar respuesta a la queja Siti Más Telecomunicaciones SAS realiza una verificación completa de las observaciones o planteamientos del titular, asegurándose de revisar toda la información pertinente para poder dar una respuesta.
          </li>
        </ul>
      </div>

      <!-- BOTÓN -->
      <div class="legal-action text-center">
        <p>Para conocer más información puede consultar la:</p>

        <a
          href=""
          
          class="btn-law"
        >
          📄 Circular Externa No. 008 de 2011
        </a>
      </div>

    </div>

  </section>
</template>

<style scoped>

/* HERO */
.legal-hero {
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 60px 20px;
  border-radius: 0 0 30px 30px;
}

/* CONTENIDO */
.legal-content {
  margin-top: 40px;
  max-width: 900px;
}

/* CARD */
.legal-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 25px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  line-height: 1.6;
}

/* LISTAS */
.legal-list {
  padding-left: 20px;
}

.legal-list li {
  margin-bottom: 10px;
}

/* BOTÓN */
.legal-action {
  margin-top: 30px;
}

.btn-law {
  display: inline-block;
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-law:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(47,170,10,0.4);
}

/* MOBILE */
@media (max-width: 768px) {
  .legal-content {
    padding: 0 15px;
  }
}

</style>