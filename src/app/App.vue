<template>
	<Header />
	<NewsBanner />
	<RouterView />
	<Footer />
</template>

<script>
import Header from '../components/Header.vue';
import NewsBanner from '../components/NewsBanner.vue';
import Footer from '../components/Footer.vue';

import databaseData from '/assets/database.js';

export default {
	data() {
		return {
			data: databaseData,
		};
	},

	components: {
		Header,
		NewsBanner,
		Footer,
	},

	provide() {
		return {
			articleData: this.data.articles,
		};
	},
};
</script>

<style>
@import '../style/fonts.css';
@import '../style/reset.css';
@import '../style/variables.css';
@import '../style/style.css';
</style>
