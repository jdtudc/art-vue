/**
 * @Author: Created By McChen
 * @Date: 2017/11/30
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

import Vue from 'vue'

import modal from './src/modal'

// 实例对象
let instance;
// 定时器
let timer;

let Modal = {
	create (properties) {
		if(!instance) {
			// 组件构造器
			const ModalConstructor = Vue.extend(modal);
			instance = new ModalConstructor();
			for(let key in properties) {
				instance.$props[key] = properties[key];
			}
			// 挂载实例
			instance.$mount();
			document.body.appendChild(instance.$el);
		}
	},
	show (text, cb) {
		instance.$props.show = true;
		instance.$props.errorText = text ? text : "网络异常，请稍后重试";
		instance.$props.errorFn = cb ? cb : null;
	},
};
// 默认先创建一个
Modal.create({
	type: '3',
});

export default {
	show (text, cb) {
		Modal.show(text, cb)
	},
}
