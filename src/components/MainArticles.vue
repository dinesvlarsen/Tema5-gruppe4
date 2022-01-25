<template>
	<section class="articles">
		<RouterLink :to="routerLink">
			<h2 class="articles__header">{{ title }}</h2>

			<p class="articles__paragraph">
				{{ lead }}
			</p>
		</RouterLink>
		<img class="articles__image" :src="imageLink" />
	</section>
</template>

<script>
export default {
	props: ['title', 'lead', 'image', 'slug'],

	computed: {
		imageLink() {
			return '../../assets/images/' + this.image;
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
	margin: 0 1rem;
}

.articles__header {
	margin: 0 auto;
	margin-top: 6.25rem;
	max-width: 20ch;
}

.articles__paragraph {
	margin: 0 auto;
	margin-top: 1.25rem;
	max-width: 52ch;
	font-size: var(--caption-font-size);
}

.articles__image {
	margin-top: 2.5rem;
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
