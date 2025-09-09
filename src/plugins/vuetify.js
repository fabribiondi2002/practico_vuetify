/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const naturalTheme = {
  dark: false,
  colors: {
    primary: '#036B1B',   // verde hoja
    secondary: '#8D6E63', // tierra
    accent: '#CDDC39',    // lima
    background: '#FAFAF5',// blanco cálido
    surface: '#F5F5DC',   // beige claro
    error: '#E57373',
    warning: '#FFB74D',
    info: '#81D4FA',
    success: '#689F38',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'naturalTheme',
    themes: {
      naturalTheme,
    },
  },
})