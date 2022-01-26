<template>
	<div class="article-container">
		<div class="article__heading">
			<div class="article__author">{{ author }}</div>
			<h1>{{ title }}</h1>
		</div>
		<figure>
			<img :src="'../../assets/images/' + `${image}`" :alt="alt" />
			<figcaption>{{ caption }}</figcaption>
			<br /><br />
		</figure>
		<article>
			<p
				class="article-container__paragraph"
				v-for="paragraph in body"
				:key="paragraph"
			>
				{{ paragraph }}
			</p>
		</article>
		<!-- <div>{{ body }}</div> -->
	</div>
</template>

<script>
export default {
	props: ['title', 'author', 'body', 'image', 'caption', 'alt'],

	data() {
		return {};
	},
};
</script>

<style>
.article-container__paragraph + .article-container__paragraph {
	margin-top: var(--spacing-medium);
}

.article__author {
	font-size: var(--body-font-size);
	margin-top: var(--spacing-medium);
}

.article-container h1 {
	margin-bottom: var(--spacing-medium);
}

.article-container img {
	max-height: 909px;
	object-fit: cover;
}

.article-container figcaption {
	margin-top: var(--margin);
	margin-left: var(--margin);
	margin-bottom: var(--spacing-medium);
}

/*Using grid solves the issue with centering the content in the container, but having the image fill the width of the screen. This sets up 12 columns that are 1fr wide each. article-heading ends at 10 since the Mutual Aid article shows that there should be equal whitespace on the right when the title overflows. Author gets the same value since they start at the same column, but this isn't discernible from the prototype.*/
@media (min-width: 1280px) {
	.article-container {
		display: grid;
  		grid-template-columns: repeat(12, 1fr);
  		column-gap: 20px;
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
	.article__heading, .article-container article {
	margin-left: var(--margin);
	margin-right: var(--margin);
}
}
</style>
