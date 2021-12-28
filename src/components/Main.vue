<template>
  <div class="main">
    <Nav/>
    <Contents/>
    <div class="status" :class="{active :getIsServerOn()}">
      <div class="msg">{{ getStatusMsg() }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Nav from './Nav.vue';
import Contents from './Contents.vue';
import {useStore} from "vuex";

@Options({
  components: {
    Nav,
    Contents,
  },
  props: {},
})

export default class Main extends Vue {
  store = useStore();

  getIsServerOn(): number {
    return this.store.getters['server/getIsServerOn'];
  }

  getStatusMsg(): string {
    let msg = "서버가 시작되지 않았습니다.";

    if (this.getIsServerOn()) {
      msg = "'192.168.0.16" + ":8080" + "'에서 서버가 실행중입니다.";
    }

    return msg;
  }
}
</script>

<style scoped>
@import '../assets/css/style.css';

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: var(--text-color);
  background-color: var(--background-color);
}

.status {
  bottom: 0;
  height: 28px;
  background-color: var(--non-active-status-color);
  transition: 500ms;
}

.status .msg {
  font-size: 12px;
  line-height: 30px;
  margin-left: 8px;
}

.status .msg::before {
  content: "•";
}

.status.active {
  background-color: var(--switch-active-color);
  transition: 500ms;
}

</style>
