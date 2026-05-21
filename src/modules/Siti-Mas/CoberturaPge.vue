<script setup lang="ts">

const numero = "573104038984"
const mensaje = "Hola, quiero instalar internet"

const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

</script>

<template>

  <main>

    <section class="hero-rural">

      <div class="container">
        <div class="row align-items-center g-4">

          <!-- TEXTO -->
          <div class="col-lg-6">

            <h1 class="hero-title">
              Cobertura en <span>El Tambo Cauca</span>
            </h1>

            <p class="hero-text mt-3">
              La cobertura en Radio Enlace Rural abarca aproximadamente hasta 5 kilómetros,
              garantizando un 98% de señal. Nuestra infraestructura está basada en equipos
              Ubiquiti, Mimosa, Cambium, TpLink y ALGCom.
            </p>

            <!-- BOTÓN FUNCIONAL -->
            <a
              :href="urlWhatsApp"
              target="_blank"
              class="btn-servicio"
            >
              Solicita Instalación →
            </a>

          </div>

          <!-- IMAGEN -->
          <div class="col-lg-5 offset-lg-1">
            <div class="hero-img">
              <img src="@/assets/img/ImagenesImax/image10.webp" alt="Cobertura rural">
            </div>
          </div>

        </div>
      </div>

    </section>

  </main>

</template>

<style scoped>

/* ===== HERO ===== */
.hero-rural {
  position: relative;
  background: #f8fafc;
  padding: 60px 0;
  overflow: hidden;
}

/* EFECTO LUZ (NO BLOQUEA CLICKS) */
.hero-rural::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent);
  pointer-events: none; /* 🔥 IMPORTANTE */
}

/* TEXTO */
.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111;
}

.hero-title span {
  color: #2faa0a;
}

/* TEXTO */
.hero-text {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 500px;
}

/* BOTÓN */
.btn-servicio {
  display: inline-block;
  margin-top: 20px;
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  padding: 12px 28px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-servicio:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34,197,94,0.4);
}

/* IMAGEN */
.hero-img {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0,0,0,0.2);
  height: 420px;
  transition: 0.4s;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* HOVER */
.hero-img:hover {
  transform: scale(1.02);
}

/* RESPONSIVE */
@media (max-width: 992px) {

  .hero-title {
    font-size: 2.2rem;
    text-align: center;
  }

  .hero-text {
    text-align: center;
    margin: auto;
  }

  .btn-servicio {
    display: block;
    margin: 20px auto;
    text-align: center;
  }

  .hero-img {
    height: 400px;
    margin-top: 20px;
  }

}

</style>