module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    })
    return config
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log({ defaultPathMap })
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/posts/lets-party": {
        page: "/posts/[slug]",
        query: { slug: "lets-party" }
      },
      "/posts/some-food-for-thought": {
        page: "/posts/[slug]",
        query: { slug: "some-food-for-thought" }
      }
    }
  }
}

// module.exports = {
//   exportPathMap: async function(
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/readme.md': { page: '/readme' },
//       '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//       '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//       '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
//     }
//   },
// }

// const routes = {
//   "/": { page: "/" },
//   "/info": { page: "/info" }
// }
// //get all .md files in the posts dir
// const blogs = glob.sync("src/posts/**/*.md")

// //remove path and extension to leave filename only
// const blogSlugs = blogs.map(file =>
//   file
//     .split("/")[2]
//     .replace(/ /g, "-")
//     .slice(0, -3)
//     .trim()
// )

// //add each blog to the routes obj
// blogSlugs.forEach(blog => {
//   routes[`/blog/${blog}`] = { page: "/blog/[slug]", query: { slug: blog } }
// })
