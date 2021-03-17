<template>
	<div class="home overflow-hidden">
		<section-hero></section-hero>
		<section-inspirations></section-inspirations>
	</div>
</template>

<script>
import SectionHero from "@/components/SectionHero";
import SectionInspirations from "@/components/SectionInspirations";
export default {
	name: "Home",
	components: {
		SectionHero,
		SectionInspirations
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
