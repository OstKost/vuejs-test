import store from '../store'

export default function(to, from, next) {
  // store undefined
  if (store.getters.user) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
