<template>
    <div class="nav">
        <div>影视</div>
        <div>小说</div>
        <div>网盘</div>
        <div>编程</div>
        <div>图片</div>
        <div>我的收藏</div>
    </div>
    <div class="show-table">
        <div class="table-side">
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
        </div>
        <table class="table">
            <tr>
                <th>序号</th>
                <th>logo</th>
                <th>站名</th>
                <th>简介</th>
                <th>点击数</th>
            </tr>

            <tr class="table-item" v-for="i in 14">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({

})
</script>
<style scoped>
.show-table {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: inherit;
    /* overflow: scroll; */
}
.table {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    height: inherit;
    background-color: #fff;
    border: 1px rgba(0, 0, 0, 0.082) solid;
    border-collapse: collapse;
    border-radius: 10px;
}

.table tr {
    /* height: 30px; */
}

.table tr th {
    border: 1px rgba(0, 0, 0, 0.13) solid;
    height: 30px;
}
.table tr td {
    border: 1px rgba(0, 0, 0, 0.082) solid;
    /* height: 35px; */
}
.table-item td:nth-child(1) {
    width: 40px;
}
.table-item td:nth-child(2) {
    width: 40px;
}
.table-item td:nth-child(5) {
    width: 50px;
}
.table-item td:nth-child(3) {
    width: 100px;
}
.table-side {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    height: inherit;
    background-color: #fff;
    border: 1px rgba(0, 0, 0, 0.082) solid;
    border-radius: 0 0 0 10px;
}

.table-side div {
    width: 100%;
    height: 40px;
    text-align: center;
    border: 1px rgba(0, 0, 0, 0.082) solid;
    padding: 5px;
}
</style>