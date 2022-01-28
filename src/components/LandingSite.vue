<template>
	<section class="landing-site">
		<p class="landing-site__latest">Latest</p>

		<RouterLink :to="`/articles/${slug}`">
			<h1 class="landing-site__heading">{{ title }}</h1>

			<p class="landing-site__paragraph">
				{{ lead }}
			</p>
		</RouterLink>

	
		<img class="landing-site__image" :src="imageLink" :alt="alt" />
	</section>
</template>

<script>
export default {
	props: ['title', 'lead', 'image', 'slug', 'alt'],

	computed: {
		imageLink() {
			return '/assets/images/article_1.jpeg';
		},

		routerLink() {
			return `/${this.slug}`;
		},
	},
};
</script>

<style>
.landing-site {
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 var(--small-spacing);
}

.landing-site__latest {
	margin: 0.5em auto;
}

.landing-site__heading {
	margin: var(--medium-spacing) auto var(--small-spacing) auto;
	max-width: 27ch;
}

.landing-site__paragraph {
	font-size: var(--caption-font-size);
}

.landing-site__image {
	margin: 0 auto;
	margin-top: var(--medium-spacing);
}

@media screen and (min-width: 968px) {
	.landing-site__image {
		width: 70%;
	}

	.landing-site__paragraph {
		max-width: 60ch;
		margin: 0 auto;
	}
}
</style>
