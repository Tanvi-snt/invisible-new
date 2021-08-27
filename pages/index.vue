<template>
  <div>
    <bulletproof/>
    <billion />
    <card />
    <tab/>
     <team />
      <counter/>
    <client />
  </div>
</template>

<script>
import Bulletproof from '@/components/bulletproof'
import Billion from '@/components/billion'
import Client from '@/components/client'
import Card from '@/components/card'
import Team from '@/components/team'
import Counter from '@/components/counter'
import Tab from '@/components/tab'
export default {
  name: 'LandingPage',
  components: {
    bulletproof:Bulletproof,
    billion: Billion,
    client: Client,
    card: Card,
    tab: Tab,
    team: Team,
    counter: Counter
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

