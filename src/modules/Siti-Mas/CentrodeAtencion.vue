<script setup lang="ts">
import { ref, onMounted } from "vue";

// animaciones
const clientes = ref(0);
const rating = ref(0);

onMounted(() => {
  animate(clientes, 300, 1200); // 👈 puedes cambiar
  animate(rating, 5, 800);
});

function animate(refVar: any, target: number, duration: number) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      refVar.value = target;
      clearInterval(timer);
    } else {
      refVar.value = Math.floor(start);
    }
  }, 16);
}
</script>

<template>

  <section class="hero-atencion mt-4">

    <div class="container">
      <div class="row align-items-center g-4">

        <!-- TEXTO -->
        <div class="col-lg-6">

          <h1 class="hero-title">
            Centro de <span>Atención</span> <br>
            El Tambo Cauca
          </h1>

          <p class="hero-text mt-3">
            Nuestro centro de experiencia y coworking está diseñado para brindarte atención personalizada,
            soporte técnico y acompañamiento en todos nuestros servicios de telecomunicaciones.
          </p>

          <!-- INFO -->
          <div class="info-list mt-4">
            
            <p><i class="bi bi-reception-4"></i> Siti Más Telecomunicaciones</p>
           
          </div>

          <!-- STATS -->
          <div class="hero-stats d-flex gap-5 mt-4">

            <div>
              <h3>{{ clientes }}+</h3>
              <p>Clientes atendidos</p>
            </div>

            <div>
              <h3>{{ rating }} ⭐⭐⭐⭐⭐</h3>
              <p>Calificación promedio</p>
            </div>

          </div>

        </div>

        <!-- IMAGEN -->
        <div class="col-lg-4 offset-lg-2">
          <div class="hero-img">
            <img src="@/assets/img/ImagenesImax/imagen9.webp" alt="Centro Atención">
          </div>
        </div>

      </div>
    </div>

  </section>

</template>

<style scoped>

/* HERO */
.hero-atencion {
  background: #f8fafc;
  padding: 40px 0;
}

/* TITULO */
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

/* LISTA */
.info-list p {
  margin-bottom: 8px;
  font-weight: 500;
}

/* STATS */
.hero-stats h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #2faa0a;
}

.hero-stats p {
  font-size: 0.9rem;
  color: #6b7280;
}

/* IMAGEN */
.hero-img {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0,0,0,0.2);
  height: 400px;
  width: 400px;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* RESPONSIVE */
@media (max-width: 992px) {

  .hero-title {
    font-size: 2.2rem;
    text-align: left;
  }

  .hero-text {
    text-align: left;
    margin: auto;
  }

  .hero-stats {
    justify-content: center;
  }

  .info-list {
    text-align: left;
  }

  .hero-img {
    height: 400px;
    margin-top: 20px;
  }

}

</style>