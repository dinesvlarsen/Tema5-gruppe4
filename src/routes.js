
import Home from './views/Home.vue';
import Articles from './components/Article.vue';
import AboutUs from './views/AboutUs.vue';
import NotFound from './components/NotFound.vue';

import Data from './../assets/database.js';
const data = Data;


export default [

	{ name: 'home', path: '/', component: Home },
	{ name: 'about-us', path: `/${data.pages[0].slug}`, component: AboutUs },
	{ name: 'article', path: '/articles/:articleId', component: Articles, props: true },
	{ name: 'error', path: '/:notFound(.*)', component: NotFound, alias: '/articles/:notFound(.*)' },
];
