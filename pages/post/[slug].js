import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

// Get post file names
// When exporting a function called getStaticPaths from a page that uses Dynamic Routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  /* Returns:
  [
    'nextjs-page-options-and-how-they-work.md',
    'nextjs-posting-data-to-postgres-through-prisma.md'
  ]
  */
  const files = fs.readdirSync('posts');

  /* Returns:
  [
    { params: { slug: 'nextjs-page-options-and-how-they-work' } },
    { params: { slug: 'nextjs-posting-data-to-postgres-through-prisma' } }
  ]
  */
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }
  ));

  // note: specific format must be used.
  return {
    paths,
    fallback: false,
  };
}

// Use post file names to create a post object (not parsed by markdown renderer yet)
export async function getStaticProps({ params: { slug } }) {
  /*
  ---
  title: 'Next.js posting data to Postgres through Prisma'
  metaTitle: 'Next.js posting data to Postgres through Prisma'
  metaDesc: 'Posting data to Postgres using Prisma in Next.js'
  socialImage: images/27-10-2021.jpg
  date: '2021-10-27'
  tags:
    - nextjs
    - prisma
  ---

  Hi everyone! In the past couple of articles, we have been looking at Prisma and Postgres databases.

  ...
  */
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  /*
  Converts a string with front-matter, like this:

  ---
  title: 'Next.js posting data to Postgres through Prisma'
  metaTitle: 'Next.js posting data to Postgres through Prisma'
  metaDesc: 'Posting data to Postgres using Prisma in Next.js'
  socialImage: images/27-10-2021.jpg
  date: '2021-10-27'
  tags:
    - nextjs
    - prisma
  ---

  Hi everyone! In the past couple of articles, we have been looking at Prisma and Postgres databases.

  In this article, I will create a Next.js app that can post data to a Postgres database...

  Into an object like this:

  {
    content: '\r\n' +
      'Hi everyone! In the past couple of articles, we have been looking at Prisma and Postgres databases.\r\n' +
      '\r\n' + 
      "### Thank you for reading, and let's connect!\r\n" +
      '\r\n' + ...,
    data: {
      title: 'Next.js posting data to Postgres through Prisma',
      metaTitle: 'Next.js posting data to Postgres through Prisma',
      metaDesc: 'Posting data to Postgres using Prisma in Next.js',
      socialImage: 'images/27-10-2021.jpg',
      date: '2021-10-27',
      tags: [ 'nextjs', 'prisma' ]
    },
    isEmpty: false,
    excerpt: '',
    ...
  }
  */
  const { data: frontmatter, content } = matter(fileName); // matter(fileName) returns an object. Then two variables are created - frontmatter and content. Renames data to frontmatter

  /* Returns:
  {
    props: {
      frontmatter: {
        title: 'Next.js posting data to Postgres through Prisma',
        metaTitle: 'Next.js posting data to Postgres through Prisma',
        metaDesc: 'Posting data to Postgres using Prisma in Next.js',
        socialImage: 'images/27-10-2021.jpg',
        date: '2021-10-27',
        tags: [Array]
      },
      content: '\r\n' +
        'Hi everyone! In the past couple of articles, we have been looking at Prisma and Postgres databases.\r\n' +
        '\r\n' +
        'In this article, I will create a Next.js app that can post data to a Postgres database.\r\n' +
        '\r\n' + ...
    }
  }
  */
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

// Render the actual page using data from other functions
export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
/* [slug].js will generate paths such as:
/nextjs-page-options-and-how-they-work
*/
