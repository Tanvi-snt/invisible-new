<template>
<div>

<projectCloud/>

</div>
 
</template>

<script>


import ProjectCloud from '@/components/projectCloud'



export default {


  layout: 'home',
  name: 'ProjectThreePage',
  components: {
        projectCloud: ProjectCloud
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
