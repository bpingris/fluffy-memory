import { TOGGLE_DRAWER } from "@/store/mutations.type";

export default {
  state: {
    toggle: true
  },
  mutations: {
    [TOGGLE_DRAWER](state, payload) {
      state.toggle = payload;
    }
  }
};
