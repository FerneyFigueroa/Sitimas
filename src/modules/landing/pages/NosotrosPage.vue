<script setup>
import { ref, onMounted } from "vue";
import GoogleMaps from "./GoogleMaps.vue";
import TestimonialPage from "./TestimonialPage.vue";

const countClientes = ref(0);
const countAnios = ref(0);

onMounted(() => {
    animateValue(countClientes, 250, 1500);
    animateValue(countAnios, 15, 1200);
});

function animateValue(refVar, target, duration) {
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

    <main >

        <section class="hero-rural  " data-aos="fade-up">

            <div class="container ">
                <div class="row align-items-center g-4">

                    <!-- TEXTO -->
                    <div class="col-lg-6 text-white">

                        <h1 class="hero-title">
                            Conectando El Tambo <br>
                            Cauca con <span>Ruralidad</span>
                        </h1>

                        <p class="hero-text mt-3">
                            Somos una empresa de telecomunicaciones en El Tambo, Cauca,
                            especializada en servicios de internet para hogares y empresas.
                            Seguimos llevando conectividad = ruralidad.
                        </p>

                        <!-- STATS -->

                        <div class="hero-stats d-flex gap-5 mt-4">
                            <div>
                                <h3>{{ countClientes }}+</h3>
                                <p>Conectividad garantizada</p>
                            </div>

                            <div>
                                <h3>{{ countAnios }}</h3>
                                <p>Confiabilidad y calidad</p>
                            </div>
                        </div>

                    </div>

                    <!-- IMAGEN -->
                    <div class="col-lg-4 offset-lg-1">
                        <div class="hero-img">
                            <img src="@/assets/img/ImagenesImax/image10.webp" alt="Rural">
                        </div>
                    </div>

                </div>
            </div>

        </section>
    
        <GoogleMaps />
        <TestimonialPage />
        <br>
        <br>

    </main>



</template>

<style scoped>
/* ===== HERO ===== */
.hero-rural {
    position: relative;
    background: #f8fafc;
    padding: 30px 0;
    overflow: hidden;
}

/* EFECTO LUZ */
.hero-rural::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent);
}

/* TEXTO */
.hero-title {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #111;
}

.hero-title span {
    color: #2faa0a;
}

/* PÁRRAFO */
.hero-text {
    font-size: 1.05rem;
    color: #6b7280;
    max-width: 500px;
}

/* STATS */
.hero-stats h3 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 5px;
    color: #2faa0a;
}

.hero-stats p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0;
    color: #2faa0a;
}

/* BOTÓN */



/* IMAGEN */
.hero-img {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
    transform: perspective(1000px) rotateY(-5deg);
    transition: 0.4s;
    height: 430px;
    width: 370px;
 
    
   
 
}

.hero-img img {
    width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  
}

/* HOVER */
.hero-img:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
}

/* RESPONSIVE */
@media (max-width: 992px) {

    .hero-title {
        font-size: 2.2rem;
    }

    .hero-rural {
        padding: 80px 0;
        text-align: center;
    }

    .hero-stats {
        justify-content: center;
    }

    .hero-img {
        transform: none;
    }



}
</style>