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
                        <v-btn color="orange" class="white--text" @click="triggerUpload">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                            <input ref='fileInput' type="file" name="uplImg" id="uplImg" style="display: none;" accept="image/*" @change="onFileChange">
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row mb-3>
                    <v-flex xs12>
                        <img :src="imageSrc" alt="Uploaded Image" height="100" v-if="imageSrc">
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
                            :disabled="!valid || !image || loading"
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store
          .dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
