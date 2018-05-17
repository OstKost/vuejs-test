<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">AD list</h1>
                <v-card class="elevation-10 mb-3" v-for="item of items" :key="item.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media height="160px" :src="item.imageSrc">

                            </v-card-media>
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
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    title: 'squirrel',
                    description: 'Img of squirrel',
                    promo: false,
                    imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
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
                    promo: false,
                    imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
                    id: '4'
                }
            ]
        }
    }
}
</script>
