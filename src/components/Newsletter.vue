<template>
<!-- If the value "promptOpen" is true, the newsletter element will be present in the DOM, as it is by default. 
Clicking the X within the element changes the value to false, removing the element from the DOM and hiding it from view. -->
	<div v-show="promptOpen" class="newsletterPrompt">
		<div class="newsletterText">{{ message }}</div>
			<div>
				<button @click="promptOpen = false" aria-label="Close newsletter prompt"><img src="/assets/images/cross-icon.svg"/></button>
			</div>
	</div>
</template>

<script>
import data from "../../assets/database.js"

export default {
	data() {
		return {
			message: data.newsletter.text,
			promptOpen: true
		};
	},
}
</script>

<style>

/* A lot of unique values for padding etc that we might be able to remove by setting up a grid on Home.vue. (ie have it span the whole grid with some padding, like the figcaption on articles). For now the positioning is done on the component itself.  */
.newsletterPrompt {
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

.newsletterPrompt img {
	padding: 5px;
}

.newsletterText {
	flex: 1;
	font-size: var(--body-font-size);
}

.newsletterPrompt:hover {
	background-color: var(--highlight-color);
}

@media (max-width: 1280px) {
	.newsletterPrompt {
		display: none;
	}
}
</style>
