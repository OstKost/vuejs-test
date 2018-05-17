<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list two-line subheader>
                    <v-list-tile avatar v-for="item of items" :key="item.id">
                        <v-list-tile-action>
                            <v-checkbox @change="markDone(item)" :input-value="item.done" color="success"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{item.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{item.phone}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn class="primary" :to="'/ad/' + item.id">Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Name',
          phone: '55555555555',
          adId: 2,
          done: false
        }
      ]
    }
  },
  methods: {
    markDone(item) {
      item.done = !item.done
    }
  }
}
</script>
