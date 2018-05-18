<template>
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">AD list</h1>
                <v-card class="elevation-10 mb-3" v-for="item of myAds" :key="item.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media height="160px" :src="item.imageSrc"></v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primay">{{item.title}}</h2>
                                <p>{{item.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="info" :to="'/ad/' + item.id">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row v-else-if="!loading && myAds.length === 0">
          <v-flex xs12 text-sm-center>
              <h1 primary-title>You have no ADs</h1>
          </v-flex>
        </v-layout>
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
    </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>
