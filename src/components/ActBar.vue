<template>
    <div class="act-bar">
        <div class="box new-used">
            <div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
            </div>最近使用
        </div>
        <div class="box new-used">
            <div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
            </div>我的收藏
        </div>
        <div class="box new-used">
            <div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
                <div>
                    <img src="@/assets/yingyong.png" />
                </div>
            </div>
            <span @click="makeSitesShow">...</span>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue"
import { useStore } from "vuex"
export default defineComponent({
    setup() {
        const store = useStore()
        function makeSitesShow() {
            store.state.sitesShow = true
        }
        return {
            makeSitesShow
        }
    }

})
</script>

<style scoped>
.act-bar {
    margin-top: 60px;
    position: absolute;
    top: 40%;
    width: 800px;
    height: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    user-select: none;
}
.new-used {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.new-used > div {
    box-sizing: border-box;
    padding: 10px;
    width: 200px;
    height: 200px;
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.new-used > div div {
    width: 84px;
    height: 84px;
    margin: 3px;
    background-color: rgb(209, 209, 209);
    border-radius: 10px;
}
.new-used > div div:hover {
    width: 84px;
    height: 84px;
    margin: 3px;
    background-color: rgb(209, 209, 209);
    border-radius: 10px;
    transform: scale(1.01);
}
.new-used > div div > img {
    width: inherit;
    height: inherit;
    border-radius: 10px;
}
</style>
