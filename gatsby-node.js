const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const services = await graphql(`
    {
      allContentfulServices {
        pageInfo {
          totalCount
        }
      }
    }
  `);
  if (services.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const servicesInfo = services.data.allContentfulServices.pageInfo;
  const servicesPerPage = 6;
  const numPages = Math.ceil(servicesInfo.totalCount / servicesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/services" : `/services/${i}`,
      component: path.resolve("./src/templates/services.js"),
      context: {
        limit: servicesPerPage,
        skip: i * servicesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const blogs = await graphql(`
    {
      allContentfulBlogs {
        pageInfo {
          totalCount
        }
      }
    }
  `);

  if (blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogsInfo = blogs.data.allContentfulBlogs.pageInfo;
  const blogsPerPage = 6;
  const blogsNumPages = Math.ceil(blogsInfo.totalCount / blogsPerPage);

  Array.from({ length: blogsNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blogs" : `/blogs/${i}`,
      component: path.resolve("./src/templates/blogs.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        blogsNumPages,
        currentPage: i + 1,
      },
    });
  });
};
