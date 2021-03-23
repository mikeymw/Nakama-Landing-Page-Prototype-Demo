<template>
    <div class="position-relative w-100 pt-4 mono-profile">
        <img v-bind:src="require(`../assets/${profile.background}`)" alt="Profile Background Image"
             class="position-absolute w-100 h-100">
        <div class="position-absolute w-100 h-100 image-overlay"></div>
        <div class="position-absolute w-100 h-100 container-fluid p-0 avatar-wrapper">
            <div class="row h-100">
                <div class="col-12 col-md-6 h-100 pt-3 d-flex justify-content-center justify-content-md-start justify-content-lg-center align-items-end">
                    <img v-bind:src="require(`../assets/${profile.avatar}`)" alt="Profile Picture"
                         class="h-100 avatar">
                </div>
            </div>
        </div>
        <div class="container-fluid content-wrapper" v-bind:class="[isMale ? 'male' : 'female']">
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-6 pl-5 pl-lg-4 pr-4 d-flex align-items-center align-items-lg-start">
                    <p class="h1 text-white font-weight-bold ml-1 ml-sm-4 ml-md-auto ml-lg-0 mr-auto mr-md-0 mr-lg-auto mb-lg-5 title-eng">{{profile.titleEng}}</p>
                    <p class="display-4 text-white font-weight-bold ml-4 mt-lg-5 mb-2 mb-lg-0 title-chn">{{profile.titleChn}}</p>
                </div>
                <div class="col-12 col-lg-6 pr-4 pr-lg-5">
                    <p class="display-4 text-white text-right font-weight-bold mb-0 mt-lg-n5 name">{{profile.name}}</p>
                </div>
                <div class="col-12 col-md-9 offset-md-3 col-lg-6 offset-lg-6 pl-5 pl-lg-4 pr-4 py-4">
                    <p class="h1 text-white text-justify font-weight-bold pl-1 pl-sm-4 pl-md-0 mb-0 content">{{profile.content}}</p>
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
        },

        isMale: {
            type: Boolean,
            required: true,
        }
    },

    mounted() {
        const fluidContainers = this.$el.querySelectorAll(".container-fluid");
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(({ target, isIntersecting }) => {
                isIntersecting ? target.classList.add("active") : target.classList.remove("active");
            })
        }, { threshold: .25 });
        fluidContainers.forEach(container => observer.observe(container));
    },
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "src/styles/sections";

.avatar-wrapper {
    opacity: 0;
    top: 0;
    left: 0;
    transform: translateX(-10%);
    z-index: 0;
	transition: transform .75s ease-out, opacity .75s ease-in;

    @include media-breakpoint-down(sm) {
	    transform: translateY(10%);
    }

    img {
        max-width: 100%;
    }

    &.active {
        opacity: 1;
        transform: translate(0);
    }
}

.content-wrapper {
    &.male p {
	    text-shadow: 0 0 20px #18CAE6;
    }

	&.female p {
		text-shadow: 0 0 20px #EC04B2;
	}

	p {
        opacity: 0;
		transition: transform .75s ease-out, opacity .75s ease-in;

		@include media-breakpoint-down(sm) {
			&.display-4 {
				font-size: 2.75rem;
			}

			&.h1 {
				font-size: 2rem;
			}
		}

		@include media-breakpoint-down(xs) {
			&.display-4 {
				font-size: 1.5rem;
			}

			&.h1 {
				font-size: 1.25rem;
			}
		}
	}

    .title-eng {
	    transform: translateX(80px);

	    @include media-breakpoint-down(sm) {
		    transform: translateX(-50px);
	    }
    }

    .title-chn {
	    transform: translateX(50px);
    }

    .content {
	    transform: translateY(40px);
    }

	&.active {
		p {
			opacity: 1;
			transform: translate(0);
		}
	}
}

</style>