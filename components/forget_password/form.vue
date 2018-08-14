<template>
  <b-form @submit="onSubmit" validated>

    <b-form-group label="Email">
      <b-form-input data-vv-name="Email" v-validate="'email'" type='email' v-model="form.username" :state="errors.has('Email')"></b-form-input>
      <b-form-invalid-feedback :force-show="errors.has('Email')">{{ errors.first('Email') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-button type="submit" variant="primary" block :disabled="isLoading">
      <span v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> Kirim Link untuk Reset Password</span>
      <span v-else>Kirim Link untuk Reset Password</span>
    </b-button>

  </b-form>
</template>

<script>
import ForgetPassword from '~/apollo/gql/authentication/ForgetPassword'

export default {
  data () {
    return {
      form: {
        username: '',
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
          mutation: ForgetPassword,
          variables: vm.form
        }).then(function(res) {
          if (res.data.ForgetPassword) {
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