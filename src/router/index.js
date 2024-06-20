import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from "./kiemTraAdmin";
import kiemTraDaiLy from "./kiemTraDaiLy";
import kiemTraKhachHang from "./kiemTraKhachHang";

const routes = [
    {
        path : '/',
        component: ()=>import('../components/TrangChu/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path : '/chi-tiet-san-pham',
        component: ()=>import('../components/TrangChu/chiTietSanPham.vue'),
        meta: {layout: 'client'}
    },
    {
        path : '/danh-sach-san-pham',
        component: ()=>import('../components/TrangChu/danhSachSanPham.vue'),
        meta: {layout: 'client'}
    },
    {
        path : '/admin/danh-muc',
        component: ()=>import('../components/Admin/DanhMuc/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path : '/admin/san-pham',
        component: ()=>import('../components/Admin/SanPham/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path : '/admin/dai-ly',
        component: ()=>import('../components/Admin/DaiLy/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/Admin/NhanVien/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/Admin/KhachHang/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    {
        path : '/admin/profile',
        component: ()=>import('../components/Admin/Profile/index.vue'),
        beforeEnter: kiemTraAdmin,
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
        path : '/dai-ly/san-pham',
        component: ()=>import('../components/DaiLy/SanPham/index.vue'),
        meta: {layout: 'daily'},
        beforeEnter: kiemTraDaiLy,
    },
    {
        path : '/dai-ly/nhap-kho',
        component: ()=>import('../components/DaiLy/NhapKho/index.vue'),
        meta: {layout: 'daily'},
        beforeEnter: kiemTraDaiLy,
    },
    {
        path : '/dai-ly/profile',
        component: ()=>import('../components/DaiLy/Profile/index.vue'),
        meta: {layout: 'daily'},
        beforeEnter: kiemTraDaiLy,
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
    {
        path : '/khach-hang/profile',
        component: ()=>import('../components/KhachHang/Profile/index.vue'),
        meta: {layout: 'client'},
        beforeEnter: kiemTraKhachHang,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router