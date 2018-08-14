<template>
  <b-form @submit="onSubmit" validated>

    <b-form-group label="Nama">
      <b-form-input data-vv-name="Nama" v-validate="'required|min:3'" v-model="form.name" :state="errors.has('Nama')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Nama')">{{ errors.first('Nama') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Email">
      <b-form-input data-vv-name="Email" v-validate="'email'" type='email' v-model="form.username" :state="errors.has('Email')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Email')">{{ errors.first('Email') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input data-vv-name="Password" ref="password" v-validate="'required|min:6'" type='password' v-model="form.password" :state="errors.has('Password')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Password')">{{ errors.first('Password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Konfirmasi Password">
      <b-form-input data-vv-name="Konfirmasi Password" type='password' v-validate="'required|confirmed:password'" v-model="form.password_confirmation" :state="errors.has('Konfirmasi Password')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Konfirmasi Password')">{{ errors.first('Konfirmasi Password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-button type="submit" variant="primary" block :disabled="isLoading">
      <span v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> Register</span>
      <span v-else>Register</span>
    </b-button>

  </b-form>
</template>

<script>
import Register from '~/apollo/gql/authentication/Register'

export default {
  data () {
    return {
      form: {
        name: '',
        username: '',
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
          mutation: Register,
          variables: vm.form
        }).then(function(res) {
          if (res.data.Register) {
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