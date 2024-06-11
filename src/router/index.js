import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/TrangChu/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/Admin/DanhMuc/index.vue')
    },
    {
        path : '/admin/san-pham',
        component: ()=>import('../components/Admin/SanPham/index.vue')
    },
    {
        path : '/admin/dai-ly',
        component: ()=>import('../components/Admin/DaiLy/index.vue')
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/Admin/NhanVien/index.vue')
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/dai-ly/dang-ky',
        component: ()=>import('../components/DaiLy/DangKy/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/dai-ly/dang-nhap',
        component: ()=>import('../components/DaiLy/DangNhap/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/dai-ly/quen-mat-khau',
        component: ()=>import('../components/DaiLy/QuenMatKhau/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/dai-ly/lay-lai-mat-khau',
        component: ()=>import('../components/DaiLy/LayLaiMatKhau/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/khach-hang/dang-nhap',
        component: ()=>import('../components/KhachHang/DangNhap/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/khach-hang/dang-ky',
        component: ()=>import('../components/KhachHang/DangKy/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/khach-hang/quen-mat-khau',
        component: ()=>import('../components/KhachHang/QuenMatKhau/index.vue'),
        meta: {layout: 'blank'}
    },
    {
        path : '/khach-hang/lay-lai-mat-khau',
        component: ()=>import('../components/KhachHang/LayLaiMatKhau/index.vue'),
        meta: {layout: 'blank'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router