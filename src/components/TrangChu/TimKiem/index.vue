<template>
    <div class="card    ">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h4>
                    <i class="fa-solid fa-magnifying-glass"></i> SẢN PHẨM {{thong_tin}}
                </h4>
            </div>
            <hr>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
                <template v-for="(value, index) in list_san_pham" :key="index">
                    <div class="col d-flex">
                        <div class="card flex-fill">
                            <img v-bind:src="value.hinh_anh" class="card-img-top "
                                style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                                alt="...">
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
                                            <template v-for="items in value.sao_danh_gia" :key="items">
                                                <i class="bx bxs-star text-warning"></i>
                                            </template>
                                            <template v-for="items in (5 - value.sao_danh_gia)" :key="items">
                                                <i class="bx bxs-star text-secondary"></i>
                                            </template>
                                        </div>
                                        <p class="mb-0 ms-auto">4.2(182)</p>
                                    </div>
                                    <div class="clearfix mt-2">
                                        <p class="mb-0 float-end fw-bold"><span
                                                class="me-2 text-decoration-line-through text-muted">{{
                                                    value.gia_ban }}</span><span class="fs-5 text-danger">{{
                                                    value.gia_khuyen_mai }}</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props : ['thong_tin'],
    beforeRouteUpdate(to, from, next){
        this.thong_tin = to.params.thong_tin;
        this.loadDataSanPham();
        next();
    },
    data() {
        return {
            thong_tin : this.$route.params.thong_tin,
            list_san_pham: [],
        }
    },
    mounted() {
        this.loadDataSanPham();
    },
    methods: {
        loadDataSanPham() {
            var payload = {
                'noi_dung_tim' : this.thong_tin
            };
            axios
                .post("http://127.0.0.1:8000/api/san-pham/tim-kiem", payload)
                .then((res) => {
                    this.list_san_pham = res.data.data;
                });
        },
    },
}
</script>
<style></style>