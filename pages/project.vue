<template>
<div>
    <project1/>
    <project2/>
    <project3/>


</div>
 
</template>

<script>

import Project1 from '@/components/project1'
import Project2 from '@/components/project2'
import Project3 from '@/components/project3'



export default {

  layout: 'home',
  name: 'ProjectPage',
  components: {
    project1: Project1,
    project2: Project2,
    project3: Project3
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
