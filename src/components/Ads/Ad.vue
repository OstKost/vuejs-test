<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                  <v-card-media                    
                    height="260px"
                    src="https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg"
                  >
                      
                  </v-card-media>

                  <v-card-text>
                      <h1 class="text--primary">Lorem, ipsum dolor.</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cumque!</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="warning" flat>Edit</v-btn>
                    <v-btn color="success">Buy</v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>
