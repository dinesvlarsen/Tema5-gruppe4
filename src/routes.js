
import Home from './views/Home.vue';
import ArticleMutualAid from './views/ArticleMutualAid.vue';
import ArticleCosmos from './views/ArticleCosmos.vue';
import ArticleJimmieDurham from './views/ArticleJimmieDurham.vue';
import Footer from "./components/Footer.vue";
import AboutUs from './views/AboutUs.vue';

import Data from './../assets/database.js';
const data = Data;


export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'article-mutual-aid', path: `/${data.articles[2].slug}`, component: ArticleMutualAid },
	{ name: 'article-jimmie-durham', path: `/${data.articles[1].slug}`, component: ArticleJimmieDurham },
	{ name: 'article-cosmos', path: `/${data.articles[0].slug}`, component: ArticleCosmos },
	{ name: "footer", path: "/footer", component: Footer },
	{ name: 'about-us', path: `/${data.pages[0].slug}`, component: AboutUs },
];
