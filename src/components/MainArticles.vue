<template>
	<section class="articles">
		<RouterLink :to="`/articles/${slug}`">
			<h2 class="articles__heading">{{ title }}</h2>
			<p class="articles__paragraph">
				{{ lead }}
			</p>
		</RouterLink>
		<img class="articles__image" :src="imageLink" :alt="alt" />
	</section>
</template>

<script>
export default {
	props: ['title', 'lead', 'image', 'slug', 'alt'],

	computed: {
		imageLink() {
			return '/assets/images/' + this.image;
		},
		routerLink() {
			return `/${this.slug}`;
		},
	},
};
</script>

<style>
.articles {
	text-align: center;
	padding: 0 var(--small-spacing);
	margin-top: var(--large-spacing);
}

.articles__heading {
	margin: 0 auto;
	max-width: 20ch;
}

.articles__paragraph {
	margin: 0 auto;
	margin-top: var(--small-spacing);
	max-width: 52ch;
	font-size: var(--caption-font-size);
}

.articles__image {
	margin-top: var(--medium-spacing);
}

@media screen and (min-width: 968px) {
	.divider {
		display: flex;
	}

	.articles {
		width: 50%;
	}
}
</style>
