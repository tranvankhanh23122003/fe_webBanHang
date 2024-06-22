<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-start border-0 border-3 border-warning shadow">
                <div class="card-body d-flex flex-row">
                    <div class="d-flex align-items-center">
                        <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white me-3"><i
                                class="bx bxs-group"></i>
                        </div>
                        <div class="d-flex flex-column border-end border-2 border-secondary-subtle">
                            <h5 class="me-2">DZFullStack</h5>
                            <b><span class="badge bg-danger">DzMall</span></b>
                        </div>

                    </div>
                    <div class="mt-3">
                        <p><i class="fa-solid fa-location-dot fa-lg me-1 ms-2 text-danger"></i> 32 Xuân Diệu, Hải Châu,
                            Đà Nẵng</p>
                        <p><i class="fa-solid fa-store me-1 ms-2"></i> Sản Phẩm: <span class="text-danger">22</span></p>
                    </div>
                    <div class="ms-5 mt-3">
                        <p><i class="fa-solid fa-bag-shopping me-1"></i>Đã Bán: <span class="text-danger">28.0K</span>
                        </p>
                        <p><i class="fa-solid fa-star me-1 text-warning"></i>Đánh Giá: <span class="text-danger">4.8/5
                                (120 Đánh Giá)</span></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-3">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <b>Price</b>
                                </div>
                                <div class="col-6 text-end text-primary"><a type="button">Đặt lai</a></div>
                            </div>
                            <div class="row">
                                <div class="row mb-2">
                                    <div class="col-4"><input class="form-control" placeholder="0 đ" type="text"></div>
                                    <div class="col-2" style="padding: 0px 0px">
                                        <hr>
                                    </div>
                                    <div class="col-6"><input class="form-control" placeholder="540.000 đ" type="text">
                                    </div>
                                </div>
                                <input type="range" class="form-range" id="customRange1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="accordion accordion-flush" id="accordionFlushExample1">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            style="padding-bottom: 2px;" data-bs-target="#flush-collapseOne1"
                                            aria-expanded="true" aria-controls="flush-collapseOne1">
                                            <h5 class="card-title">
                                                Rating
                                            </h5>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne1" class="accordion-collapse collapse show"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample1"
                                        style="">
                                        <div class="accordion-body" style="    padding-left: 3px;">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">
                                                    <div class="d-flex align-items-center ">
                                                        <div class="cursor-pointer">
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">
                                                    <div class="d-flex align-items-center ">
                                                        <div class="cursor-pointer">
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">
                                                    <div class="d-flex align-items-center ">
                                                        <div class="cursor-pointer">
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">
                                                    <div class="d-flex align-items-center ">
                                                        <div class="cursor-pointer">
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-secondary"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">
                                                    <div class="d-flex align-items-center ">
                                                        <div class="cursor-pointer">
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                            <i class="bx bxs-star text-warning"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="accordion accordion-flush" id="accordionFlushExample2">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            style="padding-bottom: 2px;" data-bs-target="#flush-collapseOne2"
                                            aria-expanded="true" aria-controls="flush-collapseOne2">
                                            <h5 class="card-title">
                                                Danh Mục
                                            </h5>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne2" class="accordion-collapse collapse show"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2"
                                        style="">
                                        <div class="accordion-body" style="    padding-left: 3px;">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">Điện
                                                    Thoại</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">Máy Tính</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">Apple</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckChecked" checked="" />
                                                <label class="form-check-label text-nowrap">Điện Máy Gia
                                                    Dụng</label>
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
        <div class="col-lg-9">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-lg-3 col-xl-2">
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
                                                    <button type="button" class="btn btn-white">Sort
                                                        By</button>
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
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid mt-4">
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/p/e2dfff15ecfce0c7636d4ceee9c89961.jpg_400x400q80.jpg_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-success mt-2">sale</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">12 TWS Earphonei Cute 6 Color Wireless
                                Bluetooth
                                Earphones Inpods Headset HiFi Sports Earbuds Colorful</h6>
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/p/31cd4abf48e893d422fe99a67b25e53c.jpg_400x400q80.jpg_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-danger mt-2">New</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">Cáp Sạc Nhanh 3 Đầu Siêu Bền, Dùng Cho Tất
                                Cả Các
                                Điện Thoại SmartPhone, Sạc Nhanh 3 Trong
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/ff/kf/S7874b2b345c04d89929f9c59bf3ea6e9E.jpg_400x400q80.jpg_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-success mt-2">sale</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">iPhone 15 Promax</h6>
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/p/a1a5e0205f59c0f62e6497114fe6db5f.png_400x400q80.png_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-danger mt-2">New</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">Ổ cắm điện đa năng 6 Cổng Sạc USB 2 Cáp
                                USB 3 Và
                                5M Dây Cáp Dày Chất Lượng Cao 100% Chính Hãng 2023 New
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/p/8eb0581380a44a9485e0206a32345ef8.jpg_400x400q80.jpg_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-success mt-2">sale</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">Túi đeo chéo nữ canvas rẻ, đẹp style Hàn
                                Quốc</h6>
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="card flex-fill">
                        <img src="https://img.lazcdn.com/g/p/8eb0581380a44a9485e0206a32345ef8.jpg_400x400q80.jpg_.webp"
                            class="card-img-top "
                            style="    width: 100%; height: 230px; object-fit: contain; vertical-align: middle;"
                            alt="...">
                        <div class="">
                            <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="badge bg-success mt-2">sale</span></div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title cursor-pointer">Túi đeo chéo nữ canvas rẻ, đẹp style Hàn
                                Quốc</h6>
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
                                            class="me-2 text-decoration-line-through text-muted">1,000,000đ</span><span
                                            class="fs-5 text-danger">544,030đ</span>
                                    </p>
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