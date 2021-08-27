<template>
<div>

<projectone/>

</div>
 
</template>

<script>


import ProjectOne from '@/components/projectone'



export default {


  layout: 'home',
  name: 'ProjectOnePage',
  components: {
        projectone: ProjectOne
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
