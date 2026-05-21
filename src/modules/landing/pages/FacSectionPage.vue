<template>
  <!-- Faq Section -->
  <section class="rural-section  " data-aos="fade-up">
    <div class="container ">
      <div class="row align-items-center g-5">

        <!-- TEXTO -->
        <div class="col-lg-5">
          <h2 class="title">
              La mejor conexión para <br>
            <span>El Tambo, Cauca</span>
          </h2>

          <p class="subtitle">
            Tecnología, velocidad y cobertura confiable para hogares y empresas
            que necesitan estar conectados todos los días.
          </p>

          <div class="d-flex gap-3 mt-4">
            <a href="#planes" class="btn btn-main">Ver planes</a>
            <a href="#contacto" class="btn btn-outline">Contáctanos</a>
          </div>
        </div>

        <!-- IMÁGENES -->
        <div class="col-lg-7">
          <div class="image-grid">

            <div class="img-box big">
              <img src="../../../assets/img/ImagenesImax/image12.webp" alt="">
            </div>

            <div class="img-box small">
              <img src="../../../assets/img/ImagenesImax/image6.webp" alt="">
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<style scoped>
.rural-section {
  background: #f8fafc;
  padding: 0px 0 80px;
}

/* TITULO */
.title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111;
}

.title span {
  color: #2faa0a;
}

/* TEXTO */
.subtitle {
  color: #6b7280;
  margin-top: 15px;
  font-size: 1.05rem;
}

/* BOTONES */
.btn-main {
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  transition: 0.3s;
}

.btn-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(47, 170, 10, 0.3);
}

.btn-outline {
  border: 2px solid #2faa0a;
  color: #2faa0a;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
}

.btn-outline:hover {
  background: #2faa0a;
  color: white;
}

/* GRID IMAGENES */
.image-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

/* IMAGENES */
.img-box {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.5s;
}

.img-box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
}

/* EFECTO PRO */
.img-box:hover img {
  transform: scale(1.1);
}

/* TAMAÑOS */
.big {
  height: 390px
}

.small {
  height: 330px
}

/* MOBILE */
@media (max-width: 992px) {

  .image-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .big {
    height: 470px;
    /* 👈 más grande */
  }

  .small {
    height: 360px;
    /* 👈 más pequeña */
  }

}
</style>