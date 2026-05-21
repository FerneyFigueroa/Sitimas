<template>
  <section class="testimonials-section pt-1">

    <!-- TITULO -->
    <div class="container text-center mb-5">
      <h2 class="section-title">
        Lo que dicen nuestros clientes
      </h2>

      <p class="section-subtitle">
        Experiencias reales de usuarios que ya disfrutan de nuestro servicio
      </p>
    </div>

    <!-- TESTIMONIOS -->
    <div class="container">

      <div
        class="row g-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <!-- TESTIMONIO 1 -->
        <div class="col-lg-4 col-md-6">

          <div class="testimonial-card">

            <!-- ESTRELLAS -->
            <div class="stars">
              ★★★★★
            </div>

            <!-- TEXTO -->
            <p class="testimonial-text">
              “Excelente servicio, la conexión es estable.
              Totalmente recomendado.”
            </p>

            <!-- USUARIO -->
            <div class="testimonial-user">

              <div class="user-avatar">
                JP
              </div>

              <div>
                <h6>Juan Pérez</h6>
                <span>Cliente Hogar</span>
              </div>

            </div>

          </div>

        </div>

        <!-- TESTIMONIO 2 -->
        <div class="col-lg-4 col-md-6">

          <div class="testimonial-card featured">

            <!-- ESTRELLAS -->
            <div class="stars">
              ★★★★★
            </div>

            <!-- TEXTO -->
            <p class="testimonial-text">
              “La velocidad es muy buena y el soporte responde rápido.
              Perfecto para mi negocio.”
            </p>

            <!-- USUARIO -->
            <div class="testimonial-user">

              <div class="user-avatar">
                LG
              </div>

              <div>
                <h6>Laura Gómez</h6>
                <span>Cliente Empresarial</span>
              </div>

            </div>

          </div>

        </div>

        <!-- TESTIMONIO 3 -->
        <div class="col-lg-4 col-md-6">

          <div class="testimonial-card">

            <!-- ESTRELLAS -->
            <div class="stars">
              ★★★★★
            </div>

            <!-- TEXTO -->
            <p class="testimonial-text">
              “Antes no tenía internet estable, ahora todo funciona perfecto.
              Muy buen servicio.”
            </p>

            <!-- USUARIO -->
            <div class="testimonial-user">

              <div class="user-avatar">
                CR
              </div>

              <div>
                <h6>Carlos Ruiz</h6>
                <span>Zona Rural</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>



<script setup>
</script>

<style scoped>

/* 🌎 SECCIÓN */
.testimonials-section {
  background:
    linear-gradient(180deg, #f8f9fa, #ffffff);

  padding: 90px 0;
}

/* 🧠 TITULO */
.section-title {
  font-size: 40px;
  font-weight: 800;
  color: #111;
}

.section-subtitle {
  color: #6c757d;
  max-width: 550px;
  margin: auto;
}

/* 💎 CARD */
.testimonial-card {
  background: rgba(255,255,255,0.92);

  border-radius: 24px;

  padding: 32px;

  position: relative;

  transition: all 0.4s ease;

  backdrop-filter: blur(10px);

  box-shadow:
    0 15px 40px rgba(0,0,0,0.08);

  overflow: hidden;

  height: 100%;
}

/* 🔥 HOVER */
.testimonial-card:hover {
  transform: translateY(-12px);

  box-shadow:
    0 25px 70px rgba(0,0,0,0.12),
    0 0 0 2px rgba(57,255,20,0.12);
}

/* 💚 LINEA */
.testimonial-card::before {
  content: "";

  position: absolute;

  top: 24px;
  left: 0;

  width: 4px;
  height: 55px;

  background: #39ff14;

  border-radius: 10px;
}

/* ⭐ ESTRELLAS */
.stars {
  color: #ffc107;

  margin-bottom: 15px;

  font-size: 18px;

  letter-spacing: 2px;
}

/* 💬 TEXTO */
.testimonial-text {
  font-size: 15px;

  color: #444;

  line-height: 1.8;

  margin-bottom: 25px;

  font-style: italic;
}

/* 👤 USUARIO */
.testimonial-user {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* 🔥 AVATAR */
.user-avatar {
  width: 58px;
  height: 58px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #39ff14,
    #2faa0a
  );

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  font-weight: 800;

  font-size: 18px;

  letter-spacing: 1px;

  box-shadow:
    0 8px 20px rgba(57,255,20,0.25);

  flex-shrink: 0;
}

/* 📝 INFO */
.testimonial-user h6 {
  margin: 0;

  font-weight: 700;

  color: #111;
}

.testimonial-user span {
  font-size: 13px;

  color: #777;
}

/* 💥 DESTACADA */
.featured {
  transform: scale(1.03);
}

/* MOBILE */
@media (max-width: 768px) {

  .testimonials-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;
  }

  .testimonial-card {
    padding: 26px;
  }

  .testimonial-text {
    font-size: 14px;
  }

  .user-avatar {
    width: 52px;
    height: 52px;

    font-size: 16px;
  }
}
</style>