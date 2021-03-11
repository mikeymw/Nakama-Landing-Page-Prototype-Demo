<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
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
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue/src/index";

@import "~vue-select/src/scss/vue-select.scss";

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
