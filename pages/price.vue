<template>
<div>
  <price/>
</div>
 
</template>

<script>

import Price from '@/components/price'

export default {

  layout: 'home',
  name: 'PricePage',
  components: {
    price:Price
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


