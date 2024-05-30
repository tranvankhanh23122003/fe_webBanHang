import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/DanhMuc/index.vue')
    },
    {
        path : '/admin/san-pham',
        component: ()=>import('../components/SanPham/index.vue')
    },
    {
        path : '/admin/dai-ly',
        component: ()=>import('../components/DaiLy/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router