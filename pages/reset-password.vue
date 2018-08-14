<template>
  <div>
    <div v-if="mode === 'form'">
      <h1 class='text-uppercase'>Reset Password</h1>
      <p>Masukkan password baru anda di bawah ini</p>
      <Form class='m-t-lg' @SUCCESS="onSuccess"></Form>
      <p class='mt-2'>
        <nuxt-link to="/">Login</nuxt-link> &nbsp;·&nbsp;
        <nuxt-link to="/register">Register</nuxt-link>
      </p>
    </div>
    
    <div v-else-if="mode === 'success_message'">
      <h1 class='text-uppercase'>Reset Password</h1>
      <p>Password anda telah berhasil diganti. Untuk login silakan <nuxt-link to="/">klik di sini</nuxt-link></p>
    </div>

  </div>
</template>

<script>
import Form from "~/components/reset_password/form"
export default { 
  components: { Form },
  data () {
    return {
      mode: 'success_message'
    }
  },
  methods: {
    onSuccess (data) {
      this.mode = 'success_message'
    },
  }
}
</script>