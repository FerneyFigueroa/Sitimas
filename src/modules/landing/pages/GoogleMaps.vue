<template>

  <section class="location-section py-5">

    <div class="container">

      <div class="row align-items-center g-5 flex-lg-row-reverse">

        <!-- MAPA -->
        <div class="col-lg-7">

          <div class="map-box">

            <iframe
              src="https://maps.google.com/maps?q=El%20Tambo%20Cauca&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>

          </div>

        </div>

        <!-- TEXTO -->
        <div class="col-lg-5">

          <span class="location-badge">
            Centro de Atención
          </span>

          <h2 class="location-title mb-3">
            El Tambo, Cauca
          </h2>

          <p class="location-text mb-4">

            Estamos disponibles para brindarte atención personalizada,
            soporte técnico y acompañamiento en todos nuestros servicios
            de internet y conectividad rural.

          </p>

          <div class="location-info">

            <div class="info-card">

              <div class="info-icon">
                <i class="bi bi-geo-alt"></i>
              </div>

              <div>
                <strong>Ubicación</strong>

                <p>
                  El Tambo, Cauca
                </p>
              </div>

            </div>

            <div class="info-card mt-3">

              <div class="info-icon">
                <i class="bi bi-clock"></i>
              </div>

              <div>

                <strong>Horario de Atención</strong>

                <p>
                  Lunes a Viernes: 8:00 am a 5:00 pm.<br>
                  Sábados: 8:00 am a 12:00 pm.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<style scoped>

/* SECTION */
.location-section {

  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 100%
    );
}

/* BADGE */
.location-badge {

  background: rgba(55,156,12,0.10);

  color: #379C0C;

  padding: 10px 18px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 1px;

  display: inline-block;

  margin-bottom: 20px;
}

/* TITULO */
.location-title {

  font-size: 2.8rem;

  font-weight: 800;

  color: #111827;

  position: relative;
}

.location-title::after {

  content: "";

  width: 70px;

  height: 4px;

  background: #22c55e;

  display: block;

  margin-top: 12px;

  border-radius: 10px;
}

/* TEXTO */
.location-text {

  color: #6b7280;

  font-size: 1rem;

  line-height: 1.8;

  max-width: 500px;
}

/* INFO */
.location-info {

  margin-top: 30px;
}

.info-card {

  display: flex;

  gap: 16px;

  background: white;

  border-radius: 20px;

  padding: 20px;

  border: 1px solid #eef2f7;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.05);

  transition: all 0.3s ease;
}

.info-card:hover {

  transform: translateY(-5px);

  box-shadow:
    0 20px 40px rgba(0,0,0,0.08);
}

/* ICONOS */
.info-icon {

  width: 55px;

  height: 55px;

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      rgba(55,156,12,0.15),
      rgba(55,156,12,0.05)
    );

  display: flex;

  align-items: center;

  justify-content: center;

  color: #379C0C;

  font-size: 22px;

  flex-shrink: 0;
}

.info-card strong {

  display: block;

  margin-bottom: 6px;

  color: #111827;

  font-size: 16px;
}

.info-card p {

  margin: 0;

  color: #6b7280;

  line-height: 1.7;

  font-size: 14px;
}

/* MAPA */
.map-box {

  border-radius: 28px;

  overflow: hidden;

  height: 420px;

  border: 1px solid #eef2f7;

  box-shadow:
    0 20px 50px rgba(0,0,0,0.10);

  transition: all 0.35s ease;
}

.map-box iframe {

  width: 100%;

  height: 100%;

  border: 0;
}

/* HOVER */
.map-box:hover {

  transform: translateY(-6px);

  box-shadow:
    0 30px 70px rgba(0,0,0,0.15);
}

/* RESPONSIVE */
@media (max-width: 992px) {

  .location-section {

    text-align: left;
  }

  .location-title {

    font-size: 2.2rem;
  }

  .map-box {

    height: 320px;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .location-section {

    padding: 60px 0;
  }

  .location-title {

    font-size: 2rem;
  }

  .info-card {

    padding: 18px;
  }

  .map-box {

    height: 280px;
  }
}

</style>