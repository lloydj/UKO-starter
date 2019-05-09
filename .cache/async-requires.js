// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-post-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-page-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-tag-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/sulloyd/Camercode/eshop/uko/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/sulloyd/Camercode/eshop/uko/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/sulloyd/Camercode/eshop/uko/.cache/data.json")

