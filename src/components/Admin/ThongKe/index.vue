<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    Thống Kê 1
                </div>
                <div class="card-body">
                    <template v-if="is_load == true">
                        <Pie id="my-chart-id" :options="chartOptions" :data="chartData"/>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'ThongKe1',
    components: {
        Pie
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    { 
                        data: [],
                        backgroundColor: ["#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"]
                    }
                ],

            },
            chartOptions: {
                responsive: true
            },
            is_load : false
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/thong-ke-1", {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("token_nhan_vien")
                        }
                    })
                .then((res) => {
                    var array_ten_danh_muc = res.data.array_ten_danh_muc;
                    var array_tong_so_luong = res.data.array_tong_so_luong;
                    this.chartData.labels = array_ten_danh_muc;
                    this.chartData.datasets[0].data = array_tong_so_luong;
                    this.is_load = true;
                })
        }
    },
}
</script>
<style lang="">

</style>