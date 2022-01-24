<template>
	<div class="article-container">
		<div class="article-heading">
			<div>{{ author }}</div>
			<h1> {{ title }}  </h1>
		</div>
			<figure>
				<img :src="'../../assets/images/' + `${image}`" />
				<figcaption> {{ caption }} </figcaption>
				<br><br>
			</figure>
		<div class="article-body"><div> {{ body }} </div></div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'author', 'body', 'image', 'caption'],

		data() {
			return {
				}
			}
	}
</script>

<style>

.article-container {
	white-space: pre-line;

}

.article-container div, .article-container figcaption {
	margin: var(--margin);
}	

.article-container h1 {
	margin: 0.1em;
}

@media (min-width: 1280px) {
	.article-container {
		margin: auto;
		width: 1260px;
	}
}

</style>