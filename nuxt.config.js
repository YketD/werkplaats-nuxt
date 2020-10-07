export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/scss/app.scss'
    ],
    router: {
        linkActiveClass: 'your-custom-active-link',
        linkExactActiveClass: 'router-link-exact-active',
    },
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        { src: '~/plugins/vue-notification', mode: 'client' },
        { src: '~/plugins/font-awesome', mode: 'client' },
        { src: '~/plugins/v-calendar', mode: 'client' }
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/prismic',
    ],
    proxy: {
        '/api': {
            target: 'http://localhost:8000/api',
            pathRewrite: {
                '^/api' : '/'
            }
        }
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {},

    prismic: {
        endpoint: 'https://werkplaats75c.prismic.io/api/v2',
    },

    axios: {
        baseURL: 'http://localhost:8000/api', // Used as fallback if no runtime config is provided
    },
}
