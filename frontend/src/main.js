import { createApp } from 'vue/dist/vue.esm-bundler';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
});
