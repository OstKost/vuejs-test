<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email" :rules="emailRules"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" :counter="6" :rules="passRules"></v-text-field>
              <v-text-field id="confirm-password" prepend-icon="lock" name="confirm-password" label="Confirm password" type="password" v-model="confirmPassword" :counter="6" :rules="confirmPassRules"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" :disabled="!valid || loading" :loading="loading">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v =>
          (v && v.length >= 6) || 'Password must be equal or mode than 6 chars'
      ],
      confirmPassRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Passwords do not match'
      ]
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store
          .dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
