
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['o89Nvy5tgWQBkHeWQYRsKC'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  