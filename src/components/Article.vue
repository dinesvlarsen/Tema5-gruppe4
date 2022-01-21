<template>
	<div class="article-container">
		<div>{{ author }}</div>
		<h1> {{ title }}  </h1>
		<div>
			<figure>
				<img :src="'../../assets/images/' + `${image}`" />
				<figcaption> {{ caption }} </figcaption>
			</figure>
		</div>
		<div> {{ body }} </div>
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
	
</style>