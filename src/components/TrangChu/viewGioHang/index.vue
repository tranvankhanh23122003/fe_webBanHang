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
                            <tr>
                                <td class="align-middle text-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" aria-label="...">
                                </td>
                                <td class="align-middle">
                                    <h6 class="mb-0 font-14">1</h6>
                                </td>
                                <td class="text-wrap text-center align-middle">
                                    <img src="https://img.lazcdn.com/g/p/e2dfff15ecfce0c7636d4ceee9c89961.jpg_400x400q80.jpg_.webp"
                                        style="width: 50px; height: auto;" alt="">
                                </td>
                                <td class="text-wrap align-middle">12 TWS Earphonei Cute 6 Color Wireless
                                    Bluetooth Earphones Inpods Headset HiFi Sports Earbuds Colorful</td>
                                <td class="align-middle">Nguyễn Quốc Long</td>
                                <td class="text-end align-middle">544,030đ</td>
                                <td style="width: 140px;" class="align-middle">
                                    <div class="input-group input-spinner d-flex justify-content-center flex-row"
                                        style="flex-wrap: nowrap;">
                                        <button class="btn btn-white" type="button" id="button-minus"> −
                                        </button>
                                        <input type="text" class="form-control text-center" value="1">
                                        <button class="btn btn-white" type="button" id="button-plus"> +
                                        </button>
                                    </div>
                                </td>
                                <td class="text-end align-middle">544,030đ</td>
                                <td class="text-center align-middle">
                                    <input type="text" class="form-control">
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn"><i class="fa-solid fa-trash text-danger"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row mt-4">
                    <div class="col-6">
                        <div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0">
                                <i class="fa-solid fa-money-bill"></i>Tổng Tiền: 544,030đ</a></div>
                    </div>
                    <div class="col-6 text-end text-nowrap">
                        <div class="ms-auto" data-bs-toggle="modal" data-bs-target="#muaHangModal"><a
                                class="btn btn-danger radius-30 mt-2 mt-lg-0"><i
                                    class="fa-solid fa-cart-shopping"></i>Mua Hàng</a>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="muaHangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Mua Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <table class="table mb-0 table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center text-nowrap">#</th>
                                            <th class="text-center text-nowrap">Sản Phẩm</th>
                                            <th class="text-center text-nowrap">Đơn Giá</th>
                                            <th class="text-center text-nowrap">Số Lượng</th>
                                            <th class="text-center text-nowrap">Thành Tiền</th>
                                            <th class="text-center text-nowrap">Ghi Chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center align-middle">
                                                1
                                            </td>
                                            <td class="align-middle"> 12 TWS Earphonei Cute 6 Color Wireless
                                                Bluetooth Earphones Inpods Headset HiFi Sports Earbuds
                                                Colorful</td>
                                            <td class="text-end align-middle">544,030đ</td>
                                            <td class="text-center align-middle">1
                                            </td>
                                            <td class="text-end align-middle">544,030đ
                                            </td>
                                            <td class="align-middle">
                                                Mua 1 cái thôi nha
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colspan="1" class="align-middle text-nowrap">Nơi giao hàng
                                            </th>
                                            <th colspan="3" class="align-middle">
                                                <select class="form-control">
                                                    <option value="1">
                                                        Nguyễn Quốc Long - 01234567890 - 32 Xuân Diệu
                                                    </option>
                                                </select>
                                            </th>
                                            <th colspan="2" class="align-middle text-nowrap text-danger">
                                                Tổng Tiền: 544,030đ
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                                    Nhận Mua
                                    Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>