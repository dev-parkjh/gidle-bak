<template>
  <div class="contents">
    <div v-if="getMenuIdx() === 0">
      <Share/>
    </div>
    <div v-if="getMenuIdx() === 1">
      <User/>
    </div>
    <div v-if="getMenuIdx() === 2">
      <Log/>
    </div>
    <div v-if="getMenuIdx() === 3">
      <Info/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from "vuex";
import Share from "@/components/contents/Share.vue";
import User from "@/components/contents/User.vue";
import Log from "@/components/contents/Log.vue";
import Info from "@/components/contents/Info.vue";

@Options({
  components: {Info, Log, User, Share},
  props: {}
})

export default class Contents extends Vue {
  store = useStore();

  getMenuIdx(): number {
    return this.store.getters['menu/getMenuIdx'];
  }
}
</script>

<style scoped>
.contents {
  padding: 6px 20px;
  height: 100%;
}

.contents div {
  animation: fadein 700ms;
}

</style>
