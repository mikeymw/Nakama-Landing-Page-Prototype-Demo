<template>
	<div class="home">
		<section-hero></section-hero>
		<section-inspirations></section-inspirations>
        <section-connections></section-connections>
        <section-fun></section-fun>
        <section-people></section-people>
        <custom-footer></custom-footer>
	</div>
</template>

<script>
import SectionHero from "@/components/SectionHero";
import SectionInspirations from "@/components/SectionInspirations";
import SectionConnections from "@/components/SectionConnections";
import SectionFun from "@/components/SectionFun";
import SectionPeople from "@/components/SectionPeople";
import CustomFooter from "@/components/CustomFooter";

export default {
	name: "Home",
	components: {
		SectionHero,
		SectionInspirations,
        SectionConnections,
        SectionFun,
        SectionPeople,
        CustomFooter
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
