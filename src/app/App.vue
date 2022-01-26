<template>
	<Header />
	<RouterView />
	<Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
	components: {
		Footer,
		Header,
	},
};
</script>

<style>
@import '../style/fonts.css';
@import '../style/reset.css';
@import '../style/variables.css';
@import '../style/style.css';
</style>
