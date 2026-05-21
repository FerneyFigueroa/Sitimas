<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>PQRS 📩</h1>
      <p>Atención de Peticiones, Quejas, Reclamos y Sugerencias</p>
    </div>

    <div class="container legal-content">

      <!-- RESPONSABLE -->
      <div class="legal-card">
        <h3>Responsable del seguimiento y control</h3>
        <p>
          La Coordinación de Servicio al Cliente es responsable de realizar el respectivo seguimiento a las PQRS de Siti Más.
        </p>
      </div>

      <!-- COMO PRESENTAR -->
      <div class="legal-card">
        <h3>¿Cómo presentarlas?</h3>
        <p>
          La empresa dispone de tres canales oficiales de atención para radicar las PQRS:
        </p>
      </div>

      <!-- CANALES -->
      <div class="legal-card channels">

        <!-- PRESENCIAL -->
        <div class="channel">
          <h4>📍 Canal Presencial</h4>
          <p>Lunes a viernes de 8:00 a.m. a 6:00 p.m.</p>
          <p>Sábado de 8:00 am a 1:00 pm.</p>
        </div>

        <!-- TELEFÓNICO -->
        <div class="channel">
          <h4>📞 Canal Telefónico</h4>
          <a href="tel:3104038984">310 403 8984</a>
        </div>

        <!-- CORREO -->
        <div class="channel">
          <h4>📧 Correo electrónico</h4>
          <a href="mailto:sac@sitimas.net">sac@sitimas.net</a>
        </div>

        <!-- DIRECCIÓN -->
        <div class="channel">
          <h4>🏢 Centro de experiencia Coworking</h4>
          <p>Cra 6E 13-50 piso 1 Portal de las Ferias</p>
        </div>

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
}

/* CANALES GRID */
.channels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  border: 2px solid #e5e7eb;
}

/* ITEM */
.channel {
  padding: 15px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}   

/* LINKS */
.channel a {
  display: block;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  margin-top: 5px;
}

.channel a:hover {
  color: #39ff14;
}

/* MOBILE */
@media (max-width: 768px) {
  .legal-content {
    padding: 0 15px;
  }

  .channels {
    grid-template-columns: 1fr;
  }
}

</style>