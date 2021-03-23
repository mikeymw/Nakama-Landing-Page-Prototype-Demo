<template>
    <div class="position-relative w-100 d-lg-flex d-block duo-profile">
        <div class="position-relative px-0 pt-4 profile-left">
            <img v-bind:src="require(`../assets/${profileLeft.background}`)" alt="Profile Background Image"
                 class="position-absolute w-100 h-100">
            <div class="position-absolute w-100 h-100 image-overlay"></div>
            <div class="position-absolute w-100 h-100 container-fluid pl-0 avatar-wrapper left">
                <div class="row h-100">
                    <div class="col-12 col-xl-11 h-100 d-flex justify-content-center justify-content-md-start justify-content-lg-center align-items-end">
                        <img v-bind:src="require(`../assets/${profileLeft.avatar}`)" alt="Profile Picture"
                             class="h-100 avatar">
                    </div>
                </div>
            </div>
            <div class="container-fluid content-wrapper" v-bind:class="[isMale ? 'male' : 'female']">
                <div class="row">
                    <div class="col-12 pl-5 pl-lg-4 pr-4 d-flex justify-content-between align-items-center">
                        <p class="h1 text-white font-weight-bold ml-1 ml-sm-4 ml-md-auto ml-lg-0 title-eng left">{{profileLeft.titleEng}}</p>
                        <p class="display-4 text-white font-weight-bold ml-4 ml-lg-0 mb-2 title-chn left">{{profileLeft.titleChn}}</p>
                    </div>
                    <div class="col-12 px-4">
                        <p class="display-4 text-white text-right font-weight-bold mb-2 name left">{{profileLeft.name}}</p>
                    </div>
                    <div class="col-12 col-md-9 offset-md-3 col-lg-12 offset-lg-0 pl-5 pl-lg-4 pr-4 py-4">
                        <p class="h1 text-white text-justify font-weight-bold pl-1 pl-sm-4 pl-md-0 mb-0 content left">{{profileLeft.content}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-relative px-0 pt-4 profile-right">
            <img v-bind:src="require(`../assets/${profileRight.background}`)" alt="Profile Background Image"
                 class="position-absolute w-100 h-100">
            <div class="position-absolute w-100 h-100 image-overlay"></div>
            <div class="position-absolute w-100 h-100 container-fluid pr-0 avatar-wrapper right">
                <div class="row h-100">
                    <div class="col-12 col-xl-11 offset-xl-1 h-100 d-flex justify-content-center justify-content-md-start justify-content-lg-center align-items-end">
                        <img v-bind:src="require(`../assets/${profileRight.avatar}`)" alt="Profile Picture"
                             class="h-100 avatar">
                    </div>
                </div>
            </div>
            <div class="container-fluid content-wrapper" v-bind:class="[isMale ? 'male' : 'female']">
                <div class="row d-flex">
                    <div class="col-12 pl-5 pl-lg-4 pr-4 d-flex flex-lg-row-reverse justify-content-between align-items-center">
                        <p class="h1 text-white font-weight-bold ml-1 ml-sm-4 ml-md-auto ml-lg-0 title-eng right">{{profileRight.titleEng}}</p>
                        <p class="display-4 text-white font-weight-bold ml-4 ml-lg-0 mb-2 title-chn right">{{profileRight.titleChn}}</p>
                    </div>
                    <div class="col-12 px-4">
                        <p class="display-4 text-white text-right text-lg-left font-weight-bold mb-2 name right">{{profileRight.name}}</p>
                    </div>
                    <div class="col-12 col-md-9 offset-md-3 col-lg-12 offset-lg-0 pl-5 pl-lg-4 pr-4 py-4">
                        <p class="h1 text-white text-justify font-weight-bold pl-1 pl-sm-4 pl-md-0 mb-0 content right">{{profileRight.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DuoProfile",

    props: {
        profileLeft: {
            type: Object,
            required: true,
        },

        profileRight: {
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

.profile-left, .profile-right {
    width: 50%;

    @include media-breakpoint-down(md) {
        width: 100%;
    }
}

.avatar-wrapper {
	opacity: 0;
	top: 0;
	left: 0;
	z-index: 0;
	transition: transform .75s ease-out, opacity .75s ease-in;

    &.left {
        transform: translateX(-10%);
    }

	&.right {
		transform: translateX(10%);

        @include media-breakpoint-down(md) {
            transform: translateX(-10%);
        }
	}

	@include media-breakpoint-down(sm) {
		&.left, &.right {
			transform: translateY(10%);
        }
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
		&.left {
			transform: translateX(-30px);
        }

		&.right {
			transform: translateX(30px);
		}

		@include media-breakpoint-down(md) {
			&.left, &.right {
				transform: translateX(80px);
			}
		}

		@include media-breakpoint-down(sm) {
			&.left, &.right {
				transform: translateX(-50px);
            }
		}
	}

    .title-chn {
        @include media-breakpoint-down(md) {
	        transform: translateX(50px);
        }
    }

	.content {
		transform: translateY(40px);
	}

	&.active {
		p.left, p.right {
			opacity: 1;
			transform: translate(0);
		}
	}
}
</style>