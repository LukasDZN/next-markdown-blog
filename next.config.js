module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true, // loader: 'akamai' + URL / or: unoptimized: true,
    },
  },
  trailingSlash: true, // https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { outDir }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   }
  // },
}
