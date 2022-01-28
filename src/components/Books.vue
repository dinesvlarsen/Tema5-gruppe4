<template>
	<section class="books">
		<h2 class="books__heading">Books</h2>

		<div class="book-item">
			<div class="book" v-for="(book) in booksList" :key="book.title">
				<img 
					class="book__cover" 
					:src="`/assets/images/${book.cover}`" 
					:alt="book.alt" 
				/>
				<h3 class="book__titles">{{ upperCaseText(book.writers) }}</h3>
				<p class="book__writers">{{ titleCase(book.title) }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import Data from '/assets/database.js';

export default {
	data() {
		return {
			booksList: Data.books,
		};
	},

	methods: {
		upperCaseText(string) {
			return string.toUpperCase();
		},

		titleCase(string) {
			string = string
				.toLowerCase()
				.split(' ')
				.map((word) => {
					return word.charAt(0).toUpperCase() + word.slice(1);
				});
			return string.join(' ');
		},
	},
};
</script>

<style>
.books {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: var(--large-spacing);
	padding: 0 var(--small-spacing);
}

.books__heading {
	font-size: var(--body-font-size);
	text-align: center;
}

.book-item {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: var(--medium-spacing);
	gap: var(--grid-small-spacing);
}

.book {
	justify-content: center;
	max-width: 306px;
}

.book__cover {
	margin-bottom: 0.625rem;
}

.book__titles,
.book__writers {
	font-size: var(--caption-font-size);
}

@media screen and (min-width: 600px) {
	.book-item {
		/* Change view on tablet to be 3 books on each line */
		grid-template-columns: repeat(3, 1fr); 
	}
}

@media screen and (min-width: 1175px) {
	.book-item {
		/* Change books to be 1 book on each view */
		grid-template-columns: repeat(6, 1fr);
	}
}
</style>
