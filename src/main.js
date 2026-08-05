import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { loadData } from './components/admin/modules/adminData.js'

// Backend-Daten laden
loadData()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
