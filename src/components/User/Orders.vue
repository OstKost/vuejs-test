<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-xs-center pt-5" v-if="loading">
                 <v-progress-circular
                  :size="120"
                  :width="6"
                  indeterminate
                  color="primary"
                  ></v-progress-circular>
            </v-flex>    
            <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !==0">
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list two-line subheader>
                    <v-list-tile avatar v-for="item of orders" :key="item.id">
                        <v-list-tile-action>
                            <v-checkbox @change="markDone(item)" :input-value="item.done" color="success"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{item.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{item.phone}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn class="primary" :to="'/ad/' + item.adId">Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 v-else>
                <h2 secondary>You have no orders.</h2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    orders() {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone(item) {
      this.$store
        .dispatch('markOrder', { id: item.id, status: item.done })
        .then(() => {
          item.done = !item.done
        })
        .catch(() => {})
    }
  },
  created() {
    this.$store.dispatch('fetchOrders')
  }
}
</script>
