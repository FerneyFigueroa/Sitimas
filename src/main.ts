
import './assets/css/main.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
// Iconos
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './routes'

const app = createApp(App)

app.use(route)
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
})
app.mount('#app')