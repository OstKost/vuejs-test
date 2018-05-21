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
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {},
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAg3wnp-nIu1tERg5NYXAL4ZWE_n7GdTC0',
      authDomain: 'wfs-vue-test.firebaseapp.com',
      databaseURL: 'https://wfs-vue-test.firebaseio.com',
      projectId: 'wfs-vue-test',
      storageBucket: 'wfs-vue-test.appspot.com',
      messagingSenderId: '815789642506'
    })

    firebase.auth().onAuthStateChanged(user => {
      console.log('onAuthStateChanged ')
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
        this.$store.dispatch('fetchOrders')
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
