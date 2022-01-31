<template>
	<div v-if="!error" class="article-container">
		<div class="article__heading">
			<div class="article__author">{{ article.author }}</div>
			<h1>{{ article.title }}</h1>
		</div>

		<figure>
			<img
				:src="'/assets/images/' + `${article.preview.image}`"
				:alt="article.preview.alt"
			/>
			<figcaption>{{ article.preview.caption }}</figcaption>
		</figure>

		<article>
			<p
				class="article-container__paragraph"
				v-for="paragraph in article.body"
				:key="paragraph"
			>
				{{ paragraph }}
			</p>
		</article>
	</div>

	<NotFound v-else />
</template>

<script>
import NotFound from '../components/NotFound.vue';
import ArticleData from '/assets/database.js';

export default {
	components: { NotFound },

	data() {
		return {
			article: [],
			articlesList: ArticleData.articles,

			error: false,
		};
	},

	created() {
		const slug = this.$route.params.articleId;
		const article = this.articlesList.find((article) => article.slug === slug);

		if (!article) {
			return this.error = true
		}
		this.article = article;
	},
};
</script>

<style>
.article-container__paragraph + .article-container__paragraph {
	margin-top: var(--medium-spacing);
}

.article__author {
	font-size: var(--body-font-size);
	margin-top: var(--medium-spacing);
}

.article-container h1 {
	margin-bottom: var(--medium-spacing);
}

.article-container img {
	max-height: 909px;
	object-fit: cover;
}

.article-container figcaption {
	margin-top: var(--margin);
	margin-left: var(--margin);
	margin-bottom: var(--large-spacing);
}

/*Using grid solves the issue with centering the content in the container, but having the image fill the width of the screen. This sets up 12 columns that are 1fr wide each. article-heading ends at 10 since the Mutual Aid article shows that there should be equal whitespace on the right when the title overflows. Author gets the same value since they start at the same column, but this isn't discernible from the prototype.*/
@media (min-width: 1280px) {
	.article-container {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		column-gap: var(--grid-medium-spacing);
	}

	.article__heading {
		grid-column: 2 / span 10;
	}

	.article-container figure {
		grid-column: 1 / span 12;
	}

	.article-container article {
		grid-column: 3 / span 8;
	}
}

/* Adding the margin to the h1 and author separately caused an extra indent on the title. So I had to nest them together under one div and apply margin to that instead. */
@media (max-width: 1280px) {
	.article__heading,
	.article-container article {
		margin-left: var(--margin);
		margin-right: var(--margin);
	}
}
</style>
