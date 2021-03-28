import Vue from 'vue'
import App from './App.vue'
Vue.mixin(require('./plugins/setup'))
Vue.mixin(require('./plugins/blade'));
import router from './router'
window.APP_NAME = "BEEM";
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')