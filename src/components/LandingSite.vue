<template>
	<section class="landingSite">
		<p class="landingSite__latest">Latest</p>
		<!--Router link skal rundt h1 og p-->
		<RouterLink :to="`/articles/${slug}`">
			<h1 class="landingSite__header">{{ title }}</h1>

			<p class="landingSite__paragraph">
				{{ lead }}
			</p>
		</RouterLink>
		<img class="landingsite__image" :src="imageLink" />
	</section>
</template>

<script>
export default {
	props: ['title', 'lead', 'image', 'slug', 'alt'],

	computed: {
		imageLink() {
			return '../../assets/images/article_1.jpeg';
		},

		routerLink() {
			return `/${this.slug}`;
		},
	},
};
</script>

<style>
.landingSite {
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 var(--small-spacing);
}

.landingSite__latest {
	margin: 0.5em auto;
}

.landingSite__header {
	margin: var(--medium-spacing) auto var(--small-spacing) auto;
	max-width: 27ch;
}

.landingSite__paragraph {
	font-size: var(--caption-font-size);
}

.landingSite__image {
	margin: 0 auto;
	margin-top: var(--medium-spacing);
}

@media screen and (min-width: 968px) {
	.landingSite__image {
		width: 70%;
	}

	.landingSite__paragraph {
		max-width: 60ch;
		margin: 0 auto;
	}
}
</style>
