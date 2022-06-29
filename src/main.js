import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import { Device } from '@capacitor/device';
import { StatusBar } from '@awesome-cordova-plugins/status-bar';

document.addEventListener('deviceready', function(e) {


  StatusBar.overlaysWebView(false)

  StatusBar.backgroundColorByHexString('#2c2c54')

})

createApp(App).use(store).use(router).mount('#app')
