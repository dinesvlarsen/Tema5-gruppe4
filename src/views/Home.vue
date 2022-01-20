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
			/>
		</RouterLink>
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
			//Stores all the data imported from database.js into the data property.
			data: prototypeData,
		};
	},

	methods: {
		//Methods to fetch data from the articles database, index references the index position of the articles [The Institute of the cosmos, Jimmie Durham, Mutual Aid]
		getTitle(index) {
			return this.data.articles[index].title;
		},

		getSlug(index) {
			return this.data.articles[index].slug;
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

		getImageCaption(index) {
			return this.data.articles[index].preview.caption;
		},

		//Gets the body of an article by specifying which article you want (see line 30)
		getArticle(index) {
			return this.data.articles[index].body[0];
		},
	},

	components: {
		LandingSite,
		MainArticles,

		JournalSlideshow,
	},
};
</script>
