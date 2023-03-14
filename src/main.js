import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

import { faUserSecret, faMoneyBill, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faHouse  } from '@fortawesome/free-solid-svg-icons'
import { faRobot, faWallet, faCircleInfo, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faBarsProgress, faUser, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */

library.add(faUserSecret, faCircleInfo, faMoneyBill, faCircleCheck)
library.add(faHouse, faCircleChevronDown,faWallet, faFaceSmileBeam)
library.add(faRobot, faBarsProgress, faUser, faBitcoin)

const vuetify = createVuetify({
  components,
  directives,
})


import './assets/main.css'

const app = createApp(App)

app.use(createPinia());
app.use(router)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
