<template>
    <div class="search">
        <div class="search-bar">
            <input class="search-text" v-model="searchText" type="text" @keyup.enter="openNew" />
            <div class="search-btn">
                <span @click="openNew">搜索</span>
            </div>
        </div>
        <div class="search-way">
            <form class="search-way-form">
                <span>
                    百度
                    <input type="radio" name="searchway" value="baidu" v-model="searchWay" />
                </span>
                <span>
                    必应
                    <input type="radio" name="searchway" value="bing" v-model="searchWay" />
                </span>
                <span>
                    搜狗
                    <input type="radio" name="searchway" value="sougou" v-model="searchWay" />
                </span>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted } from "vue"
export default defineComponent({
    name: "SearchBar",
    setup() {

        var searchWay = ref("baidu")
        var searchText = ref("")
        var searchUrl = computed(() => {
            if (searchWay.value === "bing") return "https://cn.bing.com/search?q=" + searchText.value
            if (searchWay.value === "sougou") return "https://www.sogou.com/web?query=" + searchText.value
            return "https://www.baidu.com/s?ie=UTF-8&wd=" + searchText.value
        })
        function openNew() {
            if (searchText.value === "") return ""
            window.location.href = searchUrl.value
        }

        return {
            searchText,
            searchUrl,
            searchWay,
            openNew,
        }

    }
})

</script>

<style scoped>
a {
    text-decoration: none;
}
.search {
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-bar {
    height: 50px;
    width: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 0.1px rgba(231, 231, 231, 0.63) solid;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.search-text {
    border: 0px rgb(167, 167, 167) solid;
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    /* border-radius: 10px; */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 18px;
    padding-left: 10px;
    outline: none;
}
.search-btn {
    display: inline-block;
    width: 20%;
    height: 100%;
    user-select: none;
    text-align: center;
}
.search-btn span:hover {
    color: rgba(0, 0, 0, 0.575);
}
.search-way span {
    margin-right: 10px;
}
.search-way {
    margin-top: 10px;
    width: 500px;
    text-align: center;
}
</style>
