
<script setup lang="ts">
import BrandsPage from './BrandsPage.vue';
const numero = '573104038984';

</script>

<template>
  <section class="servicios-section p-4"  data-aos="fade-up"> >

    <div class="container">

      <!-- TITULO -->
      <div class="text-center mb-5">
        <h2 class="title">Servicio de Internet</h2>
        <p class="subtitle">
          Conectividad rural confiable para hogares y empresas
        </p>
      </div>

      <!-- HOGAR -->
      <div class="row align-items-center servicio mb-5">

        <div class="col-md-6">
          <h3 class="servicio-title">Internet Rural Hogar</h3>
          <p class="servicio-text">
            Descubre nuestro servicio de internet hogar, planes y precios diseñados 
            para satisfacer todas tus necesidades de comunicación, entretenimiento y trabajo.
          </p>

          
           <a :href="`https://api.whatsapp.com/send/?phone=${numero}&text=${encodeURIComponent(`Hola, quiero información `)}`"
              target="_blank" rel="noopener noreferrer" class="btn-servicio">
              <i class="bi bi-whatsapp"></i>
              Solicita Instalación 
            </a>
        </div>

        <div class="col-md-6 text-center">
          <img src="../../../assets/img/ImagenesImax/PimesHogar.webp" class="servicio-img" />
        </div>

      </div>

      <!-- PYMES -->
      <div class="row align-items-center servicio flex-md-row-reverse">

        <div class="col-md-6">
          <h3 class="servicio-title">Internet Rural Pymes</h3>
          <p class="servicio-text">
            Conoce nuestro servicio de Internet Empresarial, ya sea banda ancha o dedicado, 
            y mejora tu experiencia de telecomunicaciones con mayor estabilidad y velocidad.
          </p>

          <a :href="`https://api.whatsapp.com/send/?phone=${numero}&text=${encodeURIComponent(`Hola, quiero información `)}`"
              target="_blank" rel="noopener noreferrer" class="btn-servicio">
              <i class="bi bi-whatsapp"></i>
              Solicita Instalación 
            </a>
        </div>

        <div class="col-md-6 text-center">
          <img src="../../../assets/img/ImagenesImax/PymerRural.webp" class="servicio-img" />
        </div>

      </div>

    </div>

    <BrandsPage />

  </section>
</template>

<style scoped>

.servicios-section {
  background: #f8fafc;
  padding: 80px 20px;
}

/* TITULO */
.title {
  font-size: 2.5rem;
  font-weight: 800;
}

.subtitle {
  color: #6b7280;
}

/* BLOQUES */
.servicio {
  margin-bottom: 60px;
}

/* TEXTO */
.servicio-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
}

.servicio-text {
  color: #4b5563;
  margin-top: 10px;
  margin-bottom: 20px;
}

/* BOTON */
.btn-servicio {
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-servicio:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(34,197,94,0.4);
}

/* IMAGEN */
.servicio-img {
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .servicio {
    text-align: left;
  }

  .servicio-img {
    margin-top: 20px;
  }
  
}

</style>