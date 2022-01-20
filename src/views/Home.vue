<template>
	<LandingSite
		:title="getArticleData(0, 'title')"
		:lead="getArticleData(0, 'lead')"
		:image="getArticleData(0, 'image')"
		:slug="getArticleData(0, 'slug')"
	/>

	<div class="divider">
		<MainArticles
			:title="getArticleData(1, 'title')"
			:lead="getArticleData(1, 'lead')"
			:image="getArticleData(1, 'image')"
			:slug="getArticleData(1, 'slug')"
		/>

		<!-- This includes the lead and image in the link. Not sure if this should be split up or if RouterLink should be set up on component with a dynamic name (ie :slug from the database) -->
		<MainArticles
			:title="getArticleData(2, 'title')"
			:lead="getArticleData(2, 'lead')"
			:image="getArticleData(2, 'image')"
			:slug="getArticleData(2, 'slug')"
		/>
	</div>

	<Books />

	<JournalSlideshow />
</template>

<script>
import prototypeData from '../../assets/database.js';
import LandingSite from '../components/LandingSite.vue';
import MainArticles from '../components/MainArticles.vue';
import Books from '../components/Books.vue';
import JournalSlideshow from '../components/JournalSlideshow.vue';

export default {
	data() {
		return {
			//Stores all the data imported from database.js into the data property.
			data: prototypeData,
		};
	},

	methods: {
		//Can use index and  key to access articles from database
		//key expects a string with one of these:('title', 'slug', 'lead', 'body', 'image', 'caption')
		getArticleData(index, key) {
			//Conditionals are here to check if 'image' or 'caption', since they are in their own object.
			if (key === 'image') {
				return this.data.articles[index].preview.image;
			} else if (key === 'caption') {
				return this.data.articles[index].preview.caption;
			}

			return this.data.articles[index][key];
		},
	},

	components: {
		LandingSite,
		MainArticles,
		Books,
		JournalSlideshow,
	},
};
</script>
