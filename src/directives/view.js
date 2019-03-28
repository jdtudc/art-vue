/**
 * @Author: Created By McChen
 * @Date: 2018/8/28
 * @Mail: mcchen.club@gmail.com
 */

let unbind = false

export default {
	bind (el, binding, vnode) {
		unbind = false
	},
	inserted(el, binding, vnode) {
		const isEleInView = (el) => {
			const rect = el.getBoundingClientRect()
			const topLeft = rect.top >= 0 && rect.top <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth
			const topRight = rect.top >= 0 && rect.top <= window.innerHeight && rect.right >= 0 && rect.right <= window.innerWidth
			const bottomLeft = rect.bottom >= 0 && rect.bottom <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth
			const bottomRight = rect.bottom >= 0 && rect.bottom <= window.innerHeight && rect.right >= 0 && rect.right <= window.innerWidth
			const topBottom = rect.top <= 0 && rect.bottom > 0
			const leftRight = rect.left <= 0 && rect.right > 0
			return topLeft || topRight || bottomLeft || bottomRight || topBottom || leftRight
		}
		const controlEle = (el) => {
			const flag = isEleInView(el)
			el.style.visibility = flag ? 'visible' : 'hidden'
		}

		controlEle(el)
		window.addEventListener('scroll', () => {
			if (!unbind) {
				controlEle(el)
			}
		})
		window.addEventListener('resize', () => {
			if (!unbind) {
				controlEle(el)
			}
		})
	},
	unbind (el, binding, vnode) {
		unbind = true
	}
}