const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/templates/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/templates/post.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/templates/page.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/templates/tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/sulloyd/Camercode/eshop/uko/src/pages/contact.js")))
}

