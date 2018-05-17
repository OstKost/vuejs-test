export default {
  state: {
    ads: [
      {
        title: 'squirrel',
        description: 'Img of squirrel',
        promo: false,
        imageSrc:
          'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: '1'
      },
      {
        title: 'planet',
        description: 'Img of planet',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '2'
      },
      {
        title: 'sky',
        description: 'Img of sky',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '3'
      },
      {
        title: 'bird',
        description: 'Img of bird',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '4'
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = Math.floor(Math.random() * 100).toString()

      commit('createAd', payload)
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
