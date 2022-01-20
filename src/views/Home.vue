<template>
	<LandingSite :title="getTitle(0)" :lead="getLead(0)" :image="getImage(0)" />
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
	<JournalSlideshow />
</template>

<script>
import prototypeData from '../../assets/database.js';
import LandingSite from '../components/LandingSite.vue';
import MainArticles from '../components/MainArticles.vue';
import JournalSlideshow from '../components/JournalSlideshow.vue';

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

		//Might not need this because I use data inside of slideshow...!!!!!!!
		// //Gets journal data you need based on index and data.
		// getJournalTitle(index) {
		// 	return this.data.journal[index].title;
		// },

		// getJournalArtist(index) {
		// 	return this.data.journal[index].artist;
		// },

		// getJournalLocation(index) {
		// 	return this.data.journal[index].location;
		// },

		// getJournalImage(index) {
		// 	return this.data.journal[index].image;
		// },
	},

	components: {
		LandingSite,
		MainArticles,
		JournalSlideshow,
	},
};
</script>
