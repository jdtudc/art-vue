// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import art from '../src/index'
//import art from 'art-vue'
import loadingBar from  '../src/components/loading-bar/loading-bar'

import Demo from './components/demo'

Vue.use(VueRouter)
Vue.use(art)

Vue.component("art-demo", Demo)

Vue.config.productionTip = false
Vue.config.debug = true

const Components = resolve => require(['./views/Components'], resolve);

const redirectUrl = (to, from, next) => {
	router.replace({path: '/components/summary'});
	next();
};

const loadMd = (name) => {
	return resolve => require(['./docs/zh/' + name + '.md'], resolve)
};
const loadView = (name) => {
	return resolve => require([`./views/${name}.vue`], resolve)
};

// 路由配置
const router = new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/components',
			name: 'Components',
			component: loadView('Components'),
			children: [
				{
					path: 'summary',
					name: '综述',
					component: loadMd('components/SUMMARY')
				},
				{
					path: 'changelog',
					name: '更新日志',
					component: loadMd('components/CHANGELOG')
				},
				{
					path: 'basic',
					name: 'Basic',
					component: loadMd('components/basic')
				},
				{
					path: 'form',
					name: 'Form',
					component: loadMd('components/form')
				},
				{
					path: 'view',
					name: 'View',
					component: loadMd('components/view')
				},
				{
					path: 'navigation',
					name: 'Navigation',
					component: loadMd('components/navigation')
				},
				{
					path: 'chart',
					name: 'Chart',
					component: loadMd('components/chart')
				},
				{
					path: 'other',
					name: 'Other',
					component: loadMd('components/other')
				}
			]
		},
		{
			path: '/design',
			name: 'Design',
			component: loadView('Design'),
			children: [
				{
					path: 'concept',
					name: '理念介绍',
					component: loadMd('design/concept')
				},
				{
					path: 'principle',
					name: '设计原则',
					component: loadMd('design/principle')
				},
				{
					path: 'basic',
					name: '设计基础',
					component: loadMd('design/basic')
				}
			]
		},
		{
			path: '/limit',
			component: loadMd('limit')
		},
		{
			path: '*',
			beforeEnter: redirectUrl
		},
	],
	scrollBehavior (to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		} else {
			return { x: 0, y: 0 }
		}
	}
});

router.beforeEach((to, from, next) => {
	loadingBar.start();
	next();
});

router.afterEach((to, from) => {
	loadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
