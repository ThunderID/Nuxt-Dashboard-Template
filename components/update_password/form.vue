<template>
  <b-form @submit="onSubmit" validated>

    <b-form-group label="Password Lama">
      <b-form-input data-vv-name="Password" ref="password" v-validate="'required|min:6'" type='password' v-model="form.password" :state="errors.has('Password')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Password')">{{ errors.first('Password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Password Baru">
      <b-form-input data-vv-name="Password Baru" ref="password" v-validate="'required|min:6'" type='password' v-model="form.password" :state="errors.has('Password Baru')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Password Baru')">{{ errors.first('Password Baru') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Konfirmasi Password Baru">
      <b-form-input data-vv-name="Konfirmasi Password Baru" type='password' v-validate="'required|confirmed:password'" v-model="form.password_confirmation" :state="errors.has('Konfirmasi Password Baru')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Konfirmasi Password Baru')">{{ errors.first('Konfirmasi Password Baru') }}</b-form-invalid-feedback>
    </b-form-group>

    <div class='mt-4'>
      <b-button type="submit" variant="primary" :disabled="isLoading">
        <span v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> Update Password</span>
        <span v-else>Update Password</span>
      </b-button>
    </div>

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