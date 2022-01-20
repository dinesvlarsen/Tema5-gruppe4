import Home from './views/Home.vue';
import ArticleMutualAid from './views/ArticleMutualAid.vue';
import ArticleCosmos from './views/ArticleCosmos.vue';


export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'article-mutual-aid', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ArticleMutualAid },
	{ name: 'article-cosmos', path: '/the-institute-of-the-cosmos', component: ArticleCosmos }
];
