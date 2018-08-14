<template>
  <div class='h-100 d-flex align-items-center login-body'>

    <b-container>

      <b-row align-h="center">
        <b-col cols="12" class='text-center mb-4'>
          <nuxt-link to="/">
            <img src="~/static/logo-icon.png">
          </nuxt-link>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mb-5">
        <b-col cols="12" sm="8" lg="6">
          <b-card class='shadow bg-light'>
            <nuxt/>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<style lang='scss'>
html, body {
  min-height: 100% !important;
  height:100%;
}

.login-body {
  min-height: 100% !important;
  height: 100% !important;
  background: #fff url('/bg/2.jpg') bottom center;
  background-size: cover;
  border-top:2px solid #8CCB94;
}

div#__nuxt {
  min-height:100%;
  height:100%;
  div#__layout {
    min-height:100%;
    height:100%;
  }
}
</style>