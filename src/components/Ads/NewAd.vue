<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">New AD</h1>
                <v-form ref="form" v-model="valid" validation class="mb-3">
                    <v-text-field name="title" label="AD title" type="text" v-model="title" :rules="[v => !!v || 'Title is required']" required></v-text-field>
                    <v-text-field name="description" label="Description" type="text" v-model="description" :rules="[v => !!v || 'Description is required']" required multi-line></v-text-field>
                </v-form>
                <v-layout row mb-3>
                    <v-flex xs12>
                        <v-btn color="grey" class="white--text">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row mb-3>
                    <v-flex xs12>
                        <img src="none" alt="Uploaded Image" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch :label="'Is Promo?'" v-model="promo" color="primary"></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="success"
                            @click="createAd"
                            :disabled="!valid || loading"
                            :loading="loading"
                            >Create AD</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc:
            'https://www.sunhome.ru/i/wallpapers/200/planeta-zemlya-kartinka.960x540.jpg'
        }

        this.$store
          .dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
