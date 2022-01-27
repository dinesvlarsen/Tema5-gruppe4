<template>
<!-- If the value "promptOpen" is true, the newsletter element will be present in the DOM, as it is by default. 
Clicking the X within the element changes the value to false, removing the element from the DOM and hiding it from view. -->
		<div v-if="promptOpen" class="newsletterPrompt">
				<div class="newsletter__text">
					<button @click="showInput = true"><div v-show="showInput === false">{{ message }}</div></button>
					<div class="subscribeInput" v-if="showInput === true">
						<label for="email">Enter your e-mail:</label>
						<input type="email" id="email" name="email" placeholder="enter your e-mail">
						<button type="button">subscribe</button>
					</div>
				</div>
				<div>
					<button @click="promptOpen = false" aria-label="Close newsletter prompt"><img src="/assets/images/cross-icon.svg"/></button>
				</div>
		</div>
</template>

<script>
import data from "../../assets/database.js";

export default {
	data() {
		return {
			message: data.newsletter.text,
			promptOpen: true,
			showInput: false
		};
	},
}
</script>

<style>

/* A lot of unique values for padding etc that we might be able to remove by setting up a grid on Home.vue. (ie have it span the whole grid with some margin, like the figcaption on articles). For now the positioning is done on the component itself.  */
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

.newsletterPrompt label {
	visibility: hidden;
}

.newsletterPrompt input[type=email] {
	border-bottom: 1px black solid;
}

.newsletterPrompt:hover {
	background-color: var(--highlight-color);
}

.newsletter__text {
	flex: 1;
	font-size: var(--body-font-size);
}

.subscribeInput button {
	background-color: var(--highlight-color);
	border-radius: 10px;
	margin-left: var(--margin);
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 70px;
	padding-right: 70px;
}

@media (max-width: 1280px) {
	.newsletterPrompt {
		display: none;
	}
}
</style>
