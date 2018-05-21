import * as firebase from 'firebase'

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log('setUser ', payload)
      state.user = payload
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        console.log('registerUser')
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser({ commit }, { email, password }) {
      console.log('loginUser START')
      commit('clearError')
      commit('setLoading', true)
      try {
        const fbVal = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        console.log('loginUser ', fbVal.user)
        commit('setUser', new User(fbVal.user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      console.log('loginUser END')
    },
    async autoLoginUser({ commit }, payload) {
      console.log('autoLoginUser ')
      commit('setUser', new User(payload.uid))
    },
    async logoutUser({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isUserLoggedIn(state) {
      return state.user !== null
    }
  }
}
