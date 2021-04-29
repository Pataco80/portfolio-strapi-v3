const path = require(`path`)

// Create projects pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectsTemplate = path.resolve(`src/templates/project-template.js`)
  const result = await graphql(`
    {
      allStrapiProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allStrapiProjects.edges.forEach((project) => {
    createPage({
      path: `/projects/${project.node.slug}`,
      component: projectsTemplate,
      context: {
        slug: project.node.slug,
      },
    })
  })
}
