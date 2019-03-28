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
		const imgSrc = binding.value
		const isEleInView = (el) => {
			const rect = el.getBoundingClientRect()
			const topLeft = rect.top >= 0 && rect.top <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth
			const topRight = rect.top >= 0 && rect.top <= window.innerHeight && rect.right >= 0 && rect.right <= window.innerWidth
			const bottomLeft = rect.bottom >= 0 && rect.bottom <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth
			const bottomRight = rect.bottom >= 0 && rect.bottom <= window.innerHeight && rect.right >= 0 && rect.right <= window.innerWidth
			return topLeft || topRight || bottomLeft || bottomRight
		}
		const loadImg = (el, src) => {
			if (el.loaded) {
				el.src = src
			} else {
				const flag = isEleInView(el)
				if (flag) {
					el.src = src
					el.setAttribute('loaded', true)
				}
			}
		}

		loadImg(el, imgSrc)
		window.addEventListener('scroll', () => {
			if (!unbind) {
				loadImg(el, imgSrc)
			}
		})
		window.addEventListener('resize', () => {
			if (!unbind) {
				loadImg(el, imgSrc)
			}
		})
	},
	unbind (el, binding, vnode) {
		unbind = true
	}
}