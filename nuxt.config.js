import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://hub.magnet.co/yoko/wp-json/wp/v2/posts?page=1&per_page=20")
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://rsms.me/inter/inter.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  // css: ["~/assets/mixins.scss"],
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/dateformat.js",
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
  ],
  styleResources: {
    scss: [
      '~assets/scss/_variables.scss',
    ]
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'gif'],
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  generate: {
    routes: dynamicRoutes
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
