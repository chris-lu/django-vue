import { createRouter, createWebHashHistory } from 'vue-router'
import { isAuthenticated } from '../services/authService';

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: '/',
		name: 'Login',
		component: () => import('@/components/LoginComponent.vue'),
		meta: {
			requiresAuth: false,
		}
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ left: 0, top: 0, behavior: 'smooth' })
			}, 100)
		})
	},
})

router.beforeEach(async (to, from) => {
	let authenticated = await isAuthenticated();
	if (!to.meta.requiresAuth && to.name !== 'Login') {
		return { name: 'Login' }
	} else if (to.meta.requiresAuth && !authenticated) {
		console.log('redirect');
		return { name: 'Login' };
	}
});

export default router