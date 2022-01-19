<template>
<!-- Doesn't look like authors are included in database.js, should maybe add later as a new property -->
	<div>Daniel Birnbaum</div>
	<h1> {{ database.title }}  </h1>
	<div>
		<figure>
			 <img :src="'../../assets/images/' + `${database.image}`" />
			<figcaption> {{ database.caption }} </figcaption>
		</figure>
	</div>
	<div> {{ database.body }} </div>
</template>

<script>
	import data from "../../assets/database.js";
	export default {
		data() {
			return {
				index: 0,
				// title: data.articles[index].title,
				database: {
					title: data.articles[2].title,
					body: data.articles[2].body,
					image: data.articles[2].preview.image,
					caption: data.articles[2].preview.caption,
				}
			}
		

		},

		computed: {
			getArticleIndex() {
				return this.database[this.index];
			}
		}	
	}
</script>

<style></style>