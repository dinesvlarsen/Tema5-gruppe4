<template>
	<section class="articles">
		<h2 class="articles__header">{{ title }}</h2>

		<p class="articles__paragraph">
			{{ lead }}
		</p>
		<img class="articles__image" :src="imageLink" />
	</section>
</template>

<script>
import prototypeData from '../../assets/database.js';
export default {
	props: ['title', 'lead', 'image'],
	data() {
		return {
			firstArticle: {
				title: prototypeData.articles[1].title,
				lead: prototypeData.articles[1].lead,
				body: prototypeData.articles[1].body,
				slug: prototypeData.articles[1].slug,
				preview: prototypeData.articles[1].preview,
			},
		};
	},

	computed: {
		imageLink() {
			return '../../assets/images/' + this.image;
		},
	},
};
</script>

<style>
.articles {
	font-family: 'JetBrains';
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
