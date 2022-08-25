module.exports = { // https://nextjs.org/docs/api-reference/next.config.js/basepath
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true, // loader: 'akamai' + URL / or: unoptimized: true,
    },
  },
  assetPrefix: '/next-markdown-blog',
  basePath: '/next-markdown-blog',
  // assetPrefix: 'https://github.com/LukasDZN/next-markdown-blog', // Changes URL for _next folder: https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
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
