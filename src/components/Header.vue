<template>
	<header class="header">
		<div @click="toggle" class="hamburger__icon">
			<img
				src="../../assets/images/header-icons/Hamburger icon.svg"
				alt="header"
			/>
		</div>

		<div class="search__icon">
			<img
				src="../../assets/images/header-icons/Search icon.svg"
				alt="header"
			/>
		</div>

		<div class="nav" ref="collapsibleNav">
			<RouterLink :to="'/'">
				<div class="nav__logo">
					<a href="#" class="active">in(dex)</a>
				</div>
			</RouterLink>

			<div class="nav__collapsible">
				<div class="nav__links" :class="toggleNav ? 'hidden' : ''">
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

				<ul class="nav__socials" :class="toggleNav ? 'hidden' : ''">
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
			toggleNav: false,
		};
	},
	methods: {
		toggle() {
			this.toggleNav = !this.toggleNav;
			console.log(this.toggleNav);
		},
	},
};
</script>

<style>
.nav {
	display: flex;
	justify-content: space-between;
}
.nav__logo {
	padding: 14px 16px;
}

.header {
	position: sticky;
	z-index: 9;
	top: 0;
	left: 0;
}

.nav__collapsible {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 12px;
	font-size: var(--body-font-size);
	background: var(--secondary-color);
}

.nav__links {
	display: flex;
	flex-direction: column;
	grid-column-start: 7;
}

.nav__socials {
	grid-column-start: 9;
}
.hamburger__icon {
	position: fixed;
	float: right;
	margin: 20px;
	cursor: pointer;
	z-index: 99999;
	right: -1px;
}

.search__icon {
	position: fixed;
	float: right;
	padding: 3px;
	margin: 15px;
	right: 60px;
	cursor: pointer;
	z-index: 99999;
}

.index__logo {
	font-size: 30px;
	position: fixed;
	margin-top: 10px;
	z-index: 99999;
	padding-left: 15px;
}

.slide__nav {
	position: absolute;
	top: 0;
	left: 0;
}

/* .slide__nav a {
	display: block;
	width: 100%;
	max-width: 300px;
	margin: 0 auto;
} */

.slide__nav ul {
	width: 100%;
	max-width: 300px;
	position: absolute;
	top: 5px;
	right: 240px;
}

.hidden {
	display: none;
}
</style>
