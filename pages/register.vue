<template>
  <div>
    <h1 class='text-uppercase'>
      Register
    </h1>
    
    <p>Silakan masukkan data anda di bawah ini untuk membuat akun</p>
    
    <Form class='m-t-lg'></Form>
    
    <p class='mt-2'>
      <nuxt-link to="/">Login</nuxt-link> &nbsp;·&nbsp;
      <nuxt-link to="/forget-password">Lupa Password</nuxt-link>
    </p>
  </div>
</template>

<script>
import Form from "~/components/register/form"
export default { 
  components: { Form },
  methods: {
    onRegisterSuccess (data) {
      $nuxt.$router.replace('/')
    },
    onRegisterFail (data) {
      $nuxt.$router.replace('/')
    }
  }
}
</script>