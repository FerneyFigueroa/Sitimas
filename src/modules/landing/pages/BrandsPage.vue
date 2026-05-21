<template>
  <div class="container my-5" >
    <div class="logo-slider">
      <div class="logo-track">
        <img src="../../../assets/img/ImagenesImax/Ubiquiti_Logo_Horizontal.webp" alt="Ubiquiti" />
        <img src="../../../assets/img/ImagenesImax/MikroTik_logo.webp" alt="MikroTik" />
        <img src="../../../assets/img/ImagenesImax/tenda-logo.webp" alt="Tenda" />
        <img src="../../../assets/img/ImagenesImax/Cambium2.webp" alt="Cambium" />
        <img src="../../../assets/img/ImagenesImax/TPLINK.webp" alt="TP-Link" />
        <img src="../../../assets/img/ImagenesImax/mimosa_logo.webp" alt="Mimosa" />
       
        

        <img src="../../../assets/img/ImagenesImax/Ubiquiti_Logo_Horizontal.webp" alt="Ubiquiti" />
        <img src="../../../assets/img/ImagenesImax/MikroTik_logo.webp" alt="MikroTik" />
        <img src="../../../assets/img/ImagenesImax/tenda-logo.webp" alt="Tenda" />
        <img src="../../../assets/img/ImagenesImax/Cambium2.webp" alt="Cambium" />
        <img src="../../../assets/img/ImagenesImax/TPLINK.webp" alt="TP-Link" />
        <img src="../../../assets/img/ImagenesImax/mimosa_logo.webp" alt="Mimosa" />
       
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-slider {
  overflow: hidden;
  position: relative;
  width: 100%;
}

/* DIFUMINADO LATERAL */
.logo-slider::before,
.logo-slider::after {
  content: "";
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.logo-slider::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}

.logo-slider::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}

/* TRACK */
.logo-track {
  display: flex;
  align-items: center;
  gap: 50px;
  width: max-content;

  /* ANIMACION */
  animation: scroll 18s linear infinite;
  animation-delay: 0s;

  /* OPTIMIZACION */
  will-change: transform;
  transform: translate3d(0, 0, 0);

  backface-visibility: hidden;
  perspective: 1000px;
}

/* LOGOS */
.logo-track img {
  height: 50px;
  object-fit: contain;

  transition: transform 0.5s ease;

  backface-visibility: hidden;
  transform: translateZ(0);
}

/* HOVER */
.logo-track img:hover {
  transform: scale(1.1);
}

/* ANIMACION */
@keyframes scroll {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .logo-track {
    gap: 30px;
    animation-duration: 18s;
  }

  .logo-track img {
    height: 38px;
  }

  .logo-slider::before,
  .logo-slider::after {
    width: 40px;
  }
}
</style>
