<template>
	<section class="books">
		<h2 class="books__heading">Books</h2>
		<div class="library">
			<div class="book" v-for="(book, index) in booksList" :key="book.title">
				<img
					class="book__cover"
					:src="`../../assets/images/${book.cover}`"
					:alt="`Picture of the book ${book.title}`"
				/>
				<h3 class="book__titles">{{ titleCase(book.title) }}</h3>
				<p class="book__writers">by {{ upperCaseText(book.writers) }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import Data from './../../assets/database.js';

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
	margin-top: 3.75rem;
}

.books__heading {
	text-align: center;
	margin-bottom: 2.5rem;
	font-size: var(--body-font-size);
}

.library {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	margin: 0 1rem;
}

.book {
	max-width: 306px;
	justify-content: center;
	margin-bottom: 2.5rem;
}

.book__cover {
	margin-bottom: 0.625rem;
}
.book__titles {
	margin-bottom: 0.5rem;
}

.book__titles,
.book__writers {
	font-size: var(--caption-font-size);
}

@media screen and (min-width: 600px) {
	.library {
		max-width: 1920px;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
}

@media screen and (min-width: 1175px) {
	.library {
		grid-template-columns: repeat(6, 1fr);
	}
}
</style>
