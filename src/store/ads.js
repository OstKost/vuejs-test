import * as firebase from 'firebase'

class Ad {
  constructor(
    title,
    description,
    ownerId,
    promo = false,
    imageSrc = '',
    id = null
  ) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.promo = promo
    this.imageSrc = imageSrc
    this.id = id
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
    loadAds(state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd({ commit, getters }, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.promo,
          payload.imageSrc
        )
        const ad = await firebase
          .database()
          .ref('ads')
          .push(newAd)
        commit('createAd', { ...newAd, id: ad.key })
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds({ commit }) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await firebase
          .database()
          .ref('ads')
          .once('value')
        const ads = fbVal.val()

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(
              ad.title,
              ad.description,
              ad.ownerId,
              ad.promo,
              ad.imageSrc,
              key
            )
          )
        })

        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
