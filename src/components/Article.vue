<template>
	<div class="article-container">
		<div class="article__author">{{ author }}</div>
		<h1>{{ title }}</h1>
		<figure>
			<img :src="'../../assets/images/' + `${image}`" />
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
	props: ['title', 'author', 'body', 'image', 'caption'],

	data() {
		return {};
	},
};
</script>

<style>
.article-container__paragraph + .article-container__paragraph {
	margin-top: 50px;
}
.article-container {
	white-space: pre-line;
}

.article__author {
	font-size: var(--caption-font-size);
}

.article-container div,
.article-container figcaption {
	margin: var(--margin);
}

.article-container h1 {
	margin: 0.1em;
}
</style>
