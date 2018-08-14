<template>
  <b-form @submit="onSubmit" validated>

    <b-form-group label="Password">
      <b-form-input data-vv-name="Password" ref="password" v-validate="'required|min:6'" type='password' v-model="form.password" :state="errors.has('Password')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Password')">{{ errors.first('Password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Konfirmasi Password">
      <b-form-input data-vv-name="Konfirmasi Password" type='password' v-validate="'required|confirmed:password'" v-model="form.password_confirmation" :state="errors.has('Konfirmasi Password')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Konfirmasi Password')">{{ errors.first('Konfirmasi Password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-button type="submit" variant="primary" block :disabled="isLoading">
      <span v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> Reset Password</span>
      <span v-else>Reset Password</span>
    </b-button>

  </b-form>
</template>

<script>
import ResetPassword from '~/apollo/gql/authentication/ResetPassword'

export default {
  props: {
    token: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        password: '',
        password_confirmation: ''
      },
      isLoading: false
    }
  },
  methods: {
    onSubmit (e) {
      let vm = this

      e.preventDefault()

      vm.isLoading = true
      vm.$validator.validateAll()
      if (vm.errors.count() === 0) {
        vm.$apollo.mutate({
          mutation: ResetPassword,
          variables: {
            token: this.token,
            username: this.username,
            password: this.form.password,
          }
        }).then(function(res) {
          if (res.data.ResetPassword) {
            vm.$emit('SUCCESS', res)
          } else {
            vm.$emit('FAIL', res)
          }
          vm.isLoading = false
        }).catch(function(e) {
          vm.$emit('FAIL', e)
          vm.isLoading = false
        })
      } else {
        vm.isLoading = false
      }
    }
  }
}
</script>