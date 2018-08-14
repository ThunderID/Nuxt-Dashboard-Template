<template>
  <div>
    <h1 class='text-uppercase'>
      Login
    </h1>
    
    <p>Silakan masukkan email dan password anda</p>
    
    <LoginForm class='m-t-lg' @SUCCESS="onLoginSuccess" @FAIL="onLoginFail"></LoginForm>
    
    <p class='mt-2'>
      <nuxt-link to="/register">Register</nuxt-link> &nbsp;·&nbsp;
      <nuxt-link to="/forget-password">Lupa Password</nuxt-link>
    </p>
  </div>
</template>

<script>
import LoginForm from "~/components/login/form"
export default { 
  components: { LoginForm },
  methods: {
    onLoginSuccess (data) {
      $nuxt.$router.replace('/dashboard')
    },
    onLoginFail (data) {
      $nuxt.$router.replace('/')
    }
  }
}
</script>