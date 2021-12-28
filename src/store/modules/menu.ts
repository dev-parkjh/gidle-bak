import {Module} from "vuex";
import {RootState} from "@/store";

export interface MenuState {
  menuIdx: number;
}

export const menu: Module<MenuState, RootState> = {
  namespaced: true,
  state: () => ({
    menuIdx: 1,
  }),
  getters: {
    getMenuIdx(state) {
      return state.menuIdx
    }
  },
  mutations: {
    setMenuIdx(state, idx) {
      state.menuIdx = idx;
    }
  },
  actions: {},
  modules: {}
}
