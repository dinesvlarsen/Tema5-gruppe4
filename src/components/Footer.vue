<template>
	<footer class="footer-container">
		<h3 class="footer__logo">in(dex)</h3>
		<div class="footer-container-menu">
			<div class="footer__address">
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

<style scoped>
.footer-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	font-size: 1.875rem;
	font-style: normal;
	letter-spacing: 0em;
	text-align: left;
	height: 289px;
	max-width: 1920px;
	left: 0px;
	top: 1498px;
	border-radius: 0px;
	margin-top: 7.5rem;
	padding: 1.25rem;
}

.footer__logo {
	font-size: 1.875rem;
	font-weight: normal;
}

.footer-container-menu {
	display: flex;
	gap: 3rem;
	padding: 0px;
}

.footer__address {
	margin-right: 9.375rem;
}

.footer__socials {
	margin-right: 15.625rem;
}
</style>
