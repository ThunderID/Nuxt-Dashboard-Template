<template>
  <div>
    <!-- NAVBAR -->
    <b-navbar toggleable="md" type="light" class='border-bottom p-0 p-md-1' variant="white">

      <!-- BRAND -->
      <b-navbar-brand href="/dashboard">
        <img src="/logo.png" height="40" class='pl-3'>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" class='border-0'></b-navbar-toggle>
      <!-- MENU -->
      <b-collapse is-nav id="nav_collapse">
        <!-- Left -->
        <b-navbar-nav class='px-3 mt-3 mt-md-0'>
          <b-nav-item href='/dashboard'>Dashboard</b-nav-item>  
          <b-nav-item href='/dashboard'>Akun</b-nav-item>
          <b-nav-item href='/dashboard'>Produk</b-nav-item>
          <b-nav-item href='/dashboard'>Supplier</b-nav-item>
          <b-nav-item href='/dashboard'>Pelanggan</b-nav-item>
          
          <b-nav-item-dropdown right text="Pengaturan">
            <b-dropdown-item href='/dashboard'>Akun</b-dropdown-item>
            <b-dropdown-item href='/dashboard'>Produk</b-dropdown-item>
            <b-dropdown-item href='/dashboard'>Supplier</b-dropdown-item>
            <b-dropdown-item href='/dashboard'>Pelanggan</b-dropdown-item>
          </b-nav-item-dropdown>  

        </b-navbar-nav>

        <!-- Right -->
        <b-navbar-nav class='ml-auto px-3'>
          <b-nav-item-dropdown right text="My Account">
            <b-dropdown-item href='/dashboard/my-account/update-profile'>Update Profile</b-dropdown-item>
            <b-dropdown-item href='/dashboard/my-account/update-password'>Update Password</b-dropdown-item>
            <b-dropdown-item href='/'>Logout</b-dropdown-item>
          </b-nav-item-dropdown>  
        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

    <!-- NUXT -->
    <nuxt/>

  </div>
</template>

<style>
body {
  background: #fff !important;
  border-top:2px solid #8CCB94;
}
</style>

