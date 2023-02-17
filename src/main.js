import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import AppHeader from "@/components/global/AppHeader"
import "@/assets/style.css"
import store from './store'

const app = createApp(App)
app.component("AppHeader", AppHeader)
app.use(store)
app.use(bootstrap)
app.use(router)
app.mount('#app')
