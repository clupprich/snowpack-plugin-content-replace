const fs = require('fs');
const path = require('path');

module.exports = function(snowpackConfig, pluginOptions) {
  const replacements = pluginOptions.replacements;

  return {
    name: 'snowpack-plugin-content-replace',
    async optimize({ buildDirectory, log }) {
      Object.keys(replacements).forEach(function(filename) {
        fs.readFile(path.join(buildDirectory, filename), 'utf-8', function(err, data) {
          if (err) throw err;

          for (const [search, replacement] of Object.entries(replacements[filename])) {
            log(`Replacing ${search} with ${replacement} in ${filename}.`);
            data = data.replace(search, replacement);
          }

          fs.writeFile(path.join(buildDirectory, filename), data, 'utf-8', function(err) {
            if (err) throw err;
          });
        });
      });

      log('Done replacing.')
    }
  };
};
