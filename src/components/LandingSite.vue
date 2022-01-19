<template>
	<section class="landingSite">
		<p class="landingSite__latest">Latest</p>
		<!--Router link skal rundt h1 og p-->
		<RouterLink :to="{ name: 'article-cosmos' }">
			<h1 class="landingSite__header">{{ title }}</h1>
			<p class="landingSite__paragraph">
				{{ lead }}
			</p>
		</RouterLink>
		<img class="landingsite__image" :src="imageLink" />
	</section>
</template>

<script>
export default {};
</script>

<style>
.landingSite {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80%;
}
</style>