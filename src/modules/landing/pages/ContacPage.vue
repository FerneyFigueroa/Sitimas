<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from "vue-toastification"

const toast = useToast()


const name = ref('')
const cedula = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')

const loading = ref(false)

const sendEmail = () => {
  loading.value = true

  emailjs.send(
    'service_yyof8lu', // ✅ tu service ID
    'template_l0vz5f1', // 🔴 pega aquí tu template ID
    {
      name: name.value,
      cedula: cedula.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
      time: new Date().toLocaleString()
    },
    '8VciHZGg4Hsaa0cyv' // 🔴 pega aquí tu public key
  )
    .then(() => {
      toast.success("Mensaje enviado correctamente 🚀")


      // limpiar campos
      name.value = ''
      cedula.value = ''
      phone.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((error) => {
      console.log(error)
      toast.error("Error al enviar ❌")
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <section id="contacto" class="contact section mb-1" data-aos="fade-left">

    <div class="container text-center mb-5">
      <h2>Contáctanos</h2>
      <p>Estamos listos para brindarte la mejor conectividad en el Cauca</p>
    </div>

    <div class="container">
      <div class="row g-4">

        <!-- 📝 FORMULARIO -->
        <div class="col-lg-6">
          <div class="contact-card">

            <h4>Escríbenos</h4>

            <!-- 🔥 IMPORTANTE -->
            <form @submit.prevent="sendEmail">

              <div class="row g-3">
                <div class="col-md-12">
                  <input v-model="name" type="text" class="form-control" placeholder="Nombre" required>
                </div>

                <div class="col-md-12">
                  <input v-model="cedula" type="number" class="form-control" placeholder="Cédula" required>
                </div>
                <div class="col-md-12">
                  <input v-model="phone" type="number" class="form-control" placeholder="Teléfono" required>
                </div>

                <div class="col-md-12">
                  <input v-model="email" type="email" class="form-control" placeholder="Correo" required>
                </div>

                <div class="col-12">
                  <textarea v-model="message" class="form-control" rows="4" placeholder="Mensaje" required></textarea>
                </div>
              </div>

              <div class="location-info">
                <p><strong>Ubicación:</strong><br>El Tambo Cauca.</p>

                <p class="mt-3">
                  <strong>Horario:</strong><br>
                  Lunes a Viernes: 8 am a 6 pm.<br>
                  Sábado: 8 am a 1 pm.
                </p>
              </div>

              <button class="btn-contact mt-3" :disabled="loading">
                {{ loading ? 'Enviando...' : 'Enviar mensaje 🚀' }}
              </button>

            </form>

          </div>
        </div>

        <!-- 🗺️ MAPA -->
        <div class="col-lg-6">
          <div class="map-card">

            <iframe src="https://www.google.com/maps?q=El+Tambo+Cauca&output=embed" width="100%" height="100%"
              style="border:0;" loading="lazy">
            </iframe>

            <div class="map-overlay">
              <h5>Siti Más Telecomunicaciones</h5>
              <p>📍 El Tambo - Cauca</p>
              <a href="#" class="btn-route">Cómo llegar</a>
            </div>

          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.contact {
  background: #f8f9fa;
  padding-top: 10px;
}

/* CARD FORM */
.contact-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* INPUTS */
.form-control {
  border-radius: 12px;
  padding: 12px;
}

/* BOTON */
.btn-contact {
  background: #39ff14;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: 0.3s;
}

.btn-contact:hover {
  background: #2faa0a;
  color: white;
  transform: scale(1.05);
}

/* MAPA */
.map-card {
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* OVERLAY MAPA */
.map-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* BOTON MAPA */
.btn-route {
  display: inline-block;
  margin-top: 5px;
  color: #39ff14;
  font-weight: bold;
}

@media (max-width: 768px) {
  #contact {
    margin-top: 50px;
  }
}
</style>
