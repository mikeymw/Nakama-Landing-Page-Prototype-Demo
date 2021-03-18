<template>
	<div class="home overflow-hidden">
		<section-hero></section-hero>
		<section-inspirations></section-inspirations>
        <section-connections></section-connections>
	</div>
</template>

<script>
import SectionHero from "@/components/SectionHero";
import SectionInspirations from "@/components/SectionInspirations";
import SectionConnections from "@/components/SectionConnections";

export default {
	name: "Home",
	components: {
		SectionHero,
		SectionInspirations,
        SectionConnections,
	},
	data () {
		return {
		
		};
	},
	computed: {
	
	},
	methods: {
	
	},
}
</script>

<style lang="scss" scoped>

</style>
