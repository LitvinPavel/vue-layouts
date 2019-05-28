import Vue from 'vue'
import App from './App.vue'
import router from './router'
const VueTouch = require('vue-touch')
import './registerServiceWorker'
import './plugins/element.js'
import './assets/theme_styles/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/spacing.css';
import './assets/css/typographic.css';

Vue.config.productionTip = false

Vue.prototype.$isTChat = false
Vue.use(VueTouch, { name: 'v-touch' })

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')