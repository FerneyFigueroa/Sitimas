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

/* ===== HERO ===== */
.legal-hero {
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 60px 20px;
  border-radius: 0 0 30px 30px;
}

.legal-hero h1 {
  font-size: 32px;
  font-weight: 800;
}

.legal-hero p {
  max-width: 600px;
  margin: auto;
}

/* ===== CONTENIDO ===== */
.legal-content {
  margin-top: 50px;
  max-width: 900px;
}

/* ===== TARJETAS ===== */
.legal-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 25px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  line-height: 1.6;
}

/* TEXTO DESTACADO */
.highlight {
  color: #2faa0a;
}

/* ===== LISTA ===== */
.legal-list {
  padding-left: 18px;
}

.legal-list li {
  margin-bottom: 12px;
  color: #374151;
}

/* ===== BOTÓN ===== */
.legal-action {
  margin-top: 20px;
}

.btn-law {
  display: inline-block;
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-law:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(47,170,10,0.4);
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {

  .legal-hero h1 {
    font-size: 24px;
  }

  .legal-content {
    padding: 0 15px;
  }

}

</style>