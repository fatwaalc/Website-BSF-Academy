import { createWebHistory, createRouter } from 'vue-router'
import Beranda from '../pages/Beranda.vue'
import TentangKami from '../pages/TentangKami.vue'
import Akademi from '../pages/Akademi.vue'
import Program from '../pages/Program.vue'
import HubungiKami from '../pages/HubungiKami.vue'
import Formulir from '../pages/Formulir.vue'

const routes = [
    {
        path: "/",
        name: "Beranda",
        component: Beranda
    },
    {
        path: "/tentang-kami",
        name: "TentangKami",
        component: TentangKami
    },
    {
        path: "/akademi",
        name: "Akademi",
        component: Akademi
    },
    {
        path: "/program",
        name: "Program",
        component: Program
    },
    {
        path: "/hubungi-kami",
        name: "HubungiKami",
        component: HubungiKami
    },
    {
        path: "/formulir",
        name: "Formulir",
        component: Formulir
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Scroll ke atas saat pindah halaman
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router