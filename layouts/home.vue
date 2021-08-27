<template>
  <div>
    <the-home-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHomeHeader from '@/components/HomeHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    'the-home-header': TheHomeHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
html {
font-family: 'Inter', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  	max-width: 1920px;
	  margin: 0 auto;
}

* {
  	margin: 0px;
	  padding: 0px;
	  box-sizing: border-box;
}

@media(min-width: 1200px) {
	.container {
		max-width: 1230px;
    margin: 0 auto;
	}
}




</style>
