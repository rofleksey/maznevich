import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/globals.css'

// Import components
import HomePage from './pages/HomePage.vue'
import BuildsPage from './pages/BuildsPage.vue'
import LadderPage from './pages/LadderPage.vue'
import TournamentsPage from './pages/TournamentsPage.vue'

// Create router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/builds',
            name: 'Builds',
            component: BuildsPage
        },
        {
            path: '/ladder',
            name: 'Ladder',
            component: LadderPage
        },
        {
            path: '/tournaments',
            name: 'Tournaments',
            component: TournamentsPage
        },
    ],
    scrollBehavior(_1, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

createApp(App)
    .use(router)
    .mount('#app')