import Home from './views/Home.vue';
import ArticleMutualAid from './views/ArticleMutualAid.vue';

//Only adding this route while developing the component, not needed for deployment
import JournalSlideshow from './views/JournalSlideshow.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'Article-mutual-aid', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ArticleMutualAid }, { name: 'journal-slideshow', path: '/journal-slideshow', component: JournalSlideshow }
];
