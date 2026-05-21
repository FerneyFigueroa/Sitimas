<script setup lang="ts">
</script>

<template>
  <section class="legal-page p-0 mb-5">

    <!-- HERO -->
    <div class="legal-hero text-center">
      <h1>Protección al Usuario 🛡️</h1>
      <p>Régimen de Protección de los Derechos de los Usuarios</p>
    </div>

    <div class="container legal-content">

      <!-- TEXTO -->
      <div class="legal-card">
        <p>
          Régimen de Protección de los Derechos de los Usuarios de Servicios de Comunicaciones.
        </p>

        <p>
          Por la cual se establece el Régimen de Protección de los Derechos de los Usuarios de Servicios de Comunicaciones.
        </p>
      </div>

      <!-- BOTÓN -->
      <div class="legal-action text-center">
        <a 
          href="https://colombiatic.mintic.gov.co/679/articles-62266_doc_norma.pdf" 
          target="_blank"
          class="btn-law"
        >
          📄 Resolución 51111 de 2071
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
  margin-top: 50px;
  max-width: 900px;
}

/* CARD */
.legal-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  line-height: 1.6;
  text-align: center;
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