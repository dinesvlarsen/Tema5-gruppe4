<template>
<!-- announcement.message -->
	<div class="newsletterBanner">
		<div class="newsletterText">{{ message }}</div>
		<div><img src="/assets/images/cross-icon.svg"/></div>
	</div>
</template>

<script>
import data from "../../assets/database.js"

export default {
	data() {
		return {
			message: data.newsletter.text
		};
	}
}
</script>

<style>

/* A lot of unique values for padding etc that we might be able to remove by setting up a grid on Home.vue. (ie have it span the whole grid with some padding, like the figcaption on articles). For now the positioning is done on the component itself.  */
.newsletterBanner {
	display: flex;
	flex-flow: row;
	background-color: var(--secondary-color);
	text-align: center;
	padding: 10px; 
	border-radius: 10px;
	z-index: 8;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 98%;
	margin: 15px;
}

.newsletterBanner img {
	padding: 5px;
}

.newsletterText {
	flex: 1;
	font-size: var(--body-font-size);
}

.newsletterBanner:hover {
	background-color: var(--highlight-color);
}

@media (max-width: 1280px) {
	.newsletterBanner {
		display: none;
	}
}
</style>
