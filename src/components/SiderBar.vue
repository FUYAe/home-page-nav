<template>
    <div :class="{ 'sider-bar': true, 'sider-bar-show': isshow }">
        <div class="sider-home">
            <img src="../assets/yingyong.png" />
            <span>欢迎,{{ username }}!</span>
        </div>
        <div class="btn login-btn" @click="toLoginPage">注册&登录</div>
        <div class="btn my-save">我的收藏</div>
        <div class="btn response">反馈</div>
        <div @click="unshowsider">1</div>
    </div>
    <div v-if="loginpage" class="login-reg-outer">
        >
        <div class="login-reg">
            <span class="to-out" @click="offLoginPage">
                <div></div>
            </span>
            <div class="select">
                <div @click="islogin" :class="{ isselected: !tologin }">登录</div>
                <div
                    @click="isregister"
                    :class="{
                        isselected:
                            !toregister
                    }"
                >注册</div>
            </div>
            <div v-if="tologin" class="login">
                <input class="login-reg-input" type="text" />
                <input class="login-reg-input" type="password" />
                <div class="login-reg-btn">登录</div>
            </div>
            <div v-if="toregister" class="register">
                <input class="login-reg-input" type="text" />
                <input class="login-reg-input" type="password" />
                <input class="login-reg-input" type="password" />
                <div class="login-reg-btn">注册</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue"
import { useStore } from "vuex"
export default defineComponent({
    setup() {
        const store = useStore()
        var username = ref("")
        var tologin = ref(true)
        var toregister = ref(false)
        function unshowsider() { store.state.siderBarIsShow = false }
        function toLoginPage() { store.state.loginpageshow = true }
        function offLoginPage() { store.state.loginpageshow = false }
        function isregister() {
            tologin.value = false
            toregister.value = true
        }
        function islogin() {
            tologin.value = true
            toregister.value = false
        }
        return {
            isshow: computed(() => store.state.siderBarIsShow),
            loginpage: computed(() => store.state.loginpageshow),
            unshowsider,
            toLoginPage,
            offLoginPage,
            username,
            isregister,
            islogin,
            tologin,
            toregister
        }
    }
})
</script>

<style scoped>
.sider-bar {
    position: absolute;
    height: 100%;
    width: 300px;
    top: 0px;
    right: -400px;
    z-index: 9;
    background-color: rgba(238, 237, 237, 0.774);
    transition: all 0.5s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}
.sider-home {
    height: 300px;
    width: inherit;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sider-home img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 20px;
}

.btn {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0.1px rgba(180, 180, 180, 0.167) solid;
    border-top: 0.1px rgba(180, 180, 180, 0.167) solid;
    height: 45px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.781);
}
.btn:hover {
    color: rgba(0, 0, 0, 0.61);
}
.sider-bar-show {
    right: 0px;
}
.login-reg-outer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.384);
}
.login-reg {
    padding: 15px;
    width: 300px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    position: absolute;
    top: 45%;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, -50%);
}
.register,
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.to-out {
    position: relative;
    top: -8px;
    left: -4px;
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
.login-reg .select {
    display: flex;
    justify-content: space-around;
}
.login-reg .select > div {
    width: 50%;
    height: 30px;
    text-align: center;
    user-select: none;
}
.login-reg-input {
    box-sizing: border-box;
    height: 40px;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 0.1px rgba(0, 0, 0, 0.103) solid;
}
.isselected {
    color: rgba(0, 0, 0, 0.548);
}
.login-reg-btn {
    text-align: center;
    width: 35%;
    height: 35px;
    position: absolute;
    border: 0.1px rgba(0, 0, 0, 0.034) solid;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    bottom: 20px;
    padding: 4px;
    background-color: rgb(124, 228, 170);
}
</style>
