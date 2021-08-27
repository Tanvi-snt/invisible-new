<template>
<div>

<projectTwo/>

</div>
 
</template>

<script>


import ProjectTwo from '@/components/projectTwo'



export default {


  layout: 'home',
  name: 'ProjectTwoPage',
  components: {
        projectTwo: ProjectTwo
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
