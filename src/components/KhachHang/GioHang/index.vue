<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <div class="d-lg-flex align-items-center mb-4 gap-3">
                            <div class="position-relative">
                                <input type="text" class="form-control ps-5 radius-30" placeholder="Search Order"> <span
                                    class="position-absolute top-50 product-show translate-middle-y"><i
                                        class="bx bx-search"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="text-end">
                            <input class="form-check-input me-3" type="checkbox" value="" aria-label="..."><b>Chọn Tất
                                Cả (3)</b>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0">
                        <thead class="table-light">
                            <tr>
                                <th></th>
                                <th class="text-center text-nowrap">#</th>
                                <th class="text-center text-nowrap">Hình Ảnh</th>
                                <th class="text-nowrap">Sản Phẩm</th>
                                <th class="text-nowrap">Đại Lý</th>
                                <th class="text-center text-nowrap">Đơn Giá</th>
                                <th class="text-center text-nowrap">Số Lượng</th>
                                <th class="text-center text-nowrap">Thành Tiền</th>
                                <th class="text-center text-nowrap">Ghi Chú</th>
                                <th class="text-center text-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_gio_hang" :key="index">
                                <td class="align-middle text-center">
                                    <input  v-model="value.dang_chon " @change="tinhTongTien()" class="form-check-input me-3" value="" type="checkbox" aria-label="...">
                                </td>
                                <td class="align-middle">
                                    <h6 class="mb-0 font-14">{{ index + 1 }}</h6>
                                </td>
                                <td class="text-wrap text-center align-middle">
                                    <img src="https://img.lazcdn.com/g/p/e2dfff15ecfce0c7636d4ceee9c89961.jpg_400x400q80.jpg_.webp"
                                        style="width: 50px; height: auto;" alt="">
                                </td>
                                <td class="text-wrap align-middle">{{ value.ten_san_pham }}</td>
                                <td class="align-middle">{{ value.id_dai_ly }}</td>
                                <td class="text-end align-middle">{{ formatVND(value.don_gia) }}</td>
                                <td style="width: 140px;" class="align-middle">
                                    <div class="input-group input-spinner d-flex justify-content-center flex-row"
                                        style="flex-wrap: nowrap;">
                                        <button v-on:click="tru(value)" class="btn btn-white" type="button"
                                            id="button-minus"> −
                                        </button>
                                        <input v-on:change="capNhat(value)" type="text" class="form-control text-center"
                                            v-model="value.so_luong">
                                        <button v-on:click="cong(value)" class="btn btn-white" type="button"
                                            id="button-plus"> +
                                        </button>
                                    </div>
                                </td>
                                <td class="text-end align-middle">{{ formatVND(value.thanh_tien) }}</td>
                                <td class="text-center align-middle">
                                    <input v-on:change="capNhat(value)" v-model="value.ghi_chu" type="text"
                                        class="form-control">
                                </td>
                                <td class="text-center align-middle">
                                    <button v-on:click="xoaGioHang(value)" class="btn"><i
                                            class="fa-solid fa-trash text-danger"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <div class="row mt-3">
                    <div class="col-lg-8 d-flex flex-row align-items-center text-nowrap">
                        <label class="me-2"><b>Địa Chỉ: </b></label>
                        <select v-model="id_dia_chi" class="form-select">
                            <template v-for="(value, index) in list_dia_chi" :key="index">
                                <option v-bind:value="value.id">{{ value.ten_nguoi_nhan }} - {{ value.so_dien_thoai }} - {{ value.dia_chi }}</option>
                            </template>
                        </select>
                    </div>
                    <div class="col-lg-4 d-flex flex-row align-items-center text-nowrap">
                        <label class="me-2"><i class="fa-xl fa-solid fa-ticket text-danger me-2"></i><b>DZ Voucher:
                            </b></label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Nhập mã giảm giá">
                            <button v-on:click="apDungCode()" class="btn btn-outline-secondary" type="button" id="button-addon2">Áp Dụng</button>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row mt-4">
                    <div class="col-6">
                        <div class="ms-auto">

                                <p><i class="fa-solid fa-money-bill fa-xl me-2"></i><b>Tổng Tiền Hóa Đơn:</b> {{ formatVND(tong_tien) }}</p>
                                <p><i class="fa-solid fa-money-bill-trend-up fa-xl me-2"></i><b>Só Tiền Giảm:</b> {{ formatVND(tien_giam) }}</p>
                                <p><i class="fa-solid fa-money-bill-transfer"></i><b>Tổng tiền thanh toán:</b> {{ formatVND(tong_tien -tien_giam) }}</p>
                        </div>
                    </div>
                    <div class="col-6 text-end text-nowrap d-flex align-items-end">
                        <div class="ms-auto"><a v-on:click="muaHang()" class="btn btn-danger radius-30 mt-2 mt-lg-0"><i
                                    class="fa-solid fa-cart-shopping"></i>Mua Hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_gio_hang   : [],
            list_dia_chi    : [],
            tong_tien       : 0,
            tien_giam       : 0,
            id_dia_chi      : null,

        }
    },
    mounted() {
        this.layDataGioHang();
        this.layDiaChi();
    },
    methods: {
        muaHang() {
            var list = [];
            this.list_gio_hang.forEach((v,k) => {
                if(v.dang_chon == true){
                    list.push(v.id);
                }
            });
            var payload = {
                'id_dia_chi_khach_hang'            :   this.id_dia_chi,
                'list_san_pham_can_mua'            :   list,
            };
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/don-hang/create", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataGioHang();
                        this.tien_giam = 0;
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        tinhTongTien() {
            var tong = 0;
            this.list_gio_hang.forEach((value, index) => {
                if(value.dang_chon == true){
                    tong = tong + value.thanh_tien;
                }
            });
            this.tong_tien = tong;
        },
        // Vì dựa vào thông tin đăng nhập => axios => header  => trên BE $user = Auth::sanctum
        apDungCode() {

        },
        layDataGioHang() {
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/gio-hang/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    this.list_gio_hang = res.data.data;
                    this.tinhTongTien();
                })
        },
        layDiaChi() {
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/dia-chi/data", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    this.list_dia_chi   = res.data.data;
                });
        },
        xoaGioHang(payload) {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/gio-hang/delete", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataGioHang();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        capNhat(payload) {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/gio-hang/update", payload, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("token_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.success(thong_bao);
                        this.layDataGioHang();
                    } else {
                        var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + res.data.message + '<span>';
                        this.$toast.error(thong_bao);
                    }
                })
        },
        tru(value) {
            value.so_luong = value.so_luong * 1 - 1;
            if (value.so_luong < 1) {
                var message = "Số lượng mua tối thiểu phải là 1 sản phẩm."
                var thong_bao = '<b>Thông báo</b><span style="margin-top: 5px">' + message + '<span>';
                this.$toast.warning(thong_bao);
                value.so_luong = 1;
                this.capNhat(value)
            } else {
                this.capNhat(value)
            }
        },
        cong(value) {
            value.so_luong = value.so_luong * 1 + 1;
            this.capNhat(value)
        },
    },
}
</script>
<style></style>
