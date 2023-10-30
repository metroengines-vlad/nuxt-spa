// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,

//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // https://nuxtjs.org/deployments/github-pages/ TLDR: we assume that the website root will be /, but in this case it is /<repository-name>
//   router: {
//     base: '/nuxt-spa/'
//   },

//   head: {
//     titleTemplate: '%s - static-daze',
//     title: 'static-daze',
//     htmlAttrs: {
//       lang: 'en'
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   loadingIndicator: {
//     name: 'chasing-dots',
//     color: '#007aff'
//     // background: 'white'
//   },

  modules: [
    '@nuxtjs/eslint-module',
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      // useIconCDN: true | false,
      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      // autoImport: true | false,
      // useVuetifyLabs: true | false, 
    }
  }
})


//   // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
//   vuetify: {
//     customVariables: ['~/assets/variables.scss'],
//     theme: {
//       dark: true,
//       themes: {
//         dark: {
//           primary: colors.blue.darken2,
//           accent: colors.grey.darken3,
//           secondary: colors.amber.darken3,
//           info: colors.teal.lighten1,
//           warning: colors.amber.base,
//           error: colors.deepOrange.accent4,
//           success: colors.green.accent3
//         }
//       }
//     }
//   },


// import colors from 'vuetify/es5/util/colors'

// export default {

//   // Global page headers: https://go.nuxtjs.dev/config-head


//   publicRuntimeConfig: {
//     notSecret: process.env.NOT_SECRET || 'gossip'
//   },

//   privateRuntimeConfig: {
//     apiSecret: process.env.API_SECRET || 'secret'
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//   ],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // https://go.nuxtjs.dev/axios
//     '@nuxtjs/axios'
//   ],

//   // Axios module configuration: https://go.nuxtjs.dev/config-axios
//   axios: {
//     // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
//     baseURL: '/'
//   },

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   },

//   toast: {
//     position: 'top-center',
//     duration: 2000
//   }
// }
