import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from '../routes.js';

const app_router = createRouter({
	routes: routes,

	/*the recommended   return { x: 0, y: 0 } from 
	https://router.vuejs.org/guide/advanced/scroll-behavior.html
	doesn't seem to work. so using a workaround from this github issue.:
	 https://github.com/vuejs/vue-router/issues/3451 */
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			window.scrollTo(0, 0);
		}
	},
	history: createWebHistory()
})

createApp(App)
	.use(app_router)
	.mount('#app');