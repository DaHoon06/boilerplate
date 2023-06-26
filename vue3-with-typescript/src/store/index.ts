import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

namespace STORE {
  export interface UtilState {

  }
}

export interface RootState {
  Util: STORE.UtilState
}

export default createStore({
  plugins: [
    createPersistedState({
      paths: [''],
    }),
  ]
})
