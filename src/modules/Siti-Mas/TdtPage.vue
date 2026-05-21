<script setup lang="ts">
</script>

<template>

  <section class="tdt-section">

    <div class="container">
      <div class="row align-items-center g-4">

        <!-- TEXTO -->
        <div class="col-lg-6">

          <h1 class="tdt-title">
            La señal TDT es <span>gratis</span>
          </h1>

          <p class="tdt-text mt-3">
            ¡Olvídate de las facturas! No hay afiliaciones, suscripciones o cuotas mensuales.
            Para conectarte a la señal solo debes contar con los equipos de recepción necesarios.
          </p>

          <a href="#" class="btn-tdt">
            Más información →
          </a>

        </div>

        <!-- IMAGEN -->
        <div class="col-lg-5 offset-lg-1">
          <div class="tdt-card">
            <img src="@/assets/img/ImagenesImax/TDT_Colombia.webp" alt="TDT Colombia">
          </div>
        </div>

      </div>
    </div>

  </section>

</template>

<style scoped>

/* SECCIÓN */
.tdt-section {
  background: #f8fafc;
  padding: 60px 0;
}

/* TITULO */
.tdt-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #111;
}

.tdt-title span {
  color: #2faa0a;
}

/* TEXTO */
.tdt-text {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 500px;
}

/* BOTÓN */
.btn-tdt {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  border-radius: 30px;
  border: 2px solid #2faa0a;
  color: #2faa0a;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-tdt:hover {
  background: #2faa0a;
  color: white;
}

/* CARD IMAGEN */
.tdt-card {
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  text-align: center;
}

.tdt-card img {
  width: 100%;
  max-width: 350px;
}

/* RESPONSIVE */
@media (max-width: 992px) {

  .tdt-title {
    font-size: 2.1rem;
    text-align: center;
  }

  .tdt-text {
    text-align: center;
    margin: auto;
  }

  .btn-tdt {
    display: block;
    margin: 20px auto;
    text-align: center;
  }

  .tdt-card {
    margin-top: 20px;
  }

}

</style>