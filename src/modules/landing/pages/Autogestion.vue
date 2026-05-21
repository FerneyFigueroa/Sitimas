<script setup>
const servicios = [
    {
        titulo: 'Paga tu Factura',
        descripcion: 'Realiza el pago de tu servicio de forma rápida y segura.',
        icono: 'bi-credit-card',
        target: "_blank",
        link: 'https://pagos.onepay.la/sitimas',
    },
    {
        titulo: 'Oficina Virtual',
        descripcion: 'Consulta tu información y administra tu cuenta.',
        icono: 'bi-person-workspace',
        target: "_blank",
        link: 'https://wisphub.app/panel/'
    },
    {
        titulo: 'Portal Cobrador',
        descripcion: 'Accede al portal de recaudo y gestión de pagos.',
        icono: 'bi-cash-stack',
        target: "_blank",
        link: 'https://wisphub.app/panel/'
    },
    {
        titulo: 'Test de Velocidad',
        descripcion: 'Verifica la velocidad y estabilidad de tu conexión.',
        icono: 'bi-speedometer2',
        target: "_blank",
        link: 'https://fast.com/es/'
    }
]
</script>

<template>
    <section class="autogestion section" data-aos="zoom-in-up">

        <!-- TITULO -->
        <div class="container text-center mb-5">
            <h2>Autogestión</h2>

            <p>
                Realiza todas tus consultas de forma fácil, rápida y segura.
            </p>
        </div>

        <!-- CARDS -->
        <div class="container">
            <div class="row g-4">

                <div v-for="item in servicios" :key="item.titulo" class="col-lg-3 col-md-6">
                    <a :href="item.link" :target="item.target" rel="noopener noreferrer" class="service-card">

                        <!-- ICONO -->
                        <div class="icon-box">
                            <i class="bi" :class="item.icono"></i>
                        </div>

                        <!-- TITULO -->
                        <h4>{{ item.titulo }}</h4>

                        <!-- TEXTO -->
                        <p>
                            {{ item.descripcion }}
                        </p>

                        <!-- BOTON -->
                        <div class="action-link">
                            Ingresar
                            <i class="bi bi-arrow-right"></i>
                        </div>

                    </a>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped>
.autogestion {
    background: #f8f9fa;
    padding: 70px 0;
}

/* CARD */
.service-card {
    background: white;
    border-radius: 24px;
    padding: 35px 25px;
    text-decoration: none;
    display: block;
    height: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
}

/* HOVER */
.service-card:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, #2faa0a, #39ff14);
    color: white;
}

/* ICONO */
.icon-box {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: rgba(57, 255, 20, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    color: #2faa0a;
    margin-bottom: 25px;
    transition: 0.3s;
}

.service-card:hover .icon-box {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

/* TITULO */
.service-card h4 {
    margin-bottom: 14px;
    font-weight: 700;
    color: #111;
    transition: 0.3s;
}

.service-card:hover h4 {
    color: white;
}

/* TEXTO */
.service-card p {
    color: #666;
    line-height: 1.7;
    font-size: 14px;
    transition: 0.3s;
}

.service-card:hover p {
    color: rgba(255, 255, 255, 0.9);
}

/* LINK */
.action-link {
    margin-top: 25px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #2faa0a;
    transition: 0.3s;
}

.service-card:hover .action-link {
    color: white;
    transform: translateX(5px);
}

/* MOBILE */
@media (max-width: 768px) {
    .autogestion {
        padding: 50px 0;
    }

    .service-card {
        padding: 28px 20px;
    }

    .icon-box {
        width: 70px;
        height: 70px;
        font-size: 28px;
    }
}
</style>