import Vue from 'vue'

import quasar, { colors } from 'quasar'
// Import icon libraries
import '@quasar/extras/mdi-v7/mdi-v7.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

Vue.use(quasar, {
  plugins: {}
})

colors.setBrand('primary', '#ff002f')
