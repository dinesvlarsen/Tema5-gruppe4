<template>
	<section class="about-us">
		<h2 class="about-us__title">{{ database.title }}</h2>
		<p class="about-us__body" v-for="paragraph in database.body" :key="paragraph">
			{{ paragraph }}
		</p>
	</section>
</template>

<script>
import data from '/assets/database.js';

export default {
	data() {
		return {
			database: {
				title: data.pages[0].content.title,
				body: data.pages[0].content.body,
			},
		};
	},
};
</script>

<style>
.about-us__title {
	text-align: center;
	margin: 1em auto;
	max-width: 22ch;
}

.about-us__body {
	margin: var(--margin);
	white-space: pre-line;
}

.about-us__body + .about-us__body {
	margin-top: 50px;
}

@media screen and (min-width: 968px) {
	.about-us__title {
		max-width: 36ch;
	}

	.about-us__body {
		max-width: 70ch;
		margin: 0 auto;
	}
}
</style>
