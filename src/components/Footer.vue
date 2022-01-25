<template>
	<footer class="footer">
		<h4 class="footer__logo">in(dex)</h4>

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
	</footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
	display: flex;
	font-style: normal;
	margin-top: 7.5rem;
	padding: 1.25rem;
	font-size: var(--body-font-size);
}

.footer__logo {
	font-weight: normal;
	margin-right: 30%;
}

.footer__information {
	display: flex;
	margin-right: 15.625rem;
}

.footer__address {
	margin-right: 10%;
}

@media screen and (max-width: 968px) {
	.footer__logo {
		margin-right: 30%;
	}
	.footer__address {
		display: none;
	}
}

@media screen and (max-width: 480px) {
	.footer {
		flex-wrap: wrap;
	}

	.footer__socials {
		margin-top: var(--medium-spacing);
		margin-left: 1rem;
	}
}
</style>
