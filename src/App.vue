<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {

    },
    metaInfo: {
        titleTemplate: "%s | NAKAMA",
    },
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
    created () {

    },
    mounted () {
        window.addEventListener(
            "online",
            e => {
                this.$store.commit("layout/online");
            }
        );

        window.addEventListener(
            "offline",
            e => {
                this.$store.commit("layout/offline");
            }
        );
    }
};
</script>

<style lang="scss">
@import "~vue-select/src/scss/vue-select.scss";

$theme-colors: (
	"page-bg-light": #F8F8F8,
	"form-input-bg-light": #F8F8F8,
	
	"text-primary-pale-light": #404040,
	"text-primary-regular-light": #363636,
	"text-primary-dull-light": #282828,
	
	"text-secondary-pale-light": #8A8A8A,
	"text-secondary-regular-light": #808080,
	"text-secondary-dull-light": #707070,
	
	"icon-bg-light": #E5E5E5,
	"icon-pale-light": #8A8A8A,
	"icon-regular-light": #808080,
	
	"disabled-light": #CACACA,
	"channel-navbar-light": #FFFAF8,
	
	"theme": #EE4B22,
	"theme-pale": #FFCCC0,
	
	//"custom-blue": #0077FF,
	"notification-green": #17D63C,
	"transparent": rgba(255,255,255,0),
);

@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue/src/index";
$tooltip-bg-blur: 2px;
$tooltip-bg-transparency: 0.75;
@import "./src/styles/tooltip";

html,
body {
    position: relative;
    //height: 100%;

    background-color: rgba(245, 245, 245, 1);

    font-family:
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Helvetica Neue,
        Arial,
        "Microsoft JhengHei",
        sans-serif,
        Apple Color Emoji,
        Segoe UI Emoji,
        Segoe UI Symbol,
        Noto Color Emoji;

    overflow-x: hidden;

    @include media-breakpoint-down(md) {
        overflow-y: hidden;
    }
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.rounded-modal {
    border-radius: 1rem;
}
</style>
