
<script setup>
const numero = '573104038984'

const planes = [
  {
    nombre: 'Plan Básico',
    velocidad: '7 Mbps',
    subida: '3.5 Mbps',
    precio: '$50.000',
    icono: 'bi-wifi'
  },
  {
    nombre: 'Plan Esencial',
    velocidad: '10 Mbps',
    subida: '5 Mbps',
    precio: '$65.000',
    icono: 'bi-lightning-charge'
  },
  {
    nombre: 'Plan Impulso',
    velocidad: '15 Mbps',
    subida: '7.5 Mbps',
    precio: '$85.000',
    icono: 'bi-rocket-takeoff'
  },
  {
    nombre: 'Plan Total',
    velocidad: '20 Mbps',
    subida: '10 Mbps',
    precio: '$100.000',
    icono: 'bi-stars'
  }
]
</script>

<template>
  <section  class="plans-section pt-0" data-aos="fade-up">

    <div  id="planes" class="container text-center mb-5">

      <h2 class="section-title pb-1">
        Nuestros Planes
      </h2>

      <p class="section-subtitle">
        Todos nuestros planes cuentan con una relación de velocidad donde la subida es el 50% de la bajada, garantizando una excelente experiencia para videollamadas, envío de tareas y carga de archivos a la nube.
      </p>

    </div>

    <div class="container">

      <div class="row g-4">

        <div
          v-for="plan in planes"
          :key="plan.nombre"
          class="col-lg-3 col-md-6"
        >

          <div class="plan-card">

            <!-- TOP -->
            <div>

              <div class="top-content">

                <div class="icon-box">
                  <i class="bi" :class="plan.icono"></i>
                </div>

                <div>
                  <h3>{{ plan.nombre }}</h3>
                  <!-- <span class="mini-text">
                    Internet Residencial
                  </span> -->
                </div>

              </div>

              <!-- PRECIO -->
              <div class="price-wrapper">

                <span class="price-small">
                  desde
                </span>

                <div class="price">
                  {{ plan.precio }}
                </div>

                <span class="monthly">
                  pago mensual
                </span>

              </div>

              <!-- SPEED -->
              <div class="speed-grid">

                <div class="speed-box">
                  <span>Bajada</span>
                  <strong>{{ plan.velocidad }}</strong>
                </div>

                <div class="speed-box">
                  <span>Subida</span>
                  <strong>{{ plan.subida }}</strong>
                </div>

              </div>

              <!-- FEATURES -->
              <ul class="features">

                <li>
                  <i class="bi bi-wifi"></i>
                  Navegación estable
                </li>

                <li>
                  <i class="bi bi-headset"></i>
                  Soporte técnico local
                </li>

                <li>
                  <i class="bi bi-infinity"></i>
                  Sin límites de consumo
                </li>

              </ul>

            </div>

            <!-- BOTON -->
            <a
              :href="`https://api.whatsapp.com/send/?phone=${numero}&text=${encodeURIComponent(`Hola, quiero información del ${plan.nombre}`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-plan"
            >
              <i class="bi bi-whatsapp"></i>
              Solicitar plan
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

/* SECCION */
.plans-section {
  background: #f5f7fb;
  padding: 80px 0;

}

/* TITULOS */
.section-title {
  font-size: 42px;
  font-weight: 800;
  color: #271116;
  

}

.section-subtitle {
  color: #6b7280;
  max-width: 650px;
  margin: auto;
 
}

/* CARD */
.plan-card {

  /* 🔥 CAMBIA ESTE VALOR PARA HACER
     LAS TARJETAS MAS GRANDES O PEQUEÑAS */
  padding: 24px;

  background: white;

  border-radius: 20px;

  border: 1px solid #b5b6b9;

  box-shadow:
    0 10px 25px rgba(0,0,0,0.04);

  transition: all 0.3s ease;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.plan-card:hover {
  transform: translateY(-6px);

  border-color: rgba(55,156,12,0.35);

  box-shadow:
    0 18px 40px rgba(0,0,0,0.08);
}

/* TOP */
.top-content {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 22px;
}

/* ICON */
.icon-box {
  width: 58px;
  height: 58px;

  border-radius: 16px;

  background: rgba(55,156,12,0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #379C0C;

  font-size: 24px;

  flex-shrink: 0;

  transition: 0.3s;
}

.plan-card:hover .icon-box {
  background: #379C0C;
  color: white;
}

/* TITULO */
.plan-card h3 {
  margin: 0;
  
  font-size: 24px;

  font-weight: 800;

  color: #111827;
}

.mini-text {
  font-size: 13px;
  color: #6b7280;
}

/* PRECIO */
.price-wrapper {
  margin-bottom: 22px;
}

.price-small {
  text-transform: uppercase;

  font-size: 11px;

  letter-spacing: 1px;

  color: #9ca3af;
}

.price {

  /* 🔥 CAMBIA ESTE VALOR PARA MODIFICAR
     EL TAMAÑO DEL PRECIO */
  font-size: 23px;

  font-weight: 650;

  color: #111827;

  line-height: 1.1;

  margin: 4px 0;
  font-family: 'Roboto', sans-serif;
}

.monthly {
  font-size: 13px;
  color: #6b7280;
}

/* SPEED */
.speed-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 12px;

  margin-bottom: 22px;
}

.speed-box {
  background: #f9fafb;

  border-radius: 14px;

  padding: 14px;

  border: 1px solid #eef2f7;

  text-align: center;
}

.speed-box span {
  display: block;

  font-size: 12px;

  color: #6b7280;

  margin-bottom: 4px;
}

.speed-box strong {
  color: #111827;

  font-size: 16px;
}

/* FEATURES */
.features {
  list-style: none;

  padding: 0;

  margin-bottom: 24px;

  flex-grow: 1;
  
}

.features li {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 12px;

  color: #4b5563;

  font-size: 14px;
}

.features i {
  color: #379C0C;
}

/* BOTON */
.btn-plan {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  text-decoration: none;

  background: linear-gradient(
    135deg,
    #25D366,
    #1ebe5d
  );

  color: white;

  padding: 12px;

  border-radius: 14px;

  font-weight: 700;

  transition: all 0.3s ease;
}

.btn-plan:hover {
  transform: translateY(-2px);

  background: linear-gradient(
    135deg,
    #1ebe5d,
    #17a851
  );

  color: white;
}


/* MOBILE */
@media (max-width: 768px) {
  

  .plans-section {
    padding: 55px 0;
    
  }

  .section-title {
    
    font-size: 34px;
  }

  .plan-card {

    /* 🔥 TAMAÑO TARJETA MOBILE */
    padding: 20px;
    
  }

  .price {
    font-size: 30px;
  }

  .speed-grid {
    grid-template-columns: 1fr;
  }
  .top-content {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 14px;

  margin-bottom: 22px;

  text-align: center;
}
 
    
  

}

</style>
