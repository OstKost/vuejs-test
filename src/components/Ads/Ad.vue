<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                  <v-card-media                    
                    height="260px"
                    :src="ad.imageSrc"
                  >                     
                  </v-card-media>
                  <v-card-text>
                      <h1 class="text--primary">{{ad.title}}</h1>
                      <p>{{ad.description}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- <v-btn color="warning" flat>Edit</v-btn> -->
                    <addEditAdModel :ad="ad" v-if="isOwner"></addEditAdModel>
                    <!-- <v-btn color="success">Buy</v-btn> -->
                    <app-buy-modal :ad="ad"></app-buy-modal>
                  </v-card-actions>
                </v-card>
                <v-layout row v-else>
                  <v-flex xs12 text-sm-center>
                      <v-progress-circular
                          :size="120"
                          :width="6"
                          indeterminate
                          color="primary"
                      ></v-progress-circular>
                  </v-flex>
              </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading() {
      return this.$store.getters.loading
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    addEditAdModel: EditAdModal
  }
}
</script>
