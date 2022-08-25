module.exports = { // https://nextjs.org/docs/api-reference/next.config.js/basepath
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true, // loader: 'akamai' + URL / or: unoptimized: true,
    },
  },
  trailingSlash: true, // https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dir }
  // ) {
  //   return {
  //     '/': { page: '/' }, // docs is replaced by next-markdown-blog in GitHub URL
  //   }
  // },
  // assetPrefix: './',
  basePath: process.env.NODE_ENV === 'production' ? '/next-markdown-blog' : '',
}
