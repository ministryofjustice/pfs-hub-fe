const CopyPlugin = require('copy-webpack-plugin');

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
