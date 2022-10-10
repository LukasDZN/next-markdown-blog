This is a Markdown powered Next.js blog! [View Live version](https://lukasdzn.github.io/next-markdown-blog/)

## Getting Started

### Installation

```bash
yarn 
```

### Development

```bash
yarn dev
```

Homepage [http://localhost:3000/next-markdown-blog](http://localhost:3000/next-markdown-blog)

### Local static file serving

```bash
serve -s ./out -p 8000
```

NOTE:
In order to preview the exported static files locally, the following has to be edited:

- Comment out from next.config.js (otherwise "Uncaught SyntaxError: Unexpected token '<' (at ...)" will be thrown":
- - // assetPrefix: '/next-markdown-blog',
- - // basePath: '/next-markdown-blog',
- Remove '/next-markdown-blog' from Image src

To deploy to GitHub, undo the changes above.

## Resources

This blog was initially made by following this [article](https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour) (repo: https://github.com/rebelchris/next-markdown-blog).
