<template>
    <div class="position-relative w-100 pt-4 mt-3 mono-profile">
        <img v-bind:src="require(`../assets/${profile.background}`)" alt="Profile Background Image"
             class="position-absolute w-100 h-100">
        <div class="position-absolute w-100 h-100 image-overlay"></div>
        <div class="position-absolute w-100 h-100 container-fluid avatar-wrapper">
            <div class="row h-100">
                <div class="col-12 col-md-6 h-100 d-flex justify-content-center align-items-end">
                    <img v-bind:src="require(`../assets/${profile.avatar}`)" alt="Profile Picture"
                         class="h-100 mr-5 avatar">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-6 pl-5 pr-4 d-flex align-items-center align-items-lg-start">
                    <p class="h1 text-white font-weight-bold ml-4 ml-md-auto ml-lg-0 mr-auto mr-md-0 mr-lg-auto mb-lg-5">{{profile.titleEng}}</p>
                    <p class="display-4 text-white font-weight-bold ml-4 mt-lg-5 mb-lg-0">{{profile.titleChn}}</p>
                </div>
                <div class="col-12 col-lg-6 pr-4 pr-lg-5">
                    <p class="display-4 text-white text-right font-weight-bold mb-0 mt-lg-n5">{{profile.name}}</p>
                </div>
                <div class="col-12 col-md-9 offset-md-3 col-lg-6 offset-lg-6 pl-5 pr-4 py-4">
                    <p class="h1 text-white text-justify font-weight-bold pl-4 pl-md-0 mb-0">{{profile.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MonoProfile",

    props: {
        profile: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "src/styles/sections";

.avatar-wrapper {
    top: 0;
    left: 0;
    z-index: 0;
}

p {
    text-shadow: 0 0 20px #18CAE6;
}

</style>