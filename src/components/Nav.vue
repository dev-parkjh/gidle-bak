<template>
  <div class="nav">
    <div class="logo">
      <em class="material-icons md-24">folder_open</em><span class="app-name">gidle</span>
    </div>
    <div class="menu">
      <div v-for="(menu, index) in menuList" :key="index" @click="clickMenu(index)" :class="{active: getMenuIdx() === index}">{{ menu }}</div>
    </div>
    <div class="settings">
      <Switch @chkBoxOnclick="setIsServerOn" />
      <em class="material-icons" @click="changeTheme()">settings</em>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {customErr, querySelector} from "@/assets/ts/CommonUtil";
import {useStore} from "vuex";
import Switch from "@/components/Switch.vue";

@Options({
  components: {Switch},
  props: {}
})

export default class Nav extends Vue {
  store = useStore();

  currentIdx = 0;
  menuList = ['공유', '사용자', '로그', '정보'];

  changeTheme(targetTheme: string): boolean {
    const app = querySelector('#app');

    if (!app) {
      return customErr('app Element가 존재하지 않습니다.');
    }

    // targetTheme 값을 입력하지 않은 경우 현재 테마 스위칭
    if (typeof targetTheme == 'undefined') {
      let theme: string | null = app.getAttribute('app-theme');
      if (theme == null || theme == 'light') targetTheme = 'dark';
      else targetTheme = 'light';
    }

    if (!(targetTheme == 'light' || targetTheme == 'dark')) {
      console.log(targetTheme)
      return customErr('잘못된 Theme 값이 입력되었습니다.');
    }

    app.setAttribute('app-theme', targetTheme);

    return true;
  }

  clickMenu(index: number): void {
    this.store.commit('menu/setMenuIdx', index);
  }

  getMenuIdx(): number {
    return this.store.getters['menu/getMenuIdx'];
  }

  setIsServerOn(isServerOn: boolean): void {
    this.store.commit('server/setIsServerOn', isServerOn);
  }
}
</script>

<style scoped>
.nav {
  height: 48px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
}

.logo, .menu, .settings {
  display: flex;
  align-items: center;
}

.logo .app-name {
  padding: 0 8px;
  font-size: 24px;
}

.menu {
  display: flex;
  margin-right: 26px;
}

.menu div {
  color: var(--non-active-color);
  font-size: 18px;
  margin: 0 20px;
}

.menu div:hover {
  color: var(--text-color);
  cursor: pointer;
}

.menu .active {
  /*font-weight: bold;*/
  color: var(--text-color);
}

.settings em {
  padding-left: 10px;
}

</style>
