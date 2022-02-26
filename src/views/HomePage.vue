<template>
  <div class="home" @click="unshowsider">
    <SearchBar />
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import ActBar from "@/components/ActBar.vue";
import SiderBar from "@/components/SiderBar.vue";
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"
export default defineComponent({
  components: { SearchBar, ActBar, SiderBar, },
  setup() {
    const store = useStore()
    function unshowsider() { store.state.siderBarIsShow = false }
    return {
      unshowsider
    }
  }
})
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
