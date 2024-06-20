<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <h4>Danh Sách Sản Phẩm</h4>
                        </div>
                        <div class="col-lg-9 col-xl-10">
                            <form class="float-lg-end">
                                <div class="row row-cols-lg-2 row-cols-xl-auto g-2">
                                    <div class="col">
                                        <div class="position-relative">
                                            <input type="text" class="form-control ps-5"
                                                placeholder="Search Product..."> <span
                                                class="position-absolute top-50 product-show translate-middle-y"><i
                                                    class="bx bx-search"></i></span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="btn-group" role="group"
                                            aria-label="Button group with nested dropdown">
                                            <button type="button" class="btn btn-white">Sort By</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupDrop1" type="button"
                                                    class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class='bx bx-chevron-down'></i>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                    <li><a class="dropdown-item" href="#">A - Z</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Z - A</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 product-grid">
        <template v-for="(value, index) in list_san_pham" :key="index">
            <div class="col-2 d-flex">
                <div class="card flex-fill">
                    <img v-bind:src="value.hinh_anh"
                        class="card-img-top "
                        style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;" alt="...">
                    <div class="">
                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                class="badge bg-success mt-2">sale</span></div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title cursor-pointer">
                            <router-link :to="`/chi-tiet-san-pham/` + value.id + `-` + value.slug_san_pham">
                                <a v-bind:href="`/chi-tiet-san-pham/` + value.id + `-` + value.slug_san_pham">
                                    {{ value.ten_san_pham }}
                                </a>
                            </router-link>
                        </h6>
                        <div class="mt-auto">
                            <div class="d-flex align-items-center fs-6">
                                <div class="cursor-pointer">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-secondary"></i>
                                </div>
                                <p class="mb-0 ms-auto">4.2(182)</p>
                            </div>
                            <div class="clearfix mt-2">
                                <p class="mb-0 float-end fw-bold"><span
                                        class="me-2 text-decoration-line-through text-muted">{{ value.gia_ban }}</span><span
                                        class="fs-5 text-danger">{{ value.gia_khuyen_mai }}</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['id_danh_muc', 'slug_danh_muc'],
    data() {
        return {
            id_danh_muc     :   this.$route.params.id_danh_muc,
            list_san_pham   :   [],
        }
    },
    mounted() {
        this.layThongTinSanPhamTuDanhMuc();
    },
    methods: {
        layThongTinSanPhamTuDanhMuc() {
            axios
                .get('http://127.0.0.1:8000/api/thong-tin-san-pham-tu-danh-muc/' + this.id_danh_muc)
                .then((res) => {
                    if (res.data.status) {
                        this.list_san_pham = res.data.data;
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                        this.$router.push('/');
                    }
                })
        },
    },
}
</script>
<style>
    
</style>