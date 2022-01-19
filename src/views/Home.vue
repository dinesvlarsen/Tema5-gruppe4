<template>
	<LandingSite :title="getTitle(0)" :lead="getLead(0)" :image="getImage(0)" />
	<div class="divider">
		<MainArticles
			:title="getTitle(1)"
			:lead="getLead(1)"
			:image="getImage(1)"
		/>
		<!-- This includes the lead and image in the link. Not sure if this should be split up or if RouterLink should be set up on component with a dynamic name (ie :slug from the database) -->
		<RouterLink :to="{ name: 'article-mutual-aid' }">
		<MainArticles
			:title="getTitle(2)"
			:lead="getLead(2)"
			:image="getImage(2)"
		/></RouterLink>
	</div>
</template>

<script>
import prototypeData from '../../assets/database.js';
import LandingSite from '../components/LandingSite.vue';
import MainArticles from '../components/MainArticles.vue';

export default {
	data() {
		return {
			data: prototypeData,
		};
	},

	methods: {
		getTitle(index) {
			return this.data.articles[index].title;
		},

		getLead(index) {
			return this.data.articles[index].lead;
		},

		getImage(index) {
			return this.data.articles[index].preview.image;
		},

		getArticle(index) {
			return this.data.articles[index].body[0];
		},
	},

	components: {
		LandingSite,
		MainArticles,
	},
};
</script>
