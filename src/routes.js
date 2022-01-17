import Home from './views/Home.vue';
import MainArticles from './views/MainArticles.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'mainarticles', path: '/mainarticles', props: true, component: MainArticles },
];
