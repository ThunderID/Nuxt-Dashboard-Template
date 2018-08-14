<template>
  <div>
    <div v-if="mode === 'form'">
      <h1 class='text-uppercase'>Lupa Password</h1>
      <p>Masukkan email anda di bawah ini dan kami akan mengirimkan link ke email anda untuk mereset password</p>
      <Form class='m-t-lg' @SUCCESS="onSuccess"></Form>
      <p class='mt-2'>
        <nuxt-link to="/">Login</nuxt-link> &nbsp;·&nbsp;
        <nuxt-link to="/register">Register</nuxt-link>
      </p>
    </div>
    
    <div v-else-if="mode === 'success_message'">
      <h1 class='text-uppercase'>Lupa Password</h1>
      <p>Permintaan untuk reset password telah kami terima. Silahkan cek email anda untuk mendapatkan link untuk konfirmasi reset password</p>
      <p class='mt-2'>
        <nuxt-link to="/">Login</nuxt-link>
      </p>
    </div>

  </div>
</template>

<script>
import Form from "~/components/forget_password/form"
export default { 
  components: { Form },
  data () {
    return {
      mode: 'form'
    }
  },
  methods: {
    onSuccess (data) {
      this.mode = 'success_message'
    },
  }
}
</script>