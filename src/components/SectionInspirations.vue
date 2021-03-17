<template>
	<div class="position-relative w-100 py-4 section-inspirations">
		<img v-bind:src="require('../assets/section_inspirations.jpeg')" alt="Hero Image" class="position-absolute w-100 h-100">
		<div class="position-absolute w-100 h-100 image-overlay"></div>
		<div class="position-absolute line top"></div>
		<div class="position-absolute line bottom"></div>
		<div class="position-absolute w-100 icon">
            <svg width="100%" height="100%" viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="116">
                    <path d="M100 86.6V28.868L50 -7.62939e-06L0 28.868V86.6L38.411 108.777L50 115.468L100 86.6Z" fill="#E1A522"/>
                </mask>
                <g mask="url(#mask1)">
                    <path d="M100 86.6V28.868L50 -7.62939e-06L0 28.868V86.6L38.411 108.777L50 115.468L100 86.6Z" fill="#E1A522"/>
                    <path d="M50 70.39C74.4215 70.39 94.219 50.5925 94.219 26.171C94.219 1.74951 74.4215 -18.048 50 -18.048C25.5785 -18.048 5.78101 1.74951 5.78101 26.171C5.78101 50.5925 25.5785 70.39 50 70.39Z" fill="#E8DC7A"/>
                    <path d="M50 54.012C65.3762 54.012 77.841 41.5472 77.841 26.171C77.841 10.7948 65.3762 -1.67001 50 -1.67001C34.6238 -1.67001 22.159 10.7948 22.159 26.171C22.159 41.5472 34.6238 54.012 50 54.012Z" fill="#E5D36A"/>
                    <path d="M49.495 42.957C58.5397 42.957 65.872 35.6248 65.872 26.58C65.872 17.5352 58.5397 10.203 49.495 10.203C40.4502 10.203 33.118 17.5352 33.118 26.58C33.118 35.6248 40.4502 42.957 49.495 42.957Z" fill="#E6D143"/>
                    <path d="M49.496 13.479C46.0217 13.479 42.6896 14.8592 40.2329 17.3159C37.7762 19.7726 36.396 23.1047 36.396 26.579C36.396 33.131 42.947 39.779 42.947 46.232H56.047C56.047 39.579 62.598 33.132 62.598 26.579C62.598 23.1047 61.2178 19.7726 58.7611 17.3159C56.3044 14.8592 52.9723 13.479 49.498 13.479H49.496Z" fill="#8F753A"/>
                    <path d="M56.414 34.862C54.9953 37.4172 53.8973 40.1378 53.145 42.962H45.83C45.0749 40.2007 43.9971 37.5381 42.619 35.029C41.103 31.981 39.67 29.102 39.67 26.584C39.67 23.9778 40.7053 21.4784 42.5481 19.6356C44.3909 17.7928 46.8903 16.7575 49.4965 16.7575C52.1026 16.7575 54.602 17.7928 56.4449 19.6356C58.2877 21.4784 59.323 23.9778 59.323 26.584C59.322 29.069 57.908 31.879 56.414 34.862Z" fill="#E9DE44"/>
                    <path d="M56.047 54.423C56.0471 54.6381 56.0048 54.8512 55.9226 55.05C55.8403 55.2488 55.7196 55.4294 55.5675 55.5815C55.4154 55.7337 55.2348 55.8543 55.036 55.9366C54.8372 56.0189 54.6241 56.0611 54.409 56.061H54.109C53.7751 57.0182 53.1518 57.8478 52.3253 58.4348C51.4988 59.0219 50.5102 59.3372 49.4965 59.3372C48.4828 59.3372 47.4941 59.0219 46.6677 58.4348C45.8412 57.8478 45.2178 57.0182 44.884 56.061H44.584C44.1567 56.0504 43.7505 55.8733 43.452 55.5673C43.1535 55.2614 42.9865 54.8509 42.9865 54.4235C42.9865 53.9961 43.1535 53.5856 43.452 53.2797C43.7505 52.9737 44.1567 52.7966 44.584 52.786H54.41C54.6251 52.7859 54.8382 52.8281 55.037 52.9104C55.2358 52.9927 55.4164 53.1133 55.5685 53.2655C55.7206 53.4176 55.8413 53.5982 55.9236 53.797C56.0058 53.9958 56.0481 54.2089 56.048 54.424L56.047 54.423Z" fill="#8F753A"/>
                    <path d="M56.047 49.509C56.0471 49.7241 56.0049 49.9372 55.9226 50.136C55.8403 50.3348 55.7197 50.5154 55.5676 50.6675C55.4154 50.8197 55.2348 50.9403 55.036 51.0226C54.8372 51.1049 54.6242 51.1471 54.409 51.147H44.583C44.3646 51.1524 44.1473 51.114 43.9439 51.0342C43.7405 50.9543 43.5551 50.8346 43.3987 50.682C43.2423 50.5294 43.118 50.347 43.0331 50.1457C42.9483 49.9443 42.9045 49.728 42.9045 49.5095C42.9045 49.291 42.9483 49.0747 43.0331 48.8733C43.118 48.672 43.2423 48.4896 43.3987 48.337C43.5551 48.1844 43.7405 48.0647 43.9439 47.9848C44.1473 47.905 44.3646 47.8666 44.583 47.872H54.409C54.6242 47.8719 54.8372 47.9141 55.036 47.9964C55.2348 48.0787 55.4154 48.1993 55.5676 48.3515C55.7197 48.5036 55.8403 48.6842 55.9226 48.883C56.0049 49.0818 56.0471 49.2949 56.047 49.51V49.509Z" fill="#8F753A"/>
                    <path d="M33.294 15.334L36.243 17.034C35.6004 17.92 35.0486 18.8684 34.596 19.865L31.656 18.165L33.294 15.334Z" fill="#8F753A"/>
                    <path d="M49.496 10.203C48.9474 10.229 48.4006 10.2844 47.858 10.369V6.92799H51.137V10.37C50.5934 10.285 50.0456 10.2292 49.496 10.203V10.203Z" fill="#8F753A"/>
                    <path d="M39.953 13.328L38.253 10.379L41.093 8.741L42.793 11.681C41.7933 12.1331 40.8419 12.6849 39.953 13.328V13.328Z" fill="#8F753A"/>
                    <path d="M64.397 19.87C63.9434 18.8733 63.3906 17.9249 62.747 17.039L65.696 15.339L67.334 18.179L64.397 19.87Z" fill="#8F753A"/>
                    <path d="M59.04 13.325C58.1542 12.6845 57.2069 12.1338 56.212 11.681L57.912 8.741L60.746 10.379L59.04 13.325Z" fill="#8F753A"/>
                    <path d="M33.292 28.218H29.844V24.943H33.286C33.2021 25.4857 33.1473 26.0325 33.122 26.581C33.1463 27.1295 33.2031 27.6762 33.292 28.218V28.218Z" fill="#8F753A"/>
                    <path d="M69.148 24.943V28.218H65.7C65.7899 27.6759 65.8477 27.1289 65.873 26.58C65.8471 26.0314 65.7917 25.4846 65.707 24.942L69.148 24.943Z" fill="#8F753A"/>
                    <path d="M64.356 33.273L67.331 34.988L65.693 37.825L63.012 36.277C63.5 35.288 63.947 34.29 64.356 33.273Z" fill="#8F753A"/>
                    <path d="M34.618 33.279C35.024 34.296 35.472 35.301 35.952 36.292L33.294 37.824L31.656 34.987L34.618 33.279Z" fill="#8F753A"/>
                </g>
            </svg>
        </div>
		<h1 class="mb-0 font-weight-bold">INSPIRATIONS</h1>
		<div class="container-fluid">
			<div class="row">
				<div class="col-11 offset-1 col-lg-6 offset-lg-0 left">
					<h3 class="text-white font-weight-bold text-center mb-0 py-5">不以商業賺錢為主要目的, 適合以輕鬆交友為目的的朋友！參加者遇到問題也不用擔心求助無門！</h3>
					<h3 class="text-white font-weight-bold text-center mb-0 pb-5">每月平均有12個以上免費活動！</h3>
				</div>
				<div class="col-11 offset-1 col-lg-6 offset-lg-0 right">
					<h3 class="text-white font-weight-bold text-center mb-0 pt-1 pb-5">全港最強活動放題, 會員透過參加唔同類型既活動, 令生活多姿多彩！</h3>
					<h3 class="text-white font-weight-bold text-center mb-0 pb-5">活動由大量以實名登記, 有經驗又熱情的搞手籌備。因為搞手們都有正職, 籌備活動只為興趣, 所以性價比極高！</h3>
				</div>
			</div>
			<div class="row pl-4 pl-lg-0 pb-1">
				<div v-for="statistic in statistics"
				     v-bind:key="statistic.text"
				     v-bind:class="statistic.classBinding"
				     class="col-6 col-lg-3 mb-1 text-white d-flex justify-content-center align-items-center statistic">
					<div class="text-center">
						<font-awesome-icon v-bind:icon="statistic.icon" class="h1 mb-0"></font-awesome-icon>
						<p class="h4 text-nowrap font-weight-bold">{{statistic.text}}</p>
					</div>
					<p class="h1 font-weight-bold ml-2">{{statistic.number}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionInspirations",
	
	mounted() {
		const left = this.$el.querySelector(".left");
		const right = this.$el.querySelector(".right");
		const statistics = this.$el.querySelectorAll(".statistic");
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(({ target, isIntersecting }) => {
				isIntersecting ? target.classList.add("active") : target.classList.remove("active");
			})
		}, { threshold: .25 });
		observer.observe(left);
		observer.observe(right);
		statistics.forEach(statistic => observer.observe(statistic));
	},
	
	data() {
		return {
			statistics: [
				{ icon: ['fas', 'chart-line'], text: "活動", number: "1500", classBinding: ""},
				{ icon: ['fas', 'glass-cheers'], text: "大型活動", number: "280", classBinding: "pr-lg-5"},
				{ icon: ['fas', 'user-tie'], text: "搞手", number: "235", classBinding: ""},
				{ icon: ['fas', 'users'], text: "會員", number: "15300", classBinding: "pr-lg-5"},
			],
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

.section-inspirations {
	z-index: 0;
	
	img {
		top: 0;
		left: 0;
		object-fit: cover;
		z-index: -2;
	}
	
	.image-overlay {
		backdrop-filter: blur(6px);
		z-index: -1;
	}
	
	.line {
		top: 0;
		left: calc(50% - 7px);
		width: 14px;
		z-index: 1;
		
		&.top {
			height: 24px;
			background-color: #E5D36A;
			z-index: 2;
		}
		
		&.bottom {
			top: calc(16px + 84px);
			height: calc(100% - 16px - 42px);
			background-image: linear-gradient(to bottom, #E1A522, #A2BF5A);
		}
		
		@include media-breakpoint-down(md) {
			// icon md breakpoint 12px + half of icon width - half of line width
			left: calc(12px + 84px / 2 - 14px / 2);
		}
		
		@include media-breakpoint-down(xs) {
			width: 10px;
			// icon md breakpoint 12px + half of icon width - half of line width
			left: calc(12px + 48px / 2 - 10px / 2);
            
            &.bottom {
	            top: calc(16px + 50px);
            }
		}
	}
	
	.icon {
		top: 16px;
		max-width: 84px;
		left: calc(50% - 42px);
		z-index: 3;
		
		@include media-breakpoint-down(md) {
			left: 12px;
		}
		
		@include media-breakpoint-down(xs) {
			max-width: 48px;
		}
	}
	
	h1 {
		color: #E9DE44;
		padding: 14px 70px;
		
		@include media-breakpoint-down(md) {
			padding: 14px 140px;
		}
		
		@include media-breakpoint-down(xs) {
			font-size: 1.75rem;
			padding: 1px 80px;
		}
	}
	
	.left, .right {
		padding: 0 60px;
		opacity: 0;
		transition: all .75s ease-out;
		
		&.active {
			opacity: 1;
			transform: translate(0);
		}
		
		@include media-breakpoint-down(md) {
			padding: 0 30px 0 20px;
		}
		
		@include media-breakpoint-down(xs) {
			padding: 0 15px 0 20px;
			
			& > * {
				font-size: 1.25rem;
			}
		}
	}
	
	.left {
		transform: translateX(-30px);
		
		@include media-breakpoint-down(md) {
			transform: translateY(30px);
		}
	}
	
	.right {
		transform: translateX(30px);
		
		@include media-breakpoint-down(md) {
			transform: translateY(30px);
		}
	}
	
	.statistic {
		& > :last-child {
			opacity: 0;
			transform: translateY(20px);
			transition: all .75s ease-out;
		}
		
		&.active > :last-child {
			opacity: 1;
			transform: translateY(0);
		}
		
		@include media-breakpoint-down(xs) {
			& > div {
				:first-child {
					font-size: 1.5rem;
				}
				
				p {
					font-size: 1rem;
				}
			}
			
			& > p {
				font-size: 1.5rem;
			}
		}
	}
}
</style>