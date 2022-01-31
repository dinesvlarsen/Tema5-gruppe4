
import Home from './views/Home.vue';
import Articles from './views/Article.vue';
import AboutUs from './views/AboutUs.vue';
import NotFound from './components/NotFound.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'about-us', path: `/about-us`, component: AboutUs },
	{ name: 'article', path: '/articles/:articleId', component: Articles },
	{ name: 'error', path: '/:notFound(.*)', component: NotFound, alias: '/articles/:notFound(.*)' },
];
