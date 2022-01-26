<template>
	<section class="about-us">
		<h2 class="about-us__title">{{ title }}</h2>

		<p class="about-us__body" v-for="paragraph in body" :key="paragraph">
			{{ paragraph }}
		</p>
	</section>
</template>

<script>
export default {
	props: ['title', 'body'],

	data() {
		return {};
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
		/*max-width: 70%;*/
		max-width: 36ch;
	}

	.about-us__body {
		max-width: 70ch;
		/* max-width: 70%; */
		margin: 0 auto;
	}
}
</style>
