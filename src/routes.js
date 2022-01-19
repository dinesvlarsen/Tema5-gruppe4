import Home from './views/Home.vue';
import MainArticles from './views/MainArticles.vue';
import ArticleMutualAid from './views/ArticleMutualAid.vue';
import ArticleCosmos from './views/ArticleCosmos.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'mainarticles', path: '/mainarticles', props: true, component: MainArticles },
	{ name: 'Article-mutual-aid', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ArticleMutualAid },
	{ name: 'article-cosmos', path: '/the-institute-of-the-cosmos', component: ArticleCosmos }
]
