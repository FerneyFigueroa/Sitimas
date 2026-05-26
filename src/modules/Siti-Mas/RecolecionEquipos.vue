<script setup lang="ts">
const numero = "573104038984";
const mensaje = "Hola, quiero devolver los equipos de Siti Más";

const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
</script>

<template>

  <section class="legal-page pt-0">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Devolución de Equipos 📦</h1>
      <p>Proceso para entregar los equipos de Siti Más</p>
    </div>

    <div class="container legal-content">

      <!-- INTRO -->
      <div class="legal-card">
        <h3>¿Cómo realizar la devolución de los equipos de Siti Más?</h3>
        <p>
          Conoce los medios disponibles para devolver tu módem que te entregamos para el uso de los servicios Siti Más en tu hogar o empresa:
        </p>
      </div>

      <!-- IMPORTANCIA -->
      <div class="legal-card">
        <h3>¿Por qué es importante entregar los equipos?</h3>
        <p>
          Para Siti Más es importante hacer una clasificación y disposición correcta de los equipos que fueron instalados y que ya no usas, ya que de esta manera podamos dar un uso responsable a los componentes y contribuir con el cuidado del medio ambiente.
        </p>
      </div>

      <!-- DONDE ENTREGAR -->
      <div class="legal-card">
        <h3>¿Dónde puedo entregar los equipos?</h3>

        <ul class="legal-list">
          <li>
            📲 Escribe al WhatsApp y solicita la recolección:
            <a :href="whatsappUrl" target="_blank">3104038984</a>
          </li>

          <li>
            📦 Acércate a Servientrega o Inter Rapidísimo con los equipos (modem, cables, decodificadores, repetidores wifi).
          </li>

          <li>
            🚚 El costo del envío será en contra entrega a:
            Cra 6E 13-50 piso 1 Portal de las Ferias Popayán - Cauca.
          </li>
        </ul>
      </div>

      <!-- RECOMENDACIONES -->
      <div class="legal-card">
        <h3>Recomendaciones para la entrega</h3>

        <ul class="legal-list">
          <li>Identifica los cables, controles remotos y accesorios.</li>
          <li>Empaca los equipos en bolsa o caja.</li>
          <li>Asegúrate de que un mayor de edad esté presente.</li>
          <li>Marca el empaque con nombre, cédula y teléfono del titular.</li>
        </ul>
      </div>

      <!-- FAQ -->
      <div class="legal-card">
        <h3>Preguntas Frecuentes</h3>

        <div class="faq">
          <h4>¿Por qué debo devolver los equipos?</h4>
          <p>
            Siti Más instala los equipos en calidad de comodato o préstamo. Al retirar el servicio es necesario devolverlos para evitar cobros.
          </p>
        </div>

        <div class="faq">
          <h4>¿Debo ser el titular?</h4>
          <p>
            No es obligatorio, solo se necesita el número de cédula del titular.
          </p>
        </div>

        <div class="faq">
          <h4>¿Debo programar la recogida en mi casa?</h4>
          <p>
            No es necesario, puedes dejar los equipos en portería o programar en otro lugar.
          </p>
        </div>

        <div class="faq">
          <h4>¿Pueden cobrar equipos dañados?</h4>
          <p>
            Sí, como cliente eres responsable del cuidado de los equipos.
          </p>
        </div>

      </div>

      <!-- IMPORTANTE -->
      <div class="legal-card important">
        <h3>¡Importante!</h3>
        <p>
          Recibirás un comprobante de devolución si programas recogida o una guía si envías por Inter Rapidísimo o Servientrega.
        </p>
      </div>

    </div>

  </section>

</template>

<style scoped>
/* Consolidado en src/assets/css/main.css: legal-hero, legal-content, legal-card, legal-list, links, faq, important y responsive legal. */
.legal-list li {
  margin-bottom: 10px;
}
</style>
