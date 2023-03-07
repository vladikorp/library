import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
});
