<template>
    <div class="home position-relative">
	    <div class=" w-100 p-1 header">
		    <button type="button"
		            class="btn btn-outline-icon-regular-light p-0 border-0 rounded-circle icon-button"
		            href="#" tabindex="0" v-b-tooltip.bottom.hover.v-text-primary-pale-light.noninteractive
		            v-bind:title="'Sign In'">
			    <font-awesome-icon class="w-100 h-100"
			                       v-bind:icon="['fad', 'user-circle']">
			    </font-awesome-icon>
		    </button>
	    </div>
    </div>
</template>

<script>
import {
	VBTooltip,
} from "bootstrap-vue";

export default {
    name: "Home",
	
	directives: {
		"b-tooltip" : VBTooltip,
	},
	
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
.header {
	height: 64px;
}

.icon-button {
	width: 40px;
	height: 40px;
	font-size: 16px;
}
</style>
