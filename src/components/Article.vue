<template>
	<div class="article-container">
		<div>{{ author }}</div>
		<h1>{{ title }}</h1>
		<figure>
			<img :src="'../../assets/images/' + `${image}`" />
			<figcaption>{{ caption }}</figcaption>
			<br /><br />
		</figure>
		<article
			class="article-container__article"
			v-for="article in body"
			:key="article"
		>
			{{ article }}
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
.article-container__article {
	margin-bottom: 50px;
}
.article-container {
	white-space: pre-line;
}

.article-container div,
.article-container figcaption {
	margin: var(--margin);
}

.article-container h1 {
	margin: 0.1em;
}
</style>
