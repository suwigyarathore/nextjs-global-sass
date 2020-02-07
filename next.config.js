const withSass = require("@zeit/next-sass"); // Add this declaration
// We modified the code earlier to add Sass
const path = require("path");
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack(config) {
    config.module.rules.forEach(rule => {
      // search for the sass loader
      if (String(rule.test) === String(/\.sass$/)) {
        // append the sass-resources-loader
        rule.use.push({
          loader: "sass-resources-loader",
          options: {
            // Provide path to the file with resources
            resources: ["../kramp/dc3/libs/css/src/index.scss"]
          }
        });
      }
    });
    return config;
  }
});
