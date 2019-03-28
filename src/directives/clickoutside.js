/**
 * @Author: Created By McChen
 * @Date: 2017/12/8
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

export default {
	bind (el, binding, vnode) {
		el._artClickHandler = event => {
			if (!el.contains(event.target) && binding.expression) {
				binding.value(event)
			}
		};
		document.addEventListener('click', el._artClickHandler)
	},
	inserted (el, binding, vnode) {},
	update (el, binding, vnode, oldVnode) {
	},
	componentUpdated (el, binding, vnode, oldVnode) {},
	unbind (el, binding, vnode) {
		document.removeEventListener('click', el._artClickHandler)
	}
}
