const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/404.js"))),
  "component---src-pages-aboutus-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/aboutus.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/contact.js"))),
  "component---src-pages-howitwork-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/howitwork.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/index.js"))),
  "component---src-pages-jobs-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/jobs.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/page-2.js"))),
  "component---src-pages-termin-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/termin.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/thanks.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/stephan/Dev/phonerepair/src/pages/using-typescript.tsx")))
}

