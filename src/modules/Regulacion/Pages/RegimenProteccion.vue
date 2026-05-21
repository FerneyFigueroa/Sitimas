<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0 mb-5">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Régimen de Suscriptores 📑</h1>
      <p>Protección de Derechos de los Usuarios de Telecomunicaciones</p>
    </div>

    <div class="container legal-content">

      <!-- TEXTO -->
      <div class="legal-card">
        <p>
          Régimen Protección Derechos de Suscriptores
        </p>

        <p>
          Régimen Protección Derechos de los Suscriptores y/o usuario de los Servicios de Telecomunicaciones.
        </p>
      </div>

      <!-- BOTÓN -->
      <div class="legal-action text-center">
        <a
          href="https://www.crcom.gov.co/sites/default/files/normatividad/00002258.pdf"
          target="_blank"
          class="btn-law"
        >
          📄 Resolución 2528 de 2009
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
  text-align: center;
  line-height: 1.6;
  font-size: 16px;
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