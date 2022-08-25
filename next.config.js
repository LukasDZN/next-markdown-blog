module.exports = { // https://nextjs.org/docs/api-reference/next.config.js/basepath
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true, // loader: 'akamai' + URL / or: unoptimized: true,
    },
  },
  assetPrefix:  process.env.NODE_ENV === 'production' ? '/next-markdown-blog' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/next-markdown-blog' : '',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dir }
  // ) {
  //   return {
  //     '/': { page: '/' }, // docs is replaced by next-markdown-blog in GitHub URL
  //   }
  // },
  // trailingSlash: true, // https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there
}
