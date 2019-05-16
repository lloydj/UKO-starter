var plugins = [{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://relaxed-colden-d2984f.netlify.com/"},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"head":true},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"UKO FOOD","short_name":"UKO App","description":"Eat Healthy, Eat Localy, Eat UKO FOOD","start_url":"/","background_color":"#e9e9e9","theme_color":"#F0AE0A","display":"minimal-ui","icon":"static/logos/logo-512.png"},
    },{
      plugin: require('/Users/sulloyd/Camercode/eshop/uko/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n    {\n      site {\n        siteMetadata {\n          rssMetadata {\n            site_url\n            feed_url\n            title\n            description\n            image_url\n            author\n            copyright\n          }\n        }\n      }\n    }\n  ","feeds":[{"query":"\n              {\n            allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {\n               edges {\n                 node {\n                   title\n                   slug\n                   publishDate(formatString: \"MMMM DD, YYYY\")\n                   body {\n                     childMarkdownRemark {\n                       html\n                       excerpt(pruneLength: 80)\n                     }\n                   }\n                 }\n               }\n             }\n           }\n      ","output":"/rss.xml"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
