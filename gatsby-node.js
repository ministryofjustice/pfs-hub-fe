const CopyPlugin = require('copy-webpack-plugin');
const axios = require('axios');

const get = endpoint => axios.get(`https://drupal.digital-hub-stage.hmpps.dsd.io/v1/api${endpoint}`);

const getData = ids =>
  Promise.all(
    ids.map(async id => {
      const { data } = await get(`/content/${id}`);

      return { ...data };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const data = await getData(['4391']);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/content/4391`,
    component: require.resolve('./src/templates/text.js'),
    context: {
      title: data[0].title,
      subtitle: data[0].stand_first,
      content: data[0].description.value,
    }
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new CopyPlugin([
                {
                    from: "node_modules/govuk-frontend/govuk/assets",
                    to: './assets'
                } 
            ]),
        ],
    })
}
