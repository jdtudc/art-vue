/**
 * @Author: Created By McChen
 * @Date: 2017/10/27
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

import Vue from 'vue'

import loadingBar from './src/loading-bar'

// 实例对象
let instance;
// 定时器
let timer;

let LoadingBar = {
	create () {
		if(!instance) {
			// 组件构造器
			const LoadingBarConstructor = Vue.extend(loadingBar);
			instance = new LoadingBarConstructor({});
			// 挂载实例
			instance.$mount();
			document.body.appendChild(instance.$el);
		}
	},
	update (options) {
		for(let key in options) {
			instance[key] = options[key];
		}
	},
	hide () {
		let timer1 = setTimeout(() => {
			this.update({
				show: false
			});
			clearTimeout(timer1);

			let timer2 = setTimeout(() => {
				this.update({
					percent: 0
				});
				clearTimeout(timer2)
			}, 200);
		}, 800);
	},
	destroy () {
		document.body.removeChild(document.getElementsByClassName('art-loading-bar')[0]);
	},
	clearTimer () {
		if(timer) {
			clearInterval(timer);
			timer = null;
		}
	}
};
// 默认先创建一个
LoadingBar.create();

export default {
	config (obj) {
		LoadingBar.update({
			barBg: obj.barBg,
			successBg: obj.successBg,
			failBg: obj.failBg,
		})
	},
	start () {
		LoadingBar.create();

		if(timer) {
			return false;
		} else {
			let percent = 0;

			LoadingBar.update({
				percent: percent,
				status: 'success',
				show: true
			});

			timer = setInterval(() => {
				percent += Math.floor(Math.random () * 3 + 5);
				if (percent > 90) {
					clearInterval(timer);
					timer = null;
				}
				LoadingBar.update({
					percent: percent,
					status: 'success',
					show: true
				});
			}, 200);
		}
	},
	update (percent) {
		LoadingBar.clearTimer();
		LoadingBar.update({
			percent: percent,
			status: 'success',
			show: true
		});
	},
	finish () {
		if(timer) {
			LoadingBar.clearTimer();
			LoadingBar.update({
				percent: 100,
				status: 'success',
			});
			LoadingBar.hide();
		} else {
			LoadingBar.hide();
		}
	},
	error () {
		LoadingBar.clearTimer();
		LoadingBar.update({
			percent: 100,
			status: 'fail',
		});
		LoadingBar.hide();
	},
	destroy () {
		LoadingBar.clearTimer();
		instance = null;
		LoadingBar.destroy();
	},
}
