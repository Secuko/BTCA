import { createApp } from 'vue'
import App from './App.vue'
import './main.scss'
import globalMixin from './mixins/globalMixin'

createApp(App).mixin(globalMixin).mount('#app')
