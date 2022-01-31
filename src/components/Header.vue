<template>
	<header>
		<div class="header__icons">
			<!-- DISABLED UNTIL FUNCTIONAL -->
			<!-- <div class="search__icon">
				<img
					src="/assets/images/header-icons/Search icon.svg"
					alt="header"
				/>
			</div> -->

			<RouterLink :to="'/'">
				<div class="nav__logo" aria-label="Go to home">in(dex)</div>
			</RouterLink>

			<button @click="toggle" class="hamburger__icon">
				<img
					src="/assets/images/header-icons/Hamburger-icon.svg"
					alt="header"
				/>
			</button>
		</div>

		<div class="nav" :class="toggleNav ? 'nav--hidden' : ''">
			<div class="nav__collapsible">
				<div class="nav__links">
					<a href="#Announcements">Announcements</a>
					<a href="#Journal">Journal</a>
					<a href="#Architecture">Architecture</a>
					<a href="#Video & Film">Video & Film</a>
					<a href="#Live">Live</a>
					<a href="#Notes">Notes</a>
					<a href="#Books">Books</a>
					<a href="#Projects">Projects</a>
					<a href="#Podcasts">Podcasts</a>
				</div>

				<ul class="nav__socials">
					<li>About us</li>
					<br />
					<li>Instagram ↗</li>
					<li>Twitter ↗</li>
					<br />
					<li>in@dex.info</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			toggleNav: true,
		};
	},
	methods: {
		toggle() {
			this.toggleNav = !this.toggleNav;
		},
	},
};
</script>

<style>
header {
	position: sticky;
	top: 0;
	left: 0;
	z-index: 4;
	font-size: 30px;
}

.header__icons {
	display: flex;
	position: relative;
	z-index: 5;
	justify-content: space-between;
	padding: var(--small-spacing);
}

.hamburger__icon {
	align-self: center;
	width: 42px;
}

.nav {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	text-align: center;
	background: var(--secondary-color);
}

.nav__links {
	position: relative;
	z-index: 4;
	display: flex;
	flex-direction: column;
	font-size: var(--heading-font-size);
	padding: 4rem 0;
}

.nav__socials,
.nav--hidden {
	display: none;
}

@media screen and (min-width: 968px) {
	.nav__collapsible {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		text-align: left;
	}

	.nav__links,
	.nav__socials {
		padding: var(--small-spacing) 0;
	}
	.nav__links {
		font-size: var(--body-font-size);
		grid-column-start: 7;
		z-index: 5;
	}

	.nav__socials {
		display: block;
		grid-column-start: 9;
	}
}
</style>
