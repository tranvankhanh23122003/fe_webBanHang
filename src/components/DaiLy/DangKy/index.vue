<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                <div class="col mx-auto">
                    <div class="my-4 text-center">
                        <img src="https://dzfullstack.com/assets/images/logo-img.png" width="180" alt="" />
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="text-center">
                                    <h3 class="">ĐĂNG KÝ BÁN HÀNG CÙNG DZFULLSTACK</h3>
                                </div>
                                <div class="login-separater text-center mb-4">
                                    <hr />
                                </div>
                                <div class="form-body">
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label class="form-label">Họ Và Tên</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Số Điện Thoại</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Ngày Sinh</label>
                                            <input type="date" class="form-control">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Mật Khẩu</label>
                                            <input type="password" class="form-control">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Nhập Lại Mật Khẩu</label>
                                            <input type="password" class="form-control">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Tên Doanh Nghiệp</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Mã Số Thuế</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-12">
                                            <label>Địa chỉ kinh doanh:</label>
                                            <textarea class="form-control"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button type="button" class="btn btn-primary"><i
                                                        class='bx bx-user'></i>Đăng Ký</button>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <router-link to="/dai-ly/dang-nhap">
                                                <button type="button" class="btn btn-secondary w-100"><i
                                                        class="fa-solid fa-arrow-left"></i>Quay Lại Đăng Nhập</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
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