import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './plugins/element.js'
import './assets/theme_styles/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/spacing.css';
import './assets/css/typographic.css';

Vue.config.productionTip = false

Vue.prototype.$isTChat = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')