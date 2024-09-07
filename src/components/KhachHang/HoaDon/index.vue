<template>
  <div class="bill-container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2><img src="https://dzfullstack.com/assets/images/logo-img.png" class="img-fluid" alt="logo"></h2>
        <h2>Thông Tin Hóa Đơn</h2>
      </div>
      <div class="col-lg-12">
        <p><b>Mã Hóa Đơn:</b> HD001</p>
        <p><b>Đại Lý:</b> DZFullStack</p>
        <p><b>Khách Hàng:</b> Nguyễn Quốc Long</p>
        <p><b>Địa Chỉ:</b> 32 Xuân Diệu, Hải Châ, Đà Nẵng</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Chi Tiết Hóa Đơn</h2>
        <table>
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th class="text-center">SL</th>
              <th class="text-end">Đơn giá</th>
              <th class="text-end">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iphone 15</td>
              <td class="text-center">1</td>
              <td class="text-end">40.000.000 đ</td>
              <td class="text-end">40.000.000 đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <p><b>Tổng Tiền:</b> 40.000.000 đ</p>
    <hr>
    <p class="footer">Cảm ơn Quý khách. Hẹn gặp lại!</p>
  </div>
</template>
<script>
export default {
  mounted() {
    this.printInvoice();
  },
  methods: {
    printInvoice() {
      // Chỉ cần gọi window.print() để in nội dung hiện tại
      window.print();
    }
  }
}
</script>
<style>
.bill-container {
  width: 80mm;
  padding: 10px;
  background: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
}

table,
th,
td {
  border: none;
}

th,
td {
  padding: 3px 0;
  text-align: left;
}

.footer {
  text-align: center;
  margin-top: 10px;
  font-size: 0.8em;
}

@media print {
  @page {
    size: 80mm auto;
    margin: 0;
  }
}
</style>