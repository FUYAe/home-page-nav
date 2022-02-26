<template>
  <div class="main">
    <HomePage />
    <ShowBar v-if="moreShow" />
    <div class="more" v-if="!moreShow" @click="showMore">
      <router-link to="/more">更多</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import HomePage from "./views/HomePage.vue"
import ShowBar from "./views/ShowBar.vue"
import { compile, computed, defineComponent } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  components: { HomePage, ShowBar },
  setup() {
    const store = useStore()
    const showMore = () => {
      store.commit("moreShowTrue")
    }
    return {
      moreShow: computed(() => {
        return store.state.moreShow
      }),
      showMore
    }
  }
})
</script>
<style >
* {
  user-select: none;
}
div {
  box-sizing: border-box;
}
.main {
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      closest-side,
      rgb(190, 251, 255),
      rgba(255, 134, 134, 0)
    ),
    radial-gradient(closest-side, rgb(238, 255, 251), rgba(204, 230, 252, 0)),
    radial-gradient(closest-side, rgb(219, 247, 255), rgba(194, 226, 255, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
}
.more {
  position: absolute;
  top: 5px;
  right: 10px;
}
@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax;
  }
  25% {
    background-size: 120vmax 120vmax, 70vmax 70vmax, 80vmax 80vmax;
    background-position: 70vmax -70vmax, 50vmax -20vmax, 10vmax 10vmax;
  }
  50% {
    background-size: 110vmax 110vmax, 60vmax 60vmax, 70vmax 70vmax;
    background-position: -70vmax -80vmax, 70vmax -30vmax, 30vmax 10vmax;
  }
  75% {
    background-size: 90vmax 130vmax, 60vmax 80vmax, 80vmax 90vmax;
    background-position: -60vmax -80vmax, 70vmax -30vmax, 20vmax 10vmax;
  }
}
* {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: #232323;
}
</style>
