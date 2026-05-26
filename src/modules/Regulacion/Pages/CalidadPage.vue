<script setup lang="ts">
</script>

<template>
    <section class="legal-page p-0">

        <!-- HERO -->
        <div class="legal-hero text-center">
            <h1>Calidad del Servicio 📶</h1>
            <p>
                ¿Cuándo procede la compensación por fallas en los servicios de telefonía e internet?
            </p>
        </div>

        <!-- CONTENIDO -->
        <div class="container legal-content">

            <!-- BLOQUE 1 -->
            <div class="legal-card">
                <p>
                    De acuerdo con lo previsto en la Resolución 5050 del 2016, el usuario de los servicios de
                    comunicaciones tiene derecho a recibirlos de manera continua, según la calidad establecida en el
                    contrato y la regulación vigente.
                </p>

                <p>
                    De acuerdo con lo previsto en la Resolución 5050 del 2016, el usuario de los servicios de
                    comunicaciones tiene derecho a recibirlos de manera continua, según la calidad establecida en el
                    contrato y la regulación vigente. En caso de existir fallas en el servicio que no permitan dicha
                    continuidad, el usuario debe ser compensado conforme a los criterios previstos en la norma.
                </p>
            </div>

            <!-- BLOQUE 2 -->
            <div class="legal-card">
                <p>
                    En el mismo sentido, el artículo 1.1.11.1 establece la compensación automática a favor del usuario
                    por falta de disponibilidad de los servicios de telefonía e internet, sin que esta medida lo limite
                    en su derecho a presentar en cualquier momento una petición, queja, reclamo o recurso.
                </p>

                <p>
                    En el mismo sentido, el artículo 1.1.11.1 establece la compensación automática a favor del usuario
                    por falta de disponibilidad de los servicios de telefonía e internet, sin que esta medida lo limite
                    en su derecho a presentar en cualquier momento una petición, queja, reclamo o recurso, a través de
                    los distintos medios de atención dispuestos, incluyendo la inconformidad con el tiempo que le haya
                    sido compensado. </p>
            </div>

            <!-- BLOQUE 3 -->
            <div class="legal-card">
                <p>
                    Ahora bien, frente a una indisponibilidad del servicio, debe observarse si se presentó por causas
                    imputables al operador.
                </p>

                <p>
                    Para redes unidireccionales se aplicará la compensación ante el reporte de dicha falta por parte del
                    usuario o mediante solicitud, mientras que para redes bidireccionales se aplicará la compensación de
                    manera automática sin que medie solicitud del usuario, según lo indicado por la Comisión de
                    Regulación de Comunicaciones.
                </p>
            </div>

            <!-- LISTA -->
            <div class="legal-card">
                <h3>Casos en los que aplica la compensación</h3>

                <ul class="legal-list">
                    <li>
                        <b>(i)</b> Desconexión o bloqueo del servicio por parte del operador, que impida su uso por más
                        de 2 horas y media, continuas o interrumpidas, dentro de un mismo mes.
                    </li>

                    <li>
                        <b>(ii)</b> Falta de disponibilidad del servicio cuyo restablecimiento supere las 48 horas desde
                        la detección de la interrupción, salvo fuerza mayor o caso fortuito.
                    </li>

                    <li>
                        <b>(iii)</b> Fallas en el equipo terminal suministrado por el operador que impidan el uso del
                        servicio.
                    </li>

                    <li>
                        <b>(iv)</b> Las demás causales previstas en la Resolución CRC 5050 del 2016.
                    </li>
                </ul>
            </div>

        </div>

    </section>
</template>

<style scoped>
/* Consolidado en src/assets/css/main.css: legal-hero, legal-content, legal-card, legal-list y responsive legal. */
.legal-content {
    margin-top: 50px;
}

.legal-hero h1 {
    font-size: 32px;
    font-weight: 800;
}

.legal-hero p {
    max-width: 700px;
    margin: auto;
}

.legal-card h3 {
    color: #2faa0a;
    margin-bottom: 15px;
}

.legal-list {
    padding-left: 18px;
}

@media (max-width: 768px) {
    .legal-hero h1 {
        font-size: 24px;
    }
}
</style>
