<template>
	<header class="header">
		<div @click="toggle" class="hamburger__icon">
			<img
				src="../../assets/images/header-icons/Hamburger icon.svg"
				alt="header"
			/>
		</div>

		<!-- <div class="search__icon">
			<img
				src="../../assets/images/header-icons/Search icon.svg"
				alt="header"
			/>
		</div> -->

		<RouterLink :to="'/'">
			<div class="nav__logo">
				<a href="#" class="active">in(dex)</a>
			</div>
		</RouterLink>

		<div class="nav" ref="collapsibleNav">
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
.header {
	position: sticky;
	z-index: 9;
	top: 0;
	left: 0;
	font-size: 30px;
}

.nav {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
}
.nav__logo {
	position: relative;
	z-index: 999;
	padding: 14px var(--small-spacing);
}

.nav__collapsible {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 12px;
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
	max-width: 100%;
}

.hidden {
	display: none;
}

@media screen and (max-width: 968px) {
	.nav-collapsible {
		display: block;
		grid-template-columns: repeat(1, 1fr);
	}
	.nav__links {
		font-size: var(--heading-font-size);
		padding: var(--medium-spacing) 0;
		text-align: center;
	}
	.nav__socials {
		display: none;
	}
}
</style>
