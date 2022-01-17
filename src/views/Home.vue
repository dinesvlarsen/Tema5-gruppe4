<template>
	<LandingSite />
	<div class="divider">
		<MainArticles
			:title="getTitle(1)"
			:lead="getLead(1)"
			:image="getImage(1)"
		/>
		<MainArticles
			:title="getTitle(2)"
			:lead="getLead(2)"
			:image="getImage(2)"
		/>
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
