<template>
<div>
  <contact/>
</div>
 
</template>

<script>

import Contact from '@/components/contact'

export default {

  name: 'ContactPage',
  layout: 'home',
  components: {
    contact:Contact
  }
}
</script>

<style scoped>

@media(min-width: 1200px) {
	.container {
		max-width: 1230px;
    margin: 0 auto;
	}
}
</style>


