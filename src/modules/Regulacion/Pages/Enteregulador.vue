<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0 mb-5">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Ente Regulador 🏛️</h1>
      <p>Organismos de control y regulación</p>
    </div>

    <div class="container legal-content">

      <!-- TEXTO -->
      <div class="legal-card">
        <p><b>Los prestadores de servicio de Telecomunicaciones:</b></p>

        <p>
          Los entes reguladores son organismos públicos que gozan de personalidad jurídica de derecho público interno y que poseen autonomía administrativa, financiera y técnica. Son organismos creados para el marco regulador y por lo tanto deberán regular y/o controlar aspectos jurídicos y técnicos, y atender las relaciones entre los usuarios y consumidores y las empresas privadas prestadoras de servicios públicos.
        </p>
      </div>

      <!-- BOTONES -->
      <div class="legal-card buttons-card">

        <a href="https://www.sic.gov.co" target="_blank" class="btn-entity">
          🏛️ SIC
        </a>

        <a href="https://www.crcom.gov.co" target="_blank" class="btn-entity">
          📡 CRC
        </a>

        <a href="https://www.mintic.gov.co" target="_blank" class="btn-entity">
          🌐 MinTIC
        </a>

        <a href="https://www.fiscalia.gov.co" target="_blank" class="btn-entity">
          ⚖️ Fiscalía
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

/* BOTONES CONTENEDOR */
.buttons-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

/* BOTONES */
.btn-entity {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-entity:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(47,170,10,0.4);
}

/* MOBILE */
@media (max-width: 768px) {
  .legal-content {
    padding: 0 15px;
  }

  .buttons-card {
    grid-template-columns: 1fr;
  }
}

</style>