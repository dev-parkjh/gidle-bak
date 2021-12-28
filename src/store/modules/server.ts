import {Module} from "vuex";
import {RootState} from "@/store";

export interface ServerState {
  isServerOn: boolean;
}

export const server: Module<ServerState, RootState> = {
  namespaced: true,
  state: () => ({
    isServerOn: false,
  }),
  getters: {
    getIsServerOn(state) {
      return state.isServerOn
    }
  },
  mutations: {
    setIsServerOn(state, isServerOn) {
      state.isServerOn = isServerOn;
    }
  },
  actions: {},
  modules: {}
}
