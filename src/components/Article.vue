<template>
<!-- Doesn't look like authors are included in database.js, should maybe add later as a new property -->
	<div>Daniel Birnbaum</div>
	<h1>{{ articleData.articles[2].title }}</h1>
	<div>
		<figure>
			<img src=""/>
			<figcaption>image text</figcaption>
		</figure>
	</div>
	<div>article text</div>
</template>

<script>
	import data from "../../assets/database.js";
	export default {
		data() {
			articleData: data;

		}
	}
</script>

<style></style>