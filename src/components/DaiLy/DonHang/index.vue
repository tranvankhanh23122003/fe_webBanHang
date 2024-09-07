<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h4>Danh Sách Đơn Hàng Đại Lý</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Mã Đơn Hàng</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Tên Khách Hàng</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Tổng Tiền Thanh Toán</th>
                                <th>Thanh Toán</th>
                                <th>Tình Trạng Đơn Hàng</th>
                                <th>In Bill</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle">
                                <th>1</th>
                                <td class="text-center">HDBH2110</td>
                                <td>Iphone 15 Promax</td>
                                <td>Nguyễn Quốc Long</td>
                                <td class="text-center">0123456789</td>
                                <td>32 Xuân Diệu, Hải Châu, Đà Nẵng</td>
                                <td class="text-end">100.000 đ</td>
                                <td class="text-center">
                                    <button class="btn btn-danger w-100">Chưa Thanh Toán</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-danger w-100" data-bs-toggle="modal"
                                        data-bs-target="#tinhTrangModal">Đã Hủy</button>
                                </td>
                                <td class="text-center">
                                    <a href="/dai-ly/in-hoa-don" target="_blank" ><button class="btn btn-secondary"><i class="fa-solid fa-file-invoice-dollar"></i></button></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="tinhTrangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Tình Trạng Đơn Hàng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-check">
									<input class="form-check-input" type="radio" name="flexRadioDefault" checked>
									<label class="form-check-label" >Đã Đặt Hàng</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="flexRadioDefault">
									<label class="form-check-label">Đang Xử Lý</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="radio" name="flexRadioDefault">
									<label class="form-check-label">Đang Vận Chuyển</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="radio" name="flexRadioDefault">
									<label class="form-check-label">Đã Giao Hàng</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="radio" name="flexRadioDefault">
									<label class="form-check-label">Đã Hủy</label>
								</div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng
                                    HDBH2110</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th class="text-center text-nowrap">#</th>
                                                <th class="text-center text-nowrap">Hình Ảnh</th>
                                                <th class="text-nowrap">Sản Phẩm</th>
                                                <th class="text-center text-nowrap">Đơn Giá</th>
                                                <th class="text-center text-nowrap">Số Lượng</th>
                                                <th class="text-center text-nowrap">Thành Tiền</th>
                                                <th class="text-center text-nowrap">Ghi Chú</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="align-middle">
                                                    <h6 class="font-14">1</h6>
                                                </td>
                                                <td class="text-wrap text-center align-middle">
                                                    <img src="https://img.lazcdn.com/g/p/e2dfff15ecfce0c7636d4ceee9c89961.jpg_400x400q80.jpg_.webp"
                                                        style="width: 50px; height: auto;" alt="">
                                                </td>
                                                <td class="text-wrap align-middle">12 TWS Earphonei Cute 6 Color
                                                    Wireless
                                                    Bluetooth Earphones Inpods Headset HiFi Sports Earbuds Colorful
                                                </td>
                                                <td class="text-end align-middle">10.000</td>
                                                <td class="align-middle text-center">1</td>
                                                <td class="text-end align-middle">10.000
                                                </td>
                                                <td class="text-center align-middle">
                                                    Nhớt giặt trước khi giao
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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