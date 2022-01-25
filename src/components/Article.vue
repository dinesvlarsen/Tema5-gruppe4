<template>
	<div class="article-container">
		<div class="article__author">{{ author }}</div>
		<h1>{{ title }}</h1>
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
	margin-top: 50px;
}

.article__author {
	font-size: var(--body-font-size);
}

.article-container div,
.article-container figcaption {
	margin: var(--margin);
}

.article-container h1 {
	margin: 0.1em;
}

@media (min-width: 1280px) {
	.article-container {
		margin: auto;
		width: 1260px;
	}
}
</style>
