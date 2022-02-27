<template>
    <div class="show-table">
        <div class="table-side">
            <img src="./../assets/logo.png" />
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
            <div>菜单</div>
        </div>
        <div class="table">
            <div class="list-header">
                <ul>
                    <li>序号</li>
                    <li>logo</li>
                    <li>站名</li>
                    <li>简介</li>
                    <li>点击数</li>
                </ul>
            </div>
            <div class="list-body">
                <ul class="table-item" v-for="i in 24">
                    <li>{{ i }}</li>
                    <li>lo</li>
                    <li>站</li>
                    <li>简</li>
                    <li>{{ i + 1 }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({

})
</script>
<style scoped>
.list-header {
    background-color: rgb(197, 197, 197);
    height: 30px;
}
.list-header ul {
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: rgb(197, 197, 197);
    height: inherit;
}
.list-header ul li {
    display: inline-block;
    width: 20%;
    text-align: center;
}
.list-body {
    max-height: 560px;
    overflow-y: auto;
}
.list-body ul {
    padding: 0;
    margin-top: 15px;
    margin-bottom: 15px;
    border-bottom: rgb(219, 219, 219) 0.1px solid;
}
.list-body ul li {
    display: inline-block;
    width: 20%;
    text-align: center;
    font-size: 15px;
    border-right: rgb(219, 219, 219) 0.1px solid;
    box-sizing: border-box;
}
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
    border-bottom-right-radius: 10px;
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