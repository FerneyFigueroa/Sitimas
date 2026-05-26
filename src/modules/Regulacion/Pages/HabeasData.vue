<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0 mb-5">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Habeas Data 🔐</h1>
      <p>
        Autorización para el tratamiento de datos personales
      </p>
    </div>

    <!-- CONTENIDO -->
    <div class="container legal-content">

      <!-- INTRO -->
      <div class="legal-card">
        <p>
          Por medio de la presente realizo la siguiente acción con mis datos personales:
        </p>

        <p class="highlight">
          <b>
            Autorizo a Siti Más Telecomunicaciones para usar mis datos personales con la finalidad de:
          </b>
        </p>
      </div>

      <!-- LISTA -->
      <div class="legal-card">
        <ul class="legal-list">

          <li>
            <b>1.</b> Comunicar eficientemente información propia de Siti Más Telecomunicaciones, así como de nuestras filiales y/o aliados comerciales, sobre productos, servicios y ofertas.
          </li>

          <li>
            <b>2.</b> Informar sobre nuevos productos o servicios relacionados con los servicios adquiridos.
          </li>

          <li>
            <b>3.</b> Evaluar la calidad de los servicios prestados.
          </li>

          <li>
            <b>4.</b> Informar sobre cambios en nuestros productos o servicios.
          </li>

          <li>
            <b>5.</b> Participar en programas de lealtad con beneficios.
          </li>

          <li>
            <b>6.</b> Realizar estudios de mercado sobre hábitos de consumo.
          </li>

          <li>
            <b>7.</b> Transferir y transmitir datos personales a terceros con vínculos comerciales con Siti Más Telecomunicaciones.
          </li>

          <li>
            <b>8.</b> Las demás finalidades necesarias para cumplir los fines de mercadeo.
          </li>

        </ul>
      </div>

      <!-- BOTÓN LEY -->
      <div class="legal-action text-center">
        <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" class="btn-law" target="blank">
          📄 Ley 1581 de 2012
        </a>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* Consolidado en src/assets/css/main.css: legal-hero, legal-content, legal-card, highlight, legal-list, legal-action, btn-law y responsive legal. */
.legal-content {
  margin-top: 50px;
}

.legal-hero h1 {
  font-size: 32px;
  font-weight: 800;
}

.legal-hero p {
  max-width: 600px;
  margin: auto;
}

.legal-list {
  padding-left: 18px;
}

.btn-law {
  padding: 12px 25px;
}

@media (max-width: 768px) {
  .legal-hero h1 {
    font-size: 24px;
  }
}
</style>
