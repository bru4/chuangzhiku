import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import brand from './modules/brand'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    brand
  }
})

export default store
