// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAg3wnp-nIu1tERg5NYXAL4ZWE_n7GdTC0',
      authDomain: 'wfs-vue-test.firebaseapp.com',
      databaseURL: 'https://wfs-vue-test.firebaseio.com',
      projectId: 'wfs-vue-test',
      storageBucket: 'wfs-vue-test.appspot.com',
      messagingSenderId: '815789642506'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
  created() {
    this.$store.dispatch('fetchAds')
  }
})
