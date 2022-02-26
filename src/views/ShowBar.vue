<template>
    <div class="more-outer">
        <div class="header">
            <div class="header-left">
                <span>登录</span>
            </div>

            <div class="header-right">
                <span>更多</span>
                <span>反馈</span>
            </div>
        </div>
        <div class="content-box content-box-nomove">
            <div class="content-box-header">
                <div class="move-bar"></div>
                <router-link class="router" to="./">
                    <span class="to-out" @click="unmakeSitesShow">
                        <div></div>
                    </span>
                </router-link>
            </div>
            <div class="content-loc">
                <router-view></router-view>
            </div>
            <div class="to-ext-box"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, computed, defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
export default defineComponent({
    setup() {
        const store = useStore()
        function unmakeSitesShow() {
            store.state.moreShow = false
        }

        onMounted(() => {

            const wrapper = document.querySelector(".content-box") as HTMLElement
            const wrapper2 = document.querySelector(".content-loc") as HTMLElement
            let getStyleOut = window.getComputedStyle(wrapper)
            wrapper.style.left = `${parseInt(getStyleOut.left) - parseInt(getStyleOut.width) / 2}px`
            wrapper.style.top = `${parseInt(getStyleOut.top) - parseInt(getStyleOut.height) / 2}px`
            function onDrag({ movementX, movementY }: MouseEvent) {
                let getStyle = window.getComputedStyle(wrapper)
                let left = parseInt(getStyle.left)
                let top = parseInt(getStyle.top)

                if (top < 25) {
                    wrapper.style.top = "25px"
                    // document.removeEventListener("mousemove", onDrag)
                    return
                }
                wrapper.style.left = `${left + movementX}px`
                wrapper.style.top = `${top + movementY}px`

            }

            function onExt(e: MouseEvent) {
                let getStyle = window.getComputedStyle(wrapper)
                let width = parseInt(getStyle.width)
                let height = parseInt(getStyle.height)
                if (height < 450) {
                    wrapper.style.height = "450px"
                    console.log(e)
                    return
                }
                if (width < 800) {
                    wrapper.style.width = "800px"
                    return
                }
                wrapper.style.width = `${width + e.movementX}px`
                wrapper.style.height = `${height + e.movementY}px`


                let getStyle2 = window.getComputedStyle(wrapper2)
                let height2 = parseInt(getStyle2.height)
                if (height2 < 420) {
                    wrapper2.style.height = "420px"
                    return
                }
                wrapper2.style.height = `${height2 + e.movementY}px`
            }
            function makeitMove() {
                const ele = document.querySelector(".move-bar") as HTMLElement;
                ele.addEventListener("mousedown", () => {
                    ele.classList.add("active")
                    wrapper.classList.add("content-onmove")
                    document.addEventListener("mousemove", onDrag)

                })
                document.addEventListener("mouseup", () => {
                    ele.classList.remove("active")
                    wrapper.classList.remove("content-onmove")
                    document.removeEventListener("mousemove", onDrag)

                })
            }
            function makeitExt() {
                const ele = document.querySelector(".to-ext-box") as HTMLElement;
                ele.addEventListener("mousedown", () => {
                    document.addEventListener("mousemove", onExt)
                })
                document.addEventListener("mouseup", () => {
                    document.removeEventListener("mousemove", onExt)
                })
            }
            makeitMove()
            makeitExt()

        })
        return {
            unmakeSitesShow
        }
    }
})
</script>
<style scoped>
.more-outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.486);
}
.header {
    height: 25px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(68, 68, 68, 0.671);
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
}
.header-left,
.header-right {
    width: 200px;
}
.content-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    width: 1000px;
    height: 630px;
    background-color: rgba(255, 255, 255, 0.918);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    resize: both;
}
/* .content-box-nomove {
    transform: translate(-50%, -50%);
} */
.content-box-move {
    position: absolute;
    width: 1000px;
    height: 630px;
    background-color: rgba(255, 255, 255, 0.918);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.content-box-header {
    position: absolute;
    background-color: rgb(107, 107, 107);
    height: 30px;
    width: 100%;
    top: 0;
    border-radius: 10px 10px 0 0;
}
.move-bar {
    position: absolute;
    background-color: rgb(107, 107, 107);
    height: 30px;
    width: 100%;
    top: 0;
    border-radius: 10px 10px 0 0;
}
.content-box div.active {
    cursor: move;
    user-select: none;
}
.content-onmove {
    user-select: none;
}
.content-loc {
    position: absolute;
    height: 600px;
    width: 100%;
    top: 30px;

    border-radius: 0 0 10px 10px;
}

.to-ext-box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    border-radius: 14px 0 10px 0;
    z-index: 100;
}
.to-ext-box:hover {
    background-color: rgb(233, 152, 152);
    cursor: move;
}
.to-ext-box:hover ~ div {
    user-select: none;
}

.to-out {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 14px;
    height: 14px;
    display: block;
}
.to-out div {
    background-color: rgb(219, 119, 119);
    width: 14px;
    height: 14px;
    border-radius: 7px;
}
.to-out:hover div {
    background-color: rgba(219, 119, 119, 0.801);
    width: 14px;
    height: 14px;
    border-radius: 7px;
}
.to-out:hover div::after {
    content: "x";
    position: relative;
    top: -5.9px;
    right: -2.8px;
    color: rgba(0, 0, 0, 0.384);
}
</style>