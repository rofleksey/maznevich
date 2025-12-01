import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import './styles/globals.css'

// Import components
import HomePage from './pages/HomePage.vue'
import BuildsPage from './pages/BuildsPage.vue'

// Create router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage  // Use HomePage here
        },
        {
            path: '/builds',
            name: 'Builds',
            component: BuildsPage
        }
    ],
})

createApp(App)
    .use(router)
    .mount('#app')