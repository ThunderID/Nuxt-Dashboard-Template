<template>
	<nuxt-child/>
</template>

<script>
export default { 
  layout: 'dashboard',
  middleware: 'auth'
}
</script>