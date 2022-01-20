<template>
	<Article
		:title="database.title"
		:author="database.author"
		:body="database.body"
		:image="database.image"
		:caption="database.caption"
	/>
</template>

<script>
import Article from '../components/Article.vue';
import data from '../../assets/database.js';

export default {
	components: {
		Article,
	},

	data() {
		return {
			database: {
				title: data.articles[2].title,
				author: data.articles[2].author,
				body: data.articles[2].body,
				image: data.articles[2].preview.image,
				caption: data.articles[2].preview.caption,
			},
		};
	},
};
</script>

<style></style>
