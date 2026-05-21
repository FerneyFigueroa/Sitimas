<script setup lang="ts">
</script>

<template>
  <section class="onepay-page p-0" >

    <!-- HERO -->
    <div class="hero text-center">
      <h1>Paga tu factura Siti Más con OnePay ⚡</h1>
      <p>Pagos rápidos, seguros y sin filas desde cualquier lugar.</p>
      <a href="https://pagos.onepay.la/sitimas" target="_blank" class="btn-main">
          💳 Pagar ahora
        </a>
    </div>
     

    <!-- ====== BLOQUE 1 ====== -->
    <div class="onepay-section">
      <div class="onepay-row">

        <!-- TEXTO -->
        <div class="info-box">
          <h4>¿Cuáles son los beneficios de esta vinculación con NEQUI?</h4>

          <ul>
            <li><b>Pago en un solo clic:</b> recordatorios automáticos y pago fácil.</li>
            <li><b>Adiós a los soportes:</b> todo el proceso es automático.</li>
            <li><b>Registro automático:</b> validación inmediata.</li>
            <li><b>Activación del servicio:</b> activación automática.</li>
            <li><b>Tiempo para ti:</b> solo 30 segundos.</li>
          </ul>

          <p class="nota">
            Nota: consulta la línea de notificaciones de OnePay.
          </p>
        </div>

        <!-- VIDEO -->
        <div class="video-side">
          <iframe src="https://player.vimeo.com/video/1180016539" allowfullscreen></iframe>
          <!-- <iframe src="https://player.vimeo.com/video/1180016159" allowfullscreen></iframe> -->
        </div>

      </div>
    </div>

    <!-- ====== BLOQUE 2 ====== -->
    <div class="onepay-section">
      <div class="onepay-row reverse">

        <div class="info-box">
          <h4>¿Cuáles son los beneficios de Bre-B a Nequi?</h4>

          <ul>
            <li><b>No se vincula Nequi:</b> llave temporal de 15 minutos.</li>
            <li><b>Adiós a los soportes:</b> proceso automático.</li>
            <li><b>Registro automático:</b> validación inmediata.</li>
            <li><b>Activación automática:</b> servicio activo.</li>
            <li><b>Proceso rápido:</b> solo 30 segundos.</li>
          </ul>
        </div>

        <div class="video-side">
          <iframe src="https://player.vimeo.com/video/1180015200" allowfullscreen></iframe>
        </div>

      </div>
    </div>

    <!-- ====== BLOQUE 3 ====== -->
    <div class="onepay-section">
      <div class="onepay-row">

        <div class="info-box">
          <h4>¿Cuáles son los beneficios de Bre-B a Bancolombia?</h4>

          <ul>
            <li><b>No se vincula tu cuenta:</b> llave temporal de 15 minutos.</li>
            <li><b>Adiós a los soportes:</b> proceso automático.</li>
            <li><b>Registro automático:</b> validación inmediata.</li>
            <li><b>Activación automática:</b> servicio activo.</li>
            <li><b>Tiempo para ti:</b> solo 30 segundos.</li>
          </ul>

          <p class="nota">
            Nota: funciona para cualquier banco.
          </p>
        </div>

        <div class="video-side">
          <iframe src="https://player.vimeo.com/video/1180016539" allowfullscreen></iframe>
        </div>

      </div>
    </div>

    <!-- ====== BLOQUE 4 ====== -->
    <div class="onepay-section">
      <div class="onepay-row reverse">

        <div class="info-box">
          <h4>¿Cuáles son los beneficios de Link Pago?</h4>

          <ul>
            <li><b>Flexibilidad:</b> puedes pagar o vincular.</li>
            <li><b>Adiós a los soportes:</b> proceso automático.</li>
            <li><b>Registro automático:</b> validación inmediata.</li>
            <li><b>Activación automática:</b> servicio activo.</li>
            <li><b>Tiempo para ti:</b> solo 30 segundos.</li>
          </ul>

          <p class="nota">
            Portal:
            
            <a href="https://pagos.onepay.la/sitimas" target="_blank">
            https://pagos.onepay.la/sitimas
        </a>
          </p>
        </div>

        <div class="video-side">
          <iframe src="https://player.vimeo.com/video/1180016159" allowfullscreen></iframe>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.btn-main {
  background: white;
  color: #2faa0a;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 700;
  display: inline-block;
}

/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, #2faa0a, #39ff14);
  color: white;
  padding: 60px 20px;
}

/* ===== CONTENEDOR ===== */
.onepay-section {
  max-width: 1100px;
  margin: 80px auto;
}

/* ===== FILA ===== */
.onepay-row {
  display: flex;
  align-items: center;
  gap: 40px;
}

.reverse {
  flex-direction: row-reverse;
}

/* ===== CAJA TEXTO ===== */
.info-box {
  flex: 1;
  background: #f9fafb;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.info-box h4 {
  color: #2563eb;
  margin-bottom: 15px;
}

.info-box ul {
  padding-left: 18px;
}

.info-box li {
  margin-bottom: 10px;
  color: #374151;
}

.nota {
  font-size: 13px;
  color: #2563eb;
  margin-top: 15px;
}

/* ===== VIDEO ===== */
.video-side {
  flex: 1;
  display: flex;
  justify-content: center;
  border:  0.1px #e5e7eb;
}

.video-side iframe {
  width: 100%;
  max-width: 520px;
  height: 410px;
  border-radius:  20px;
  border: none;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {

  .onepay-row {
    flex-direction: column;
  }

  .reverse {
    flex-direction: column;
  }

  .video-side iframe {
    height: 240px;
  }

}

</style>