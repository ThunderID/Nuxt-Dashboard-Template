<template>
  <div>
    <b-navbar toggleable="md" type="light" class='border-bottom p-0 p-md-1' variant="">

      <!-- BRAND -->
      <b-navbar-brand href="/dashboard" class='pl-3 pr-1 mr-5'>Dashboard <i class='fas fa-chevron-right'></i></b-navbar-brand>

      <b-navbar-toggle target="nav_page_menu_collapse" class='border-0'></b-navbar-toggle>
      <!-- MENU -->
      <b-collapse is-nav id="nav_page_menu_collapse">
        <!-- Left -->
        <b-navbar-nav class='px-3'>
          <b-nav-item href='/dashboard'>Overview</b-nav-item>  
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
      
    <b-container class='mt-5'>
      <b-row>
          <b-col>
              <nuxt-child/>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>