<template>
	<footer class="footer-container">
		<h4 class="footer__logo">in(dex)</h4>
		<div class="footer-container-menu">
			<div class="footer__address">
				<!-- You can get this information from database.js in assets. Look in the database.js file on line 15 -->
				<ul>
					<li>172 Classon Avenue</li>
					<li>Brooklyn, NY 11205</li>
					<li>USA</li>
				</ul>
			</div>
			<div class="footer__socials">
				<ul>
					<li>About us</li>
					<br />
					<li>Instagram ↗</li>
					<li>Twitter ↗</li>
					<br />
					<li>in@dex.info</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style>
.footer-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	font-style: normal;
	letter-spacing: 0em;
	text-align: left;
	margin-top: 7.5rem;
	padding: 1.25rem;
	font-size: var(--body-font-size);
}

.footer__logo {
	font-weight: normal;
}

.footer-container-menu {
	display: flex;
	gap: 3rem;
}

.footer__address {
	margin-right: 9.375rem;
}

.footer__socials {
	margin-right: 15.625rem;
}
@media (max-width: 500px) {
	.footer__address {
		display: none;
	}
	.footer-container {
		gap: 15rem;
	}
}
</style>
