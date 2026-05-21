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
    'service_yyof8lu',
    'template_l0vz5f1',
    {
      name: name.value,
      cedula: cedula.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
      time: new Date().toLocaleString()
    },
    '8VciHZGg4Hsaa0cyv'
  )

  .then(() => {

    toast.success("Mensaje enviado correctamente 🚀")

    // LIMPIAR CAMPOS
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

  <section
    id="contacto"
    class="contact-section  pt-5 "
    data-aos="fade-up"
    
  >

    <!-- TITULO -->
    <div class="container text-center p-0 mb-5 ">

      <h2 class="section-title mt-3 p-0">
        Contáctanos
      </h2>

      <p class="section-subtitle">
        Estamos listos para brindarte la mejor conectividad
        en El Tambo y zonas rurales del Cauca.
      </p>

    </div>

    <!-- FORM -->
    <div class="container">

      <div class="row justify-content-center">

        <div class="col-lg-7">

          <div class="contact-card">

            <div class="card-header-custom">

              <div class="icon-box">
                <i class="bi bi-chat-dots"></i>
              </div>

              <div>
                <h4>
                  Escríbenos
                </h4>

                <p>
                  Déjanos tus datos y te contactaremos pronto.
                </p>
              </div>

            </div>

            <form @submit.prevent="sendEmail">

              <div class="row g-3">

                <!-- NOMBRE -->
                <div class="col-md-12">

                  <div class="input-group-custom">

                    <i class="bi bi-person"></i>

                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      placeholder="Nombre completo"
                      required
                    >

                  </div>

                </div>

                <!-- CEDULA -->
                <div class="col-md-12">

                  <div class="input-group-custom">

                    <i class="bi bi-card-text"></i>

                    <input
                      v-model="cedula"
                      type="number"
                      class="form-control"
                      placeholder="Cédula"
                      required
                    >

                  </div>

                </div>

                <!-- TELEFONO -->
                <div class="col-md-12">

                  <div class="input-group-custom">

                    <i class="bi bi-telephone"></i>

                    <input
                      v-model="phone"
                      type="number"
                      class="form-control"
                      placeholder="Teléfono"
                      required
                    >

                  </div>

                </div>

                <!-- EMAIL -->
                <div class="col-md-12">

                  <div class="input-group-custom">

                    <i class="bi bi-envelope"></i>

                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="Correo electrónico"
                      required
                    >

                  </div>

                </div>

                <!-- MENSAJE -->
                <div class="col-12">

                  <div class="textarea-group">

                    <i class="bi bi-chat-left-text"></i>

                    <textarea
                      v-model="message"
                      class="form-control textarea-custom"
                      rows="5"
                      placeholder="Escribe tu mensaje..."
                      required
                    ></textarea>

                  </div>

                </div>

              </div>

              <!-- BOTON -->
              <button
                class="btn-contact mt-4"
                :disabled="loading"
              >

                <span v-if="!loading">
                  <i class="bi bi-send"></i>
                  Enviar mensaje
                </span>

                <span v-else>
                  <i class="bi bi-arrow-repeat spinner"></i>
                  Enviando...
                </span>

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<style scoped>

/* SECTION */
.contact-section {

  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 100%
    );

  padding: 90px 0;
}



/* TITLES */
.section-title {

  font-size: 46px;

  font-weight: 800;

  color: #111827;
}

.section-subtitle {

  max-width: 650px;

  margin: auto;

  color: #6b7280;

  line-height: 1.7;
}

/* CARD */
.contact-card {

  background: white;

  border-radius: 30px;

  padding: 35px;

  border: 3px solid #eef2f7;

  box-shadow:
    0 20px 50px rgba(0,0,0,0.06);
}

/* HEADER */
.card-header-custom {

  display: flex;

  align-items: center;

  gap: 18px;

  margin-bottom: 35px;
}

.icon-box {

  width: 70px;

  height: 70px;

  border-radius: 22px;

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

  font-size: 30px;
}

.card-header-custom h4 {

  margin: 0;

  font-size: 28px;

  font-weight: 800;

  color: #111827;
}

.card-header-custom p {

  margin: 4px 0 0;

  color: #6b7280;
}

/* INPUT GROUP */
.input-group-custom,
.textarea-group {

  position: relative;
}

.input-group-custom i,
.textarea-group i {

  position: absolute;

  left: 18px;

  top: 50%;

  transform: translateY(-50%);

  color: #379C0C;

  z-index: 10;
}

.textarea-group i {

  top: 22px;
}

/* INPUT */
.form-control {

  border-radius: 18px;

  border: 1px solid #e5e7eb;

  padding: 16px 18px 16px 50px;

  font-size: 15px;

  box-shadow: none;

  transition: all 0.3s ease;
}

.form-control:focus {

  border-color: #379C0C;

  box-shadow:
    0 0 0 4px rgba(55,156,12,0.10);
}

/* TEXTAREA */
.textarea-custom {

  resize: none;

  padding-top: 18px;
}

/* BUTTON */
.btn-contact {

  width: 100%;

  border: none;

  background:
    linear-gradient(
      135deg,
      #2faa0a,
      #39ff14
    );

  color: white;

  padding: 16px;

  border-radius: 18px;

  font-weight: 700;

  font-size: 16px;

  transition: all 0.3s ease;
}

.btn-contact:hover {

  transform: translateY(-3px);

  box-shadow:
    0 15px 35px rgba(57,255,20,0.25);
}

/* SPINNER */
.spinner {

  animation: spin 1s linear infinite;
}

@keyframes spin {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .contact-section {

    padding: 70px 0;
  ;
  }

  .section-title {

    font-size: 34px;
  }

  .contact-card {

    padding: 24px;
  }

  .card-header-custom {

    flex-direction: column;

    text-align: center;
  }
}

</style>