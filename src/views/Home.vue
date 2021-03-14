<template>
    <div class="home">
	    <div class="position-relative w-100 hero">
		    <img v-bind:src="require('../assets/DJI_0662-HDR-2.jpg')" alt="Hero Image"
		         class="w-100">
		    <div class="position-absolute h-100 bg-white test"></div>
		    <div class="position-absolute w-100 h-100 image-overlay"></div>
	    </div>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
	    <h1>testing</h1>
    </div>
</template>

<script>

export default {
    name: "Home",
    components: {

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
.hero {
	
	img {
		max-height: 768px;
		object-fit: cover;
	}
	
	.image-overlay {
		top: 0;
		left: 0;
		background-color: rgba(54,54,54,.6);
		z-index: 1;
	}
	
	.test {
		top: 0;
		left: calc(50% - 5px);
		width: 10px;
	}
}
</style>
