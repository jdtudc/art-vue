import Alert from './components/alert'
import Auxi from './components/auxi'
import Backtop from './components/backtop'
import Badge from './components/badge'
import Breadcrumb from './components/breadcrumb'
import BtnDrop from './components/btn-drop'
import ButtonDrop from './components/button-drop'
import Button from './components/button'
import Calendar from './components/calendar'
import Card from './components/card'
import Chart from './components/chart'
import Checkbox from './components/checkbox'
import Countdown from './components/countdown'
import Dropdown from './components/dropdown'
import Input from './components/input'
import InputDrop from './components/input-drop'
import LeftNav from './components/left-nav'
import LoadingBar from './components/loading-bar'
import Modal from './components/modal'
import Overlay from './components/overlay'
import Page from './components/page'
import Radio from './components/radio'
import Slider from './components/slider'
import Steps from './components/steps'
import Switch from './components/switch'
import Tabs from './components/tabs'
import Tag from './components/tag'
import Textarea from './components/textarea'
import TextDrop from './components/text-drop'
import Timeline from './components/timeline'
import Tooltip from './components/tooltip'

import clickoutside from './directives/clickoutside'
import innerscroll from './directives/innerscroll'
import lazyload from './directives/lazyload'
import view from './directives/view'

import ModalPlugin from './components/modal/modal'
import LoadingBarPlugin from './components/loading-bar/loading-bar'

const components = {
	Alert,
	Auxi,
	Backtop,
	Badge,
	Breadcrumb,
	BtnDrop,
	Button,
	ButtonDrop,
	Calendar,
	Card,
	Chart,
	Checkbox,
	Countdown,
	Dropdown,
	Input,
	InputDrop,
	LeftNav,
	LoadingBar,
	Modal,
	Overlay,
	Page: Page.Page,
	PageSize: Page.PageSize,
	Pagination: Page.Pagination,
	Radio,
	Slider,
	Steps,
	Switch,
	Tabs,
	Tag,
	Textarea,
	TextDrop,
	Timeline,
	Tooltip
}

const directives = {
	clickoutside,
	innerscroll,
	lazyload,
	view
}

const plugins = {
	"$LoadingBar": LoadingBarPlugin,
	"$Modal": ModalPlugin,
}

function install(Vue) {
	if (install.installed) return
	
	// register components
	for (var item in components) {
		if (components[item].name) {
			Vue.component(components[item].name, components[item])
		}
	}
	// register directives
	for (var directive in directives) {
		Vue.directive(directive, directives[directive])
	}
	// register plugins
	for (var plugin in plugins) {
		Vue.directive(directive, directives[directive])
		Vue.prototype[plugin] = plugins[plugin]
	}
	console.log("Components:");
	console.log(components);
	console.log("Directives:");
	console.log(directives);
	console.log("Plugins:");
	console.log(plugins);

	// 切换字体
	var plat = navigator.platform
	if (plat.toLowerCase().indexOf('mac') > -1) {
		var body = document.body
		if (body.classList) {
			body.classList.add('mac')
		} else {
			var cls = body.getAttribute('class')
			body.setAttribute('class', cls + ' mac')
		}
	}
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

// export default {
//     install,
//     components
// }
export default Object.assign({install: install}, components)
