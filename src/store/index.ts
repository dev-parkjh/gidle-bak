import {createStore} from 'vuex'
import {menu, MenuState} from "@/store/modules/menu";
import {server, ServerState} from "@/store/modules/server";

export interface RootState {
  menu: MenuState;
  server: ServerState;
}

export default createStore({
  modules: {menu, server}
})
