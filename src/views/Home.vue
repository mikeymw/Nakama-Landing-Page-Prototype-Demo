<template>
	<div class="home">
		<section-hero></section-hero>
		<section-inspirations></section-inspirations>
        <section-connections></section-connections>
        <section-fun></section-fun>
	</div>
</template>

<script>
import SectionHero from "@/components/SectionHero";
import SectionInspirations from "@/components/SectionInspirations";
import SectionConnections from "@/components/SectionConnections";
import SectionFun from "@/components/SectionFun";

export default {
	name: "Home",
	components: {
		SectionHero,
		SectionInspirations,
        SectionConnections,
        SectionFun,
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
.home {
	height: 100%;
	overflow-y: scroll;
}

</style>
