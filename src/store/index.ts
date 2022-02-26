
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            siderBarIsShow: false,
            loginpageshow: false,
            moreShow: false
        }
    },
    mutations: {
        moreShowTrue(state: any) {
            state.moreShow = true
            console.log("llllllllll")
        }
    }
})


export default store