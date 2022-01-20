<template>
	<Article :title="database.title" :author="database.author" :body="database.body" :image="database.image" :caption="database.caption" />
</template>

<script>
	import Article from "../components/Article.vue";
	import data from "../../assets/database.js";
	
	export default {
		components: {
			Article,
	},
	data() {
		return {
			database: {
					title: data.articles[0].title,
					author: data.articles[0].author,
					body: data.articles[0].body,
					image: data.articles[0].preview.image,
					caption: data.articles[0].preview.caption,
				}
		};
	},
};
</script>

<style></style> 