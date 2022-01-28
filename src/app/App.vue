<template>
	<Header />
	<RouterView />
	<Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import databaseData from '../../assets/database.js';
export default {
	data() {
		return {
			data: databaseData,
		};
	},
	components: {
		Footer,
		Header,
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
